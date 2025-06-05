source "https://rubygems.org"

# GitHub Pages 호환 설정
gem "github-pages", group: :jekyll_plugins

# 테마
gem "minima", "~> 2.5"

# 플러그인 (GitHub Pages에서 지원하는 것만)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
end

# Windows 지원
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
