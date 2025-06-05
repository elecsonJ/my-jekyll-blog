source "https://rubygems.org"

# 최신 Jekyll 버전 사용 (GitHub Actions에서)
gem "jekyll", "~> 4.4.1"

# 테마
gem "minima", "~> 2.5"

# 플러그인 (GitHub Actions에서는 제한 없음)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-compose"  # 추가 플러그인도 사용 가능
end

# Windows 지원
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
