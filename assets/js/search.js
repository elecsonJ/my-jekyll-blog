class BlogSearch {
    constructor() {
        this.posts = [];
        this.tags = [];
        this.currentResults = [];
        this.selectedTag = null;
        
        // 페이지네이션
        this.currentPage = 1;
        this.resultsPerPage = 10;
        
        // DOM 요소들
        this.searchInput = document.getElementById('search-input');
        this.languageFilter = document.getElementById('language-filter');
        this.categoryFilter = document.getElementById('category-filter');
        this.sortFilter = document.getElementById('sort-filter');
        this.clearFiltersBtn = document.getElementById('clear-filters');
        
        this.titleResults = document.getElementById('title-results');
        this.contentResults = document.getElementById('content-results');
        this.titleResultsList = document.getElementById('title-results-list');
        this.contentResultsList = document.getElementById('content-results-list');
        
        this.titleCount = document.getElementById('title-count');
        this.contentCount = document.getElementById('content-count');
        this.searchStats = document.getElementById('search-stats');
        this.resultsInfo = document.getElementById('results-info');
        this.paginationInfo = document.getElementById('pagination-info');
        this.searchLoading = document.getElementById('search-loading');
        this.noResults = document.getElementById('no-results');
        
        // 태그 관련
        this.tagCloud = document.getElementById('tag-cloud');
        this.tagsLoading = document.getElementById('tags-loading');
        this.popularTagsInfo = document.getElementById('popular-tags-info');
        
        // 페이지네이션
        this.pagination = document.getElementById('pagination');
        this.prevPageBtn = document.getElementById('prev-page');
        this.nextPageBtn = document.getElementById('next-page');
        this.pageNumbers = document.getElementById('page-numbers');
        
        this.searchHistory = this.loadSearchHistory();
        this.init();
    }

    async init() {
        try {
            this.showLoading(true);
            await Promise.all([
                this.loadPosts(),
                this.loadTags()
            ]);
            this.bindEvents();
            this.handleUrlParams();
        } catch (error) {
            console.error('Search initialization failed:', error);
        } finally {
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

    async loadTags() {
        try {
            const response = await fetch('/my-jekyll-blog/tags.json');
            if (!response.ok) throw new Error('Failed to fetch tags data');
            const tagsData = await response.json();
            this.tags = tagsData.all_tags || [];
            this.renderTagCloud();
            console.log(`Loaded ${this.tags.length} tags`);
        } catch (error) {
            console.error('Error loading tags data:', error);
            this.tags = [];
            this.renderTagCloud(); // 빈 태그로라도 UI 업데이트
        }
    }

    renderTagCloud() {
        if (this.tagsLoading) {
            this.tagsLoading.style.display = 'none';
        }
        
        if (this.tags.length === 0) {
            this.tagCloud.innerHTML = '<span style="color: #999;">태그를 불러올 수 없습니다.</span>';
            return;
        }

        // 태그를 사용 빈도순으로 정렬
        const sortedTags = [...this.tags].sort((a, b) => b.count - a.count);
        
        // 상위 20개 태그만 표시
        const displayTags = sortedTags.slice(0, 20);
        
        // 최대/최소 사용 횟수
        const maxCount = Math.max(...displayTags.map(t => t.count));
        const minCount = Math.min(...displayTags.map(t => t.count));
        
        this.tagCloud.innerHTML = displayTags.map(tag => {
            // 크기 계산 (1-5 레벨)
            const normalizedSize = maxCount === minCount ? 3 : 
                Math.ceil(((tag.count - minCount) / (maxCount - minCount)) * 4) + 1;
            
            return `
                <span class="tag-item size-${normalizedSize}" 
                      data-tag="${tag.name}" 
                      title="${tag.name} (${tag.count}개 글)">
                    ${tag.name}
                </span>
            `;
        }).join('');

        // 태그 클릭 이벤트
        this.tagCloud.querySelectorAll('.tag-item').forEach(tagElement => {
            tagElement.addEventListener('click', (e) => {
                const tagName = e.target.dataset.tag;
                this.selectTag(tagName);
            });
        });

        // 인기 태그 정보 업데이트
        if (this.popularTagsInfo) {
            this.popularTagsInfo.textContent = 
                `총 ${this.tags.length}개 태그 중 인기 태그 ${displayTags.length}개 표시`;
        }
    }

    selectTag(tagName) {
        console.log('Tag selected:', tagName);
        
        // 기존 선택 해제
        this.tagCloud.querySelectorAll('.tag-item').forEach(el => {
            el.classList.remove('active');
        });

        if (this.selectedTag === tagName) {
            // 이미 선택된 태그 클릭시 선택 해제
            this.selectedTag = null;
            this.searchInput.value = '';
        } else {
            // 새 태그 선택
            this.selectedTag = tagName;
            this.searchInput.value = tagName;
            
            // 선택된 태그 하이라이트
            const selectedElement = this.tagCloud.querySelector(`[data-tag="${tagName}"]`);
            if (selectedElement) {
                selectedElement.classList.add('active');
            }
        }

        // 검색 실행
        this.performSearch(this.searchInput.value.trim());
    }

    bindEvents() {
        // 검색 입력 이벤트 (디바운싱 적용)
        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                // 태그 선택 상태 업데이트
                const inputValue = e.target.value.trim();
                if (this.selectedTag && inputValue !== this.selectedTag) {
                    this.selectedTag = null;
                    this.tagCloud.querySelectorAll('.tag-item').forEach(el => {
                        el.classList.remove('active');
                    });
                }
                this.performSearch(inputValue);
            }, 300);
        });

        // 필터 변경 이벤트
        [this.languageFilter, this.categoryFilter, this.sortFilter].forEach(filter => {
            if (filter) {
                filter.addEventListener('change', () => {
                    this.currentPage = 1; // 필터 변경시 첫 페이지로
                    this.performSearch(this.searchInput.value.trim());
                });
            }
        });

        // 필터 초기화
        if (this.clearFiltersBtn) {
            this.clearFiltersBtn.addEventListener('click', () => {
                if (this.languageFilter) this.languageFilter.value = 'all';
                if (this.categoryFilter) this.categoryFilter.value = 'all';
                if (this.sortFilter) this.sortFilter.value = 'relevance';
                if (this.searchInput) this.searchInput.value = '';
                this.selectedTag = null;
                this.currentPage = 1;
                
                this.tagCloud.querySelectorAll('.tag-item').forEach(el => {
                    el.classList.remove('active');
                });
                
                this.hideAllResults();
            });
        }

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

        // 페이지네이션 이벤트
        if (this.prevPageBtn) {
            this.prevPageBtn.addEventListener('click', () => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.displayCurrentResults();
                }
            });
        }

        if (this.nextPageBtn) {
            this.nextPageBtn.addEventListener('click', () => {
                const totalPages = this.getTotalPages();
                if (this.currentPage < totalPages) {
                    this.currentPage++;
                    this.displayCurrentResults();
                }
            });
        }
    }

    handleUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        const tag = urlParams.get('tag');
        
        if (tag) {
            this.selectTag(tag);
        } else if (query) {
            this.searchInput.value = query;
            this.performSearch(query);
        }
    }

    // 소프트 검색을 위한 텍스트 정규화 (안전성 강화)
    normalizeText(text) {
        if (!text || typeof text !== 'string') return '';
        
        try {
            // 길이 제한으로 무한 루프 방지
            if (text.length > 50000) {
                text = text.substring(0, 50000);
            }
            
            return text
                .toLowerCase()
                .replace(/\s+/g, '') // 모든 공백 제거
                .replace(/[.,!?;:"'\-()[\]{}]/g, '') // 구두점 제거
                .replace(/[\u3131-\u3163]/g, '') // 한글 자모 제거
                .trim();
        } catch (error) {
            console.warn('Text normalization error:', error);
            return '';
        }
    }

    // 검색어 하이라이트 (안전성 강화)
    highlightText(text, query) {
        if (!query || !text || typeof text !== 'string') return text;
        
        try {
            // 길이 제한
            if (text.length > 10000) {
                text = text.substring(0, 10000) + '...';
            }
            
            const normalizedQuery = this.normalizeText(query);
            const normalizedText = this.normalizeText(text);
            
            if (normalizedQuery && normalizedText.includes(normalizedQuery)) {
                // 원본 텍스트에서 대략적인 위치 찾기
                const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`(${escapedQuery})`, 'gi');
                return text.replace(regex, '<span class="highlight">$1</span>');
            }
        } catch (error) {
            console.warn('Highlight error:', error);
        }
        
        return text;
    }

    // 검색 수행 (타임아웃 추가)
    async performSearch(query) {
        console.log('Performing search for:', query);
        
        this.hideAllResults();
        
        if (!query || query.length < 1) {
            this.showLoading(false);
            return;
        }

        this.showLoading(true);
        this.currentPage = 1; // 새 검색시 첫 페이지로
        
        try {
            // 타임아웃으로 무한 루프 방지
            const searchPromise = this.executeSearch(query);
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Search timeout')), 5000)
            );
            
            await Promise.race([searchPromise, timeoutPromise]);
        } catch (error) {
            console.error('Search error:', error);
            this.noResults.style.display = 'block';
        } finally {
            this.showLoading(false);
        }
    }

    async executeSearch(query) {
        // 필터 적용
        const filteredPosts = this.applyFilters(this.posts);
        console.log('Filtered posts:', filteredPosts.length);
        
        // 검색 결과 분류 (배치 처리)
        const { titleMatches, contentMatches } = await this.categorizeResults(filteredPosts, query);
        console.log('Title matches:', titleMatches.length, 'Content matches:', contentMatches.length);
        
        // 정렬 적용
        const sortedTitleMatches = this.sortResults(titleMatches, query);
        const sortedContentMatches = this.sortResults(contentMatches, query);
        
        // 결과 저장
        this.currentResults = {
            titleMatches: sortedTitleMatches,
            contentMatches: sortedContentMatches,
            query: query
        };
        
        // 결과 표시
        this.displayCurrentResults();
        
        // URL 업데이트
        this.updateUrl(query);
    }

    displayCurrentResults() {
        if (!this.currentResults) {
            this.showLoading(false);
            return;
        }

        const { titleMatches, contentMatches, query } = this.currentResults;
        
        // 페이지네이션 적용
        const startIndex = (this.currentPage - 1) * this.resultsPerPage;
        const endIndex = startIndex + this.resultsPerPage;
        
        // 제목 일치 결과부터 우선 표시
        let paginatedTitleResults = [];
        let paginatedContentResults = [];
        
        if (startIndex < titleMatches.length) {
            // 아직 제목 결과가 남아있는 경우
            paginatedTitleResults = titleMatches.slice(startIndex, endIndex);
            
            if (paginatedTitleResults.length < this.resultsPerPage) {
                // 제목 결과로 페이지가 다 차지 않으면 내용 결과로 채움
                const remainingSlots = this.resultsPerPage - paginatedTitleResults.length;
                const contentStartIndex = Math.max(0, startIndex - titleMatches.length);
                paginatedContentResults = contentMatches.slice(contentStartIndex, contentStartIndex + remainingSlots);
            }
        } else {
            // 제목 결과를 모두 지나친 경우
            const contentStartIndex = startIndex - titleMatches.length;
            paginatedContentResults = contentMatches.slice(contentStartIndex, contentStartIndex + this.resultsPerPage);
        }
        
        // 결과 표시
        if (paginatedTitleResults.length > 0 && this.titleResults) {
            this.titleResults.style.display = 'block';
            if (this.titleCount) {
                this.titleCount.textContent = `(${paginatedTitleResults.length}/${titleMatches.length}개)`;
            }
            if (this.titleResultsList) {
                this.titleResultsList.innerHTML = paginatedTitleResults.map(post => 
                    this.createResultHTML(post, query)).join('');
            }
        } else if (this.titleResults) {
            this.titleResults.style.display = 'none';
        }
        
        if (paginatedContentResults.length > 0 && this.contentResults) {
            this.contentResults.style.display = 'block';
            if (this.contentCount) {
                this.contentCount.textContent = `(${paginatedContentResults.length}/${contentMatches.length}개)`;
            }
            if (this.contentResultsList) {
                this.contentResultsList.innerHTML = paginatedContentResults.map(post => 
                    this.createResultHTML(post, query)).join('');
            }
        } else if (this.contentResults) {
            this.contentResults.style.display = 'none';
        }
        
        // 결과 없음 표시
        const totalResults = titleMatches.length + contentMatches.length;
        if (totalResults === 0 && this.noResults) {
            this.noResults.style.display = 'block';
        }
        
        // 통계 및 페이지네이션 업데이트
        this.updateStats(totalResults, query);
        this.updatePagination(totalResults);
    }

    applyFilters(posts) {
        const language = this.languageFilter ? this.languageFilter.value : 'all';
        const category = this.categoryFilter ? this.categoryFilter.value : 'all';
        
        return posts.filter(post => {
            try {
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
                    if (!post.categories || !Array.isArray(post.categories) || 
                        !post.categories.some(cat => 
                            cat && cat.toLowerCase().includes(category.toLowerCase()))) {
                        return false;
                    }
                }
                
                return true;
            } catch (error) {
                console.warn('Filter error for post:', post.title, error);
                return true; // 에러 시 포함
            }
        });
    }

    // 검색 결과 분류 (배치 처리 및 안전성 강화)
    async categorizeResults(posts, query) {
        const titleMatches = [];
        const contentMatches = [];
        
        const normalizedQuery = this.normalizeText(query);
        if (!normalizedQuery) {
            return { titleMatches, contentMatches };
        }

        // 배치 크기
        const batchSize = 10;
        
        for (let i = 0; i < posts.length; i += batchSize) {
            const batch = posts.slice(i, i + batchSize);
            
            // 각 배치를 처리하고 UI 업데이트 허용
            await new Promise(resolve => {
                setTimeout(() => {
                    this.processBatch(batch, normalizedQuery, query, titleMatches, contentMatches);
                    resolve();
                }, 0);
            });
        }
        
        return { titleMatches, contentMatches };
    }

    processBatch(posts, normalizedQuery, originalQuery, titleMatches, contentMatches) {
        posts.forEach(post => {
            try {
                if (!post || typeof post !== 'object') return;

                const normalizedTitle = this.normalizeText(post.title);
                const normalizedContent = this.normalizeText(post.full_content);
                const normalizedDescription = this.normalizeText(post.description);
                const normalizedTags = Array.isArray(post.tags) ? 
                    post.tags.filter(tag => tag && typeof tag === 'string')
                             .join(' ').toLowerCase() : '';
                
                // 제목에서 검색
                if (normalizedTitle && normalizedTitle.includes(normalizedQuery)) {
                    titleMatches.push({
                        ...post,
                        matchType: 'title',
                        relevanceScore: this.calculateRelevance(post, originalQuery, 'title')
                    });
                }
                // 내용, 설명, 태그에서 검색 (제목 일치 제외)
                else if ((normalizedContent && normalizedContent.includes(normalizedQuery)) || 
                         (normalizedDescription && normalizedDescription.includes(normalizedQuery)) ||
                         (normalizedTags && normalizedTags.includes(normalizedQuery.toLowerCase()))) {
                    contentMatches.push({
                        ...post,
                        matchType: 'content',
                        relevanceScore: this.calculateRelevance(post, originalQuery, 'content')
                    });
                }
            } catch (error) {
                console.warn('Error processing post:', post.title || 'unknown', error);
            }
        });
    }

    calculateRelevance(post, query, matchType) {
        let score = 0;
        
        try {
            // 기본 점수 (제목 일치가 더 높은 점수)
            score += matchType === 'title' ? 100 : 50;
            
            // 정확한 매치 보너스
            if (post.title && typeof post.title === 'string' && 
                post.title.toLowerCase().includes(query.toLowerCase())) {
                score += 50;
            }
            
            // 태그 매치 보너스
            if (Array.isArray(post.tags) && post.tags.some(tag => 
                tag && typeof tag === 'string' && 
                tag.toLowerCase().includes(query.toLowerCase()))) {
                score += 25;
            }
            
            // 태그 완전 일치 보너스
            if (this.selectedTag && Array.isArray(post.tags) && 
                post.tags.includes(this.selectedTag)) {
                score += 75;
            }
            
            // 최신글 보너스 (최근 30일)
            if (post.date) {
                try {
                    const postDate = new Date(post.date);
                    if (!isNaN(postDate.getTime())) {
                        const daysDiff = (new Date() - postDate) / (1000 * 60 * 60 * 24);
                        if (daysDiff < 30) {
                            score += 10;
                        }
                    }
                } catch (dateError) {
                    console.warn('Date processing error:', dateError);
                }
            }
        } catch (error) {
            console.warn('Error calculating relevance:', error);
        }
        
        return score;
    }

    sortResults(results, query) {
        const sortType = this.sortFilter ? this.sortFilter.value : 'relevance';
        
        return results.sort((a, b) => {
            try {
                switch (sortType) {
                    case 'relevance':
                        return (b.relevanceScore || 0) - (a.relevanceScore || 0);
                    case 'date-desc':
                        return new Date(b.date || 0) - new Date(a.date || 0);
                    case 'date-asc':
                        return new Date(a.date || 0) - new Date(b.date || 0);
                    case 'title':
                        return (a.title || '').localeCompare(b.title || '');
                    default:
                        return (b.relevanceScore || 0) - (a.relevanceScore || 0);
                }
            } catch (error) {
                console.warn('Error sorting results:', error);
                return 0;
            }
        });
    }

    createResultHTML(post, query) {
        try {
            if (!post || typeof post !== 'object') {
                return '<li class="search-result">오류가 발생했습니다.</li>';
            }

            const highlightedTitle = this.highlightText(post.title || '', query);
            const highlightedContent = this.highlightText(
                post.description || post.content || '', query);
            
            const tags = Array.isArray(post.tags) ? 
                post.tags.filter(tag => tag && typeof tag === 'string')
                         .map(tag => `<span class="tag" data-tag="${tag}" style="cursor: pointer;">${tag}</span>`)
                         .join('') : '';
            
            return `
                <li class="search-result">
                    <h4><a href="${post.url || '#'}">${highlightedTitle}</a></h4>
                    <div class="search-meta">
                        ${post.date || ''} • ${Array.isArray(post.categories) ? post.categories.join(', ') : ''} • ${post.lang || 'ko'}
                    </div>
                    <p class="search-excerpt">${highlightedContent}</p>
                    ${tags ? `<div class="search-tags">${tags}</div>` : ''}
                </li>
            `;
        } catch (error) {
            console.warn('Error creating result HTML:', error);
            return '<li class="search-result">오류가 발생했습니다.</li>';
        }
    }

    getTotalPages() {
        if (!this.currentResults) return 0;
        const totalResults = this.currentResults.titleMatches.length + this.currentResults.contentMatches.length;
        return Math.ceil(totalResults / this.resultsPerPage);
    }

    updateStats(totalResults, query) {
        try {
            if (totalResults > 0 && this.searchStats && this.resultsInfo) {
                this.searchStats.style.display = 'flex';
                this.resultsInfo.textContent = `"${query}"에 대한 검색 결과 ${totalResults}개`;
            } else if (this.searchStats) {
                this.searchStats.style.display = 'none';
            }
        } catch (error) {
            console.warn('Error updating stats:', error);
        }
    }

    updatePagination(totalResults) {
        try {
            const totalPages = Math.ceil(totalResults / this.resultsPerPage);
            
            if (!this.pagination) return;
            
            if (totalPages <= 1) {
                this.pagination.style.display = 'none';
                return;
            }
            
            this.pagination.style.display = 'flex';
            
            // 이전/다음 버튼 상태
            if (this.prevPageBtn) this.prevPageBtn.disabled = this.currentPage === 1;
            if (this.nextPageBtn) this.nextPageBtn.disabled = this.currentPage === totalPages;
            
            // 페이지 번호 생성
            if (this.pageNumbers) {
                const maxVisiblePages = 5;
                let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
                let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
                
                if (endPage - startPage + 1 < maxVisiblePages) {
                    startPage = Math.max(1, endPage - maxVisiblePages + 1);
                }
                
                let pageNumbersHTML = '';
                
                if (startPage > 1) {
                    pageNumbersHTML += `<button onclick="window.blogSearch.goToPage(1)">1</button>`;
                    if (startPage > 2) {
                        pageNumbersHTML += `<span>...</span>`;
                    }
                }
                
                for (let i = startPage; i <= endPage; i++) {
                    const activeClass = i === this.currentPage ? 'active' : '';
                    pageNumbersHTML += `<button class="${activeClass}" onclick="window.blogSearch.goToPage(${i})">${i}</button>`;
                }
                
                if (endPage < totalPages) {
                    if (endPage < totalPages - 1) {
                        pageNumbersHTML += `<span>...</span>`;
                    }
                    pageNumbersHTML += `<button onclick="window.blogSearch.goToPage(${totalPages})">${totalPages}</button>`;
                }
                
                this.pageNumbers.innerHTML = pageNumbersHTML;
            }
            
            // 페이지네이션 정보 업데이트
            if (this.paginationInfo) {
                const startIndex = (this.currentPage - 1) * this.resultsPerPage + 1;
                const endIndex = Math.min(this.currentPage * this.resultsPerPage, totalResults);
                this.paginationInfo.textContent = `${startIndex}-${endIndex} / ${totalResults}`;
            }
        } catch (error) {
            console.warn('Error updating pagination:', error);
        }
    }

    goToPage(page) {
        this.currentPage = page;
        this.displayCurrentResults();
        
        // 검색 결과 상단으로 스크롤
        if (this.searchStats) {
            this.searchStats.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    updateUrl(query) {
        try {
            const url = new URL(window.location);
            if (query) {
                url.searchParams.set('q', query);
            } else {
                url.searchParams.delete('q');
            }
            
            if (this.selectedTag) {
                url.searchParams.set('tag', this.selectedTag);
            } else {
                url.searchParams.delete('tag');
            }
            
            window.history.pushState({}, '', url);
        } catch (error) {
            console.warn('Error updating URL:', error);
        }
    }

    hideAllResults() {
        try {
            if (this.titleResults) this.titleResults.style.display = 'none';
            if (this.contentResults) this.contentResults.style.display = 'none';
            if (this.noResults) this.noResults.style.display = 'none';
            if (this.searchStats) this.searchStats.style.display = 'none';
            if (this.pagination) this.pagination.style.display = 'none';
        } catch (error) {
            console.warn('Error hiding results:', error);
        }
    }

    showLoading(show) {
        try {
            if (this.searchLoading) {
                this.searchLoading.style.display = show ? 'block' : 'none';
            }
        } catch (error) {
            console.warn('Error updating loading state:', error);
        }
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
        try {
            this.searchHistory = this.searchHistory.filter(item => item !== query);
            this.searchHistory.unshift(query);
            this.searchHistory = this.searchHistory.slice(0, 10); // 최대 10개 저장
            
            localStorage.setItem('blog_search_history', JSON.stringify(this.searchHistory));
        } catch {
            // localStorage 저장 실패 시 무시
        }
    }
}

// 페이지 로드시 검색 시스템 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.blogSearch = new BlogSearch();
});