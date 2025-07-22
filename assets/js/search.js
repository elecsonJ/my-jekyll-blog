class BlogSearch {
    constructor() {
        this.posts = [];
        this.searchInput = document.getElementById('search-input');
        this.languageFilter = document.getElementById('language-filter');
        this.categoryFilter = document.getElementById('category-filter');
        this.sortFilter = document.getElementById('sort-filter');
        
        this.titleResults = document.getElementById('title-results');
        this.contentResults = document.getElementById('content-results');
        this.titleResultsList = document.getElementById('title-results-list');
        this.contentResultsList = document.getElementById('content-results-list');
        
        this.titleCount = document.getElementById('title-count');
        this.contentCount = document.getElementById('content-count');
        this.searchStats = document.getElementById('search-stats');
        this.searchLoading = document.getElementById('search-loading');
        this.noResults = document.getElementById('no-results');
        
        this.searchHistory = this.loadSearchHistory();
        this.init();
    }

    async init() {
        try {
            this.showLoading(true);
            await this.loadPosts();
            this.bindEvents();
            this.handleUrlParams();
            this.showLoading(false);
        } catch (error) {
            console.error('Search initialization failed:', error);
            this.showLoading(false);
        }
    }

    async loadPosts() {
        try {
            const response = await fetch('/my-jekyll-blog/search.json');
            if (!response.ok) throw new Error('Failed to fetch search data');
            this.posts = await response.json();
            console.log(`Loaded ${this.posts.length} posts for search`);
        } catch (error) {
            console.error('Error loading search data:', error);
            this.posts = [];
        }
    }

    bindEvents() {
        // 검색 입력 이벤트 (디바운싱 적용)
        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value.trim());
            }, 300);
        });

        // 필터 변경 이벤트
        [this.languageFilter, this.categoryFilter, this.sortFilter].forEach(filter => {
            filter.addEventListener('change', () => {
                this.performSearch(this.searchInput.value.trim());
            });
        });

        // 키보드 단축키 (/ 키로 검색창 포커스)
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && e.target !== this.searchInput) {
                e.preventDefault();
                this.searchInput.focus();
            }
        });

        // 엔터 키 검색 기록 저장
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query) {
                    this.saveSearchHistory(query);
                }
            }
        });
    }

    handleUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        if (query) {
            this.searchInput.value = query;
            this.performSearch(query);
        }
    }

    // 소프트 검색을 위한 텍스트 정규화
    normalizeText(text) {
        return text
            .toLowerCase()
            .replace(/\s+/g, '') // 모든 공백 제거
            .replace(/[.,!?;:"'\-()[\]{}]/g, '') // 구두점 제거
            .replace(/[\u3131-\u3163]/g, '') // 한글 자모 제거
            .trim();
    }

    // 검색어 하이라이트
    highlightText(text, query) {
        if (!query) return text;
        
        const normalizedQuery = this.normalizeText(query);
        const normalizedText = this.normalizeText(text);
        
        if (normalizedText.includes(normalizedQuery)) {
            // 원본 텍스트에서 대략적인 위치 찾기
            const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            return text.replace(regex, '<span class="highlight">$1</span>');
        }
        
        return text;
    }

    // 검색 수행
    performSearch(query) {
        this.hideAllResults();
        
        if (!query || query.length < 1) {
            return;
        }

        this.showLoading(true);
        
        // 필터 적용
        const filteredPosts = this.applyFilters(this.posts);
        
        // 검색 결과 분류
        const { titleMatches, contentMatches } = this.categorizeResults(filteredPosts, query);
        
        // 정렬 적용
        const sortedTitleMatches = this.sortResults(titleMatches, query);
        const sortedContentMatches = this.sortResults(contentMatches, query);
        
        // 결과 표시
        this.displayResults(sortedTitleMatches, sortedContentMatches, query);
        this.updateStats(sortedTitleMatches.length + sortedContentMatches.length, query);
        
        this.showLoading(false);
        
        // URL 업데이트 (검색 결과 공유 가능)
        this.updateUrl(query);
    }

    applyFilters(posts) {
        const language = this.languageFilter.value;
        const category = this.categoryFilter.value;
        
        return posts.filter(post => {
            // 언어 필터
            if (language !== 'all') {
                const postLang = post.lang || 'ko';
                if ((language === 'ko' && postLang !== 'ko') || 
                    (language === 'en' && postLang === 'ko')) {
                    return false;
                }
            }
            
            // 카테고리 필터
            if (category !== 'all') {
                if (!post.categories || !post.categories.some(cat => 
                    cat.toLowerCase().includes(category.toLowerCase()))) {
                    return false;
                }
            }
            
            return true;
        });
    }

    categorizeResults(posts, query) {
        const titleMatches = [];
        const contentMatches = [];
        
        const normalizedQuery = this.normalizeText(query);
        
        posts.forEach(post => {
            const normalizedTitle = this.normalizeText(post.title);
            const normalizedContent = this.normalizeText(post.full_content);
            const normalizedDescription = this.normalizeText(post.description || '');
            const normalizedTags = post.tags ? post.tags.join(' ').toLowerCase() : '';
            
            // 제목에서 검색
            if (normalizedTitle.includes(normalizedQuery)) {
                titleMatches.push({
                    ...post,
                    matchType: 'title',
                    relevanceScore: this.calculateRelevance(post, query, 'title')
                });
            }
            // 내용, 설명, 태그에서 검색 (제목 일치 제외)
            else if (normalizedContent.includes(normalizedQuery) || 
                     normalizedDescription.includes(normalizedQuery) ||
                     normalizedTags.includes(normalizedQuery.toLowerCase())) {
                contentMatches.push({
                    ...post,
                    matchType: 'content',
                    relevanceScore: this.calculateRelevance(post, query, 'content')
                });
            }
        });
        
        return { titleMatches, contentMatches };
    }

    calculateRelevance(post, query, matchType) {
        let score = 0;
        const normalizedQuery = this.normalizeText(query);
        
        // 기본 점수 (제목 일치가 더 높은 점수)
        score += matchType === 'title' ? 100 : 50;
        
        // 정확한 매치 보너스
        if (post.title.toLowerCase().includes(query.toLowerCase())) {
            score += 50;
        }
        
        // 태그 매치 보너스
        if (post.tags && post.tags.some(tag => 
            tag.toLowerCase().includes(query.toLowerCase()))) {
            score += 25;
        }
        
        // 최신글 보너스 (최근 30일)
        const postDate = new Date(post.date);
        const daysDiff = (new Date() - postDate) / (1000 * 60 * 60 * 24);
        if (daysDiff < 30) {
            score += 10;
        }
        
        // 쿼리 길이에 따른 조정
        if (query.length > 5) {
            score += 10;
        }
        
        return score;
    }

    sortResults(results, query) {
        const sortType = this.sortFilter.value;
        
        return results.sort((a, b) => {
            switch (sortType) {
                case 'relevance':
                    return b.relevanceScore - a.relevanceScore;
                case 'date-desc':
                    return new Date(b.date) - new Date(a.date);
                case 'date-asc':
                    return new Date(a.date) - new Date(b.date);
                case 'title':
                    return a.title.localeCompare(b.title);
                default:
                    return b.relevanceScore - a.relevanceScore;
            }
        });
    }

    displayResults(titleMatches, contentMatches, query) {
        // 제목 일치 결과 표시
        if (titleMatches.length > 0) {
            this.titleResults.style.display = 'block';
            this.titleCount.textContent = `(${titleMatches.length}개)`;
            this.titleResultsList.innerHTML = titleMatches.map(post => 
                this.createResultHTML(post, query)).join('');
        }
        
        // 내용 포함 결과 표시
        if (contentMatches.length > 0) {
            this.contentResults.style.display = 'block';
            this.contentCount.textContent = `(${contentMatches.length}개)`;
            this.contentResultsList.innerHTML = contentMatches.map(post => 
                this.createResultHTML(post, query)).join('');
        }
        
        // 결과 없음 표시
        if (titleMatches.length === 0 && contentMatches.length === 0) {
            this.noResults.style.display = 'block';
        }
    }

    createResultHTML(post, query) {
        const highlightedTitle = this.highlightText(post.title, query);
        const highlightedContent = this.highlightText(post.description || post.content, query);
        
        const tags = post.tags ? post.tags.map(tag => 
            `<span class="tag">${tag}</span>`).join('') : '';
        
        return `
            <li class="search-result">
                <h4><a href="${post.url}">${highlightedTitle}</a></h4>
                <div class="search-meta">
                    ${post.date} • ${post.categories ? post.categories.join(', ') : ''} • ${post.lang || 'ko'}
                </div>
                <p class="search-excerpt">${highlightedContent}</p>
                ${tags ? `<div class="search-tags">${tags}</div>` : ''}
            </li>
        `;
    }

    updateStats(totalResults, query) {
        if (totalResults > 0) {
            this.searchStats.style.display = 'block';
            this.searchStats.textContent = `"${query}"에 대한 검색 결과 ${totalResults}개`;
        }
    }

    updateUrl(query) {
        const url = new URL(window.location);
        url.searchParams.set('q', query);
        window.history.pushState({}, '', url);
    }

    hideAllResults() {
        this.titleResults.style.display = 'none';
        this.contentResults.style.display = 'none';
        this.noResults.style.display = 'none';
        this.searchStats.style.display = 'none';
    }

    showLoading(show) {
        this.searchLoading.style.display = show ? 'block' : 'none';
    }

    // 검색 기록 관리
    loadSearchHistory() {
        try {
            return JSON.parse(localStorage.getItem('blog_search_history') || '[]');
        } catch {
            return [];
        }
    }

    saveSearchHistory(query) {
        this.searchHistory = this.searchHistory.filter(item => item !== query);
        this.searchHistory.unshift(query);
        this.searchHistory = this.searchHistory.slice(0, 10); // 최대 10개 저장
        
        try {
            localStorage.setItem('blog_search_history', JSON.stringify(this.searchHistory));
        } catch {
            // localStorage 저장 실패 시 무시
        }
    }
}

// 페이지 로드시 검색 시스템 초기화
document.addEventListener('DOMContentLoaded', () => {
    new BlogSearch();
});