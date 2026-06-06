import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: '',
    primaryLinks: [
      { label: 'Businesses', href: '/listing' },
      { label: 'Search', href: '/search' },
      { label: 'Create listing', href: '/create' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Find businesses', href: '/listing' },
      secondary: { label: 'Add your business', href: '/create' },
    },
  },
  footer: {
    tagline: 'Local discovery, made simple',
    description: 'A business listing marketplace for finding trusted services, comparing details, and reaching local providers with confidence.',
    columns: [
      {
        title: 'Marketplace',
        links: [
          { label: 'Browse businesses', href: '/listing' },
          { label: 'Search directory', href: '/search' },
          { label: 'Add a listing', href: '/create' },
          { label: 'Contact support', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for useful business discovery and direct provider connections.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Updated',
  },
} as const
