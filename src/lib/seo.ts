// SEO utilities and structured data helpers

export const SITE_CONFIG = {
  title: 'Tarik Abaspahic - Full-Stack Developer Portfolio',
  description: 'Full-stack developer specializing in React, TypeScript, Node.js, and modern web technologies. Explore my portfolio projects and skills.',
  url: 'https://t-abaspahic.de',
  image: 'https://t-abaspahic.de/og-image.jpg',
  author: 'Tarik Abaspahic',
  email: 'direkt@t-abaspahic.de',
  locale: 'en_US',
  type: 'website',
};

export interface PageMeta {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
}

/**
 * Generate Open Graph meta tags for social media sharing
 */
export const generateOGTags = (page: PageMeta) => {
  const url = `${SITE_CONFIG.url}${page.path || ''}`;
  return {
    'og:title': page.title,
    'og:description': page.description,
    'og:url': url,
    'og:image': page.image || SITE_CONFIG.image,
    'og:type': page.type || 'website',
    'og:site_name': SITE_CONFIG.title,
    'og:locale': SITE_CONFIG.locale,
  };
};

/**
 * Generate Twitter Card meta tags
 */
export const generateTwitterTags = (page: PageMeta) => {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': page.title,
    'twitter:description': page.description,
    'twitter:image': page.image || SITE_CONFIG.image,
    'twitter:creator': '@tarikaentwickler',
    'twitter:site': '@tarikaentwickler',
  };
};

/**
 * Generate JSON-LD structured data for Person
 */
export const generatePersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.author,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    jobTitle: 'Full-Stack Developer',
    image: SITE_CONFIG.image,
    sameAs: [
      'https://www.linkedin.com/in/tarik-abaspahic-8a6520352',
      'https://github.com/tarikaentwickler',
    ],
    knows: [
      {
        '@type': 'Thing',
        name: 'React',
      },
      {
        '@type': 'Thing',
        name: 'TypeScript',
      },
      {
        '@type': 'Thing',
        name: 'Node.js',
      },
    ],
  };
};

/**
 * Generate JSON-LD structured data for Website
 */
export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.title,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author,
    },
  };
};

/**
 * Generate JSON-LD structured data for Project
 */
export const generateProjectSchema = (project: {
  name: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
    creator: {
      '@type': 'Person',
      name: SITE_CONFIG.author,
    },
    keywords: project.technologies.join(', '),
  };
};

/**
 * Generate JSON-LD structured data for breadcrumb navigation
 */
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Truncate text to specific length with ellipsis
 */
export const truncateText = (text: string, length: number = 160): string => {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
};

/**
 * Extract domain from URL
 */
export const extractDomain = (url: string): string => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

/**
 * Canonical URL for current page
 */
export const getCanonicalUrl = (path: string = ''): string => {
  return `${SITE_CONFIG.url}${path}`;
};
