import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

const webpackSvgLoader = (config: any) => {
  // Grab the existing rule that handles SVG imports
  const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'))

  config.module.rules.push(
    // Reapply the existing rule, but only for svg imports ending in ?url
    {
      ...fileLoaderRule,
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
    },
    // Convert all other *.svg imports to React components
    {
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
      use: ['@svgr/webpack'],
    },
  )

  // Modify the file loader rule to ignore *.svg, since we have it handled now.
  fileLoaderRule.exclude = /\.svg$/i

  return config
}

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  webpack: (config) => webpackSvgLoader(config),
  experimental: {
    turbo: {
      // loaders: {
      //   '.svg': ['@svgr/webpack'],
      // },
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // experimental: {
  //// Only in Next.js canary:
  //  ppr: true,
  //  dynamicIO: true,
  // }
}

export default withMDX(nextConfig)
