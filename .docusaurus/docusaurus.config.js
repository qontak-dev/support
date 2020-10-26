export default {
  "plugins": [
    "docusurus-lunr-search"
  ],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "colorMode": {
      "disableSwitch": true
    },
    "sidebarCollapsible": true,
    "navbar": {
      "title": "Help Center",
      "logo": {
        "alt": "Help Center Logo",
        "src": "img/qontak-logo.svg"
      },
      "links": [
        {
          "href": "https://docs.qontak.com",
          "label": "Developers",
          "position": "right"
        }
      ]
    },
    "footer": {
      "links": [
        {
          "items": [
            {
              "label": "Help Center",
              "href": "https://support.qontak.com"
            }
          ]
        },
        {
          "items": [
            {
              "label": "built with @docusaurus",
              "href": "https://v2.docusaurus.io"
            }
          ]
        },
        {
          "items": [
            {
              "label": "Go to chat.qontak.com →",
              "position": "right",
              "href": "https://chat.qontak.com"
            }
          ]
        }
      ]
    }
  },
  "title": "Help Center",
  "tagline": "Mencari dokumen dan pentunjuk penggunaan",
  "url": "https://support.qontak.com",
  "baseUrl": "/",
  "favicon": "img/favicon.png",
  "organizationName": "qontak-dev",
  "projectName": "support",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/ruby/Desktop/start/support/sidebars.js",
          "editUrl": "https://github.com/qontak-dev/support/edit/gh-pages/"
        },
        "theme": {
          "customCss": "/Users/ruby/Desktop/start/support/src/css/custom.css"
        }
      }
    ]
  ]
};