import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.mjs
    siteTitle: `Promaluje`,
    siteTitleAlt: `Natalia Procajło - Professional makeup artist`,
    siteHeadline: `Natalia Procajło - PMUA`,
    siteUrl: `http://localhost:8000`,
    siteDescription: `Odkryj Magię Makijażu z Natalią Procajło: Perfekcyjne Makijaże Ślubne i Okolicznościowe. Zobacz Portfolio i Ofertę Profesjonalnej Makijażystki!`,
    siteImage: `/banner.jpg`,
    siteLanguage: `pl`,
    author: `@codetypo`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `O mnie`, slug: `/o_mnie` },
          { name: `Oferta`, slug: `/projects` },
          { name: `Portfolio`, slug: `/portfolio` },
          { name: `Kontakt`, slug: `/kontakt` },
        ],
        projectsPath:'content/oferta',
        homepageProjectLimit:0
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Promaluje - Professional Makeup Artist Jawor`,
        short_name: `promaluje`,
        description: `Odkryj Magię Makijażu z Natalią Procajło: Perfekcyjne Makijaże Ślubne i Okolicznościowe. Zobacz Portfolio i Ofertę Profesjonalnej Makijażystki!`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
