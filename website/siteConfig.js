/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Clarity', // Title for your website.
  tagline: 'Clarity Agile Work Management Framework',
  url: 'https://clarity.pm', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'clarity',
  organizationName: 'clarity',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'about', label: 'Introduction'},
    {doc: 'birds-eye-view', label: 'Bird\'s-eye view'},
    {doc: 'express', label: 'Express'},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo_dark.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#cad3ff',
    secondaryColor: '#cad3ff',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Matiss Treinis`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'darcula',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    '/js/tag.js?v=1',
    '/js/index.js?v=1',
    '/js/subs.js?v=1'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/home-background.svg',
  twitterImage: 'img/home-background.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,
};

module.exports = siteConfig;
