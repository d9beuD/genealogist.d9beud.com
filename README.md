[![Deploy site with GitHub Pages](https://github.com/d9beuD/genealogist.d9beud.com/actions/workflows/jekyll-gh-pages.yml/badge.svg)](https://github.com/d9beuD/genealogist.d9beud.com/actions/workflows/jekyll-gh-pages.yml)

# Genealogist landing page

This repository stores and host the Genealogist landing page. This project is built using 
[Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## Development

### Prerequisites

Follow the [Jekyll installation](https://jekyllrb.com/docs/) and [Gulp quick start](https://gulpjs.com/docs/en/getting-started/quick-start) guides.

### Install dependencies

Install the project dependencies with the following command:

```bash
bundle install
npm install
npm install -g gulp-cli
```

### Running the project

Start the Jekyll server with the following command:

```bash
bundle exec jekyll serve -H localhost
```

Then, watch for changes in assets with Gulp:

```bash
gulp watch
```

## Deployment

The project is automatically deployed to GitHub Pages using the [jekyll-gh-pages.yml](.github/workflows/jekyll-gh-pages.yml) workflow.
If you want to build it yourself, run the following command:

```bash
gulp
bundle exec jekyll build
```

Then you can use the site output in the `_site` directory.
