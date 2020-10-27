module.exports = {
  title: 'Help Center',
  tagline: 'Mencari dokumen dan pentunjuk penggunaan',
  url: 'https://support.qontak.com',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'qontak-dev', // Usually your GitHub org/user name.
  projectName: 'support', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-SMFY0QVBTS',
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      trackingID: 'G-SMFY0QVBTS',
      anonymizeIP: true, // Should IPs be anonymized?
    },
    colorMode: {
      disableSwitch: true,
    },
    sidebarCollapsible: true,
    navbar: {
      title: 'Help Center',
      logo: {
        alt: 'Help Center Logo',
        src: 'img/qontak-logo.svg',
      },
      links: [
        {
          href: 'https://docs.qontak.com',
          label: 'Developers',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          items: [
            {
              label: 'Help Center',
              href: 'https://support.qontak.com'
            }
          ],
        },
        {
          items: [
            {
              label: 'built with @docusaurus',
              href: 'https://v2.docusaurus.io'
            }
          ],
        },
        {
          items: [
            {
              label: 'Go to chat.qontak.com →',
              position: 'right',
              href: 'https://chat.qontak.com'
            }
          ],
        }
      ]
    },
  },
  plugins: [
    'docusurus-lunr-search',
    '@docusaurus/plugin-google-analytics',
    '@docusaurus/plugin-google-gtag'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/qontak-dev/support/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
