import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find trusted businesses near you',
      description: 'Browse business listings, compare services, and contact local providers through a cleaner discovery experience.',
      openGraphTitle: 'Find trusted businesses near you',
      openGraphDescription: 'Discover local companies, service providers, and business details through a focused listing marketplace.',
      keywords: ['business directory', 'business listings', 'local services', 'service providers'],
    },
    hero: {
      badge: '',
      title: ['Your business network and', 'every service in between'],
      description: 'Find reliable local providers, compare services, and build a shortlist from one clean business listing directory.',
      primaryCta: { label: 'Browse listings', href: '/listing' },
      secondaryCta: { label: 'Add your business', href: '/create' },
      searchPlaceholder: 'Search by business, service, city, or category',
      focusLabel: 'Focus',
      featureCardBadge: 'verified discovery',
      featureCardTitle: 'Business cards, contact details, and service signals stay easy to scan.',
      featureCardDescription: 'A modern listing layout helps visitors find who to call, where to go, and what each business offers.',
    },
    intro: {
      badge: 'How discovery works',
      title: 'Built for browsing businesses without getting lost in stretched pages or noisy layouts.',
      paragraphs: [
        'This site brings business profiles, categories, locations, contact details, and supporting resources into one focused discovery experience.',
        'Visitors can browse by category, search by service, compare listing cards, and open a business detail page without losing context.',
        'Business owners get a cleaner place to present what they do, where they serve, and how customers can reach them.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Listing-first homepage with strong category and service discovery.',
        'Compact business cards with images, ratings, location, and quick actions.',
        'Business archive pages that feel normal-width, readable, and easy to scan.',
        'Contact and account forms with high-contrast visible text.',
      ],
      primaryLink: { label: 'Browse businesses', href: '/listing' },
      secondaryLink: { label: 'Search directory', href: '/search' },
    },
    cta: {
      badge: 'Get started',
      title: 'Find a provider or publish your business profile today.',
      description: 'Search the directory, compare options, and contact businesses directly from a cleaner marketplace experience.',
      primaryCta: { label: 'Browse Listings', href: '/listing' },
      secondaryCta: { label: 'Contact Support', href: '/contact' },
    },
    taskSection: {
      heading: 'Featured {label}',
      descriptionSuffix: 'Browse providers, locations, services, and business profiles in this section.',
    },
  },
  about: {
    badge: 'About the directory',
    title: 'A calmer, clearer way to discover businesses.',
    description: `${slot4BrandConfig.siteName} helps people browse business listings, compare service providers, and move from discovery to contact without friction.`,
    paragraphs: [
      'Instead of scattering business information across disconnected pages, the platform keeps categories, locations, descriptions, and contact options easy to move through.',
      'Whether someone is looking for a nearby specialist, a service partner, or a place to shortlist vendors, the experience is built around clarity and trust.',
      'For businesses, the site creates a polished profile surface where useful details are visible: what you offer, where you work, why customers choose you, and how to reach you.',
    ],
    values: [
      {
        title: 'Useful discovery',
        description: 'Every page is designed to help visitors compare services, understand business details, and take the next step quickly.',
      },
      {
        title: 'Clean business profiles',
        description: 'Listings present images, descriptions, contact details, location cues, and related businesses in a structured layout.',
      },
      {
        title: 'Local marketplace rhythm',
        description: 'Categories, archive pages, and detail pages work together so browsing feels direct instead of overwhelming.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to us about listings, updates, and local business support.',
    description: 'Send a message if you want to add a business, update listing details, report an issue, request a category, or ask how the directory works.',
    formTitle: 'Send a directory request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search business listings, services, categories, and local provider details across the site.',
    },
    hero: {
      badge: 'Search the directory',
      title: 'Find businesses, services, categories, and local details faster.',
      description: 'Use keywords, locations, categories, and listing types to discover useful business profiles across the site.',
      placeholder: 'Search by business name, service, city, or category',
    },
    resultsTitle: 'Latest business listings and resources',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a business listing for the directory.',
    },
    locked: {
      badge: 'Listing access',
      title: 'Login to create a business listing.',
      description: 'Use your account to open the listing workspace and submit business profiles, service details, images, and contact information.',
    },
    hero: {
      badge: 'Business workspace',
      title: 'Create a useful listing visitors can act on.',
      description: 'Choose a listing type, add business details, include service notes, and prepare a clean profile for directory discovery.',
    },
    formTitle: 'Listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your listing workspace.',
      description: 'Login to create business listings, manage saved details, and continue browsing providers through your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Directory access',
      title: 'Create your account and start listing smarter.',
      description: 'Create an account to add business details, submit directory listings, and keep your local discovery workflow organized.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
