// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rividium",
  tagline: "Our People, Our Culture, Our Technology",
  favicon: "img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png",

  // Set the production url of your site here
  url: "https://www.rividium.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [tailwindPlugin],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/Logos/RiVidium Logo -Cyan-Block-2019 TRANS.png",
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/Logos/RiVidium-2021 copy.png",
          // to: "https://www.rividium.com/",
          // href: "https://www.triplecyber.com/"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Our Corporate Divisions",
            href: "https://www.rividium.com/"
          },
          {
            href: "https://www.triplecyber.com/",
            label: "TripleCyber",
            position: "left",
          },
          { to: "https://www.rividium.com/Vision.aspx",
            label: "About Us",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Company",
            items: [
              {
                label: "About Us",
                to: "https://www.rividium.com/",
              },
              {
                label: "Contact Us",
                to: "https://www.rividium.com/",
              },
              {
                label: "Privacy Policy",
                to: "https://www.rividium.com/",
              },
              {
                label: "News",
                to: "https://www.rividium.com/",
              },
            ],
          },
          {
            title: "Products",
            items: [
              {
                label: "TripleEnable",
                href: "https://www.tripleenable.com/",
              },
              {
                label: "TripleAccess",
                href: "https://tripleaccess.triplecyber.com/",
              },
              {
                label: "Trinity ML",
                href: "https://trinity.triplecyber.com/",
              },
              {
                label: "Domain Registrar",
                href: "https://domains.triplecyber.com/",
              },
            ],
          },
          {
            title: "Services",
            items: [
              {
                label: "Zero Trust Reference Architecture",
                to: "https://www.triplecyber.com/zero-trust-reference-architecture/",
              },
              {
                label: "Computer Network Exploitation",
                href: "https://www.triplecyber.com/computer-network-exploitation/",
              },
              {
                label: "Cybersecurity Software Assurance",
                to: "https://www.triplecyber.com/cybersecurity-software-assurance/",
              },
              {
                label: "Risk Management Framework",
                href: "https://www.triplecyber.com/risk-management-framework/",
              },
              {
                label: "Automation and Optimization",
                to: "https://www.triplecyber.com/automation-and-optimization/",
              },
              {
                label: "Cyber-Supply Chain Risk Management",
                href: "https://www.triplecyber.com/cyber-supply-chain-risk-management/",
              },
              {
                label: "Cybersecurity Integration",
                href: "https://www.triplecyber.com/cybersecurity-integration/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rividium Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
