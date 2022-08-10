module.exports = {
  eslint: {
    dirs: ['components', 'layouts', 'pages', 'types', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['localhost', 'tinyurl.com'],
  },
}
