export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

export const updateSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
}: SEOProps) => {
  // Update title
  if (title) {
    document.title = title;
  }

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property = false) => {
    const attribute = property ? "property" : "name";
    let tag = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attribute, name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  if (description) updateMetaTag("description", description);
  if (keywords) updateMetaTag("keywords", keywords);
  if (ogTitle) updateMetaTag("og:title", ogTitle, true);
  if (ogDescription) updateMetaTag("og:description", ogDescription, true);
  if (ogImage) updateMetaTag("og:image", ogImage, true);
  if (ogUrl) updateMetaTag("og:url", ogUrl, true);
  if (twitterTitle) updateMetaTag("twitter:title", twitterTitle);
  if (twitterDescription)
    updateMetaTag("twitter:description", twitterDescription);
  if (twitterImage) updateMetaTag("twitter:image", twitterImage);

  // Update canonical link
  if (canonical) {
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonical);
  }

  // Add structured data
  if (structuredData) {
    let structuredDataTag = document.querySelector(
      'script[type="application/ld+json"][data-page]'
    );
    if (!structuredDataTag) {
      structuredDataTag = document.createElement("script");
      structuredDataTag.setAttribute("type", "application/ld+json");
      structuredDataTag.setAttribute("data-page", "true");
      document.head.appendChild(structuredDataTag);
    }
    structuredDataTag.textContent = JSON.stringify(structuredData);
  }
};

export const defaultSEO: SEOProps = {
  title:
    "All In One Residential & Commercial Services - Managing Homes, Simplifying Lives",
  description:
    "All In One Residential & Commercial Services provides professional property management, cleaning, staging, lawn care, and more. Serving Tampa Bay Area with excellence.",
  keywords:
    "property management, residential services, home services, lawn care, cleaning, staging, commercial services, pressure washing, Tampa Bay, Airbnb management",
  canonical: "https://tanishka-property.vercel.app/",
  ogTitle:
    "All In One Residential & Commercial Services - Managing Homes, Simplifying Lives",
  ogDescription:
    "Professional property management and commercial services in Tampa Bay Area. From cleaning to lawn care to commercial services — we handle it all.",
  ogImage: "/assets/970b9dea-3c00-453a-840c-81040053e690.png",
  ogUrl: "https://tanishka-property.vercel.app/",
  twitterTitle:
    "All In One Residential & Commercial Services - Managing Homes, Simplifying Lives",
  twitterDescription:
    "Professional property management and commercial services in Tampa Bay Area. From cleaning to lawn care to commercial services — we handle it all.",
  twitterImage: "/assets/970b9dea-3c00-453a-840c-81040053e690.png",
};
