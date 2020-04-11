<p align="center">
  <a href="https://github.com/LarsBehrenberg/impressionistarts.larsbehrenberg.com">
    <img
      src="./static/logo/banner.png"
      height="80"
      alt="impressionistarts-prototype"
      title="ImpressionistArts.com Prototype"
    />
  </a>
</p>


<p align="center">
  <strong>
    View the demo at <a href="https://impressionistarts.larsbehrenberg.com">impressionistarts.larsbehrenberg.com</a>.
  </strong>
</p>

<p align="center">
  <strong>
    Read the full step by step guide: <a href="https://justinformentin.com/guide-to-building-a-gatsby-site">Guide to Build a Gatsby Site with Perfect Pagespeed Scores</a></a>.
  </strong>
</p>

## Features

- Gatsby v2
- Emotion for styling
- Code syntax highlighting
- Tags
- SEO
  - Sitemap generation
  - Schema.org JSON-LD for Google Rich Snippets
  - Twitter Tags
  - OpenGraph Tags for Facebook/Google+/Pinterest
  - robots.txt
- Typography.js
- Typefaces for faster font loading
- Offline Support
- Manifest Support
- Gatsby Image
  - Responsive images
  - Traced SVG Loading with Lazy-Loading
  - WebP Support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - CircleCI support
  - Google Lighthouse Optimization

## Folder structure
```bash
├──.circleci # Circleci integration
├── config # Theme and site metadata
├── content # Post markdown and images
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── style
│   └── templates # For Post and Tag page generation
├── static # Images for logo and favicon, and robots.txt
├── gatsby-config.js # Plugin loading and configuration
└── gatsby-node.js # Generate posts/tags and modify webpack
```
