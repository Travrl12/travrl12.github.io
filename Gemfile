source "https://rubygems.org"

# Use GitHub Pages gem to match GitHub's Jekyll environment
gem "github-pages", group: :jekyll_plugins

# Optional: Specify the theme you want to use (e.g., Minima)
gem "minima", "~> 2.5"

# Common Jekyll plugins (only add if needed)
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"     # RSS feed plugin
  gem "jekyll-seo-tag", "~> 2.8"   # SEO tags for better search indexing
  gem "jekyll-sitemap", "~> 1.4"   # Automatically generate sitemap.xml
end

# Windows-specific dependencies for file watching and time zone data
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Windows performance booster for watching directories
gem "wdm", "~> 0.2.0", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb for JRuby
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
