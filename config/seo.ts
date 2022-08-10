import { DefaultSeoProps } from 'next-seo'

const seo: DefaultSeoProps = {
  defaultTitle: 'Better Climbing',
  titleTemplate: '%s | Better Climbing',
  description: 'The best place to find climbing coaching',
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      href: '/favicons/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'alternate icon',
      href: '/favicons/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      rel: 'alternate icon',
      href: '/favicons/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    { rel: 'manifest', href: '/favicons/site.webmanifest' },
    {
      rel: 'mask-icon',
      href: '/favicons/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
    { rel: 'shortcut icon', href: '/favicon.ico' },
  ],
  additionalMetaTags: [
    { property: 'msapplication-TileColor', content: '#2cb1da' },
    {
      property: 'msapplication-config',
      content: '/favicons/browserconfig.xml',
    },
    { property: 'theme-color', content: '#f8fafc' },
    // { httpEquiv: 'content-security-policy', content: cspDirectives },
  ],
}

const cspDirectives = [
  "default-src 'self'",
  `connect-src https://api.stripe.com https://checkout.stripe.com http://localhost:*`,
  'frame-src https://js.stripe.com https://hooks.stripe.com https://checkout.stripe.com',
  `script-src https://js.stripe.com https://checkout.stripe.com vitals.vercel-insights.com webpack-internal:*`,
  'img-src https://* data:* http://localhost:*',
  "child-src 'none'",
  "object-src 'none'",
].join('; ')

export default seo
