---

---
## Help Page

Help page for support.qontak.com

## Installation

Install the dependencies with [Bundler](http://bundler.io/):

```bash
bundle install
```

Run the following to generate your site:
```bash
bundle exec jekyll serve
```

You can find more on [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll website.

## Setup

### Site and author details
Add your site and author details in `_config.yml`:
```yaml
# Site title and description
title:              Docs
description:        Documentation Jekyll theme.
lang:               en

# Site subpath, e.g. /blog
baseurl:            ""

# Permalink URLs structure, for permalink style options see: https://jekyllrb.com/docs/permalinks/
permalink:          /:title/

# Site base hostname & protocol, e.g. http://example.com
url:                ""

# Site logo # e.g. logo.png, upload logo image file to /uploads/ folder
logo:               

navbar:
  search:           true;
  
# Default author settings
author:
    name:           Pete Seth
    title:          Lead Developer  
    avatar:         avatar-tom.png
```

## Customization

To modify the primary color, open `/_sass/theme/variables.scss` and replace the color values e.g.:

```scss
$global-primary-background:                   #05c896;
```

Further style customisation can be done in the following files:
```
/_sass/theme/mixins.scss
/_sass/theme/variables.scss
/assets/css/main.scss
```

## Development

Install [UIkit](https://getuikit.com/) font end framework dependency via Npm:
```bash
npm install
```
Enable live browser reload with the following:
```bash
bundle exec jekyll s --livereload
```

## Credits and Sources

- Google analytics https://www.google.com/analytics/
- Google maps https://www.google.com/maps
- UIkit front end framework https://getuikit.com/
- Jekyll CML https://jekyllrb.com/