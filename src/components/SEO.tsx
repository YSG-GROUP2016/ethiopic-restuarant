import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  canonical?: string;
}

const SEO = ({
  title = "H&T Ethiopian Restaurant @ the centre of Lagos - Authentic Ethiopian Cuisine",
  description = "Experience authentic Ethiopian cuisine at H&T Ethiopian Restaurant @ the centre of Lagos. Traditional dishes, coffee ceremony, and warm hospitality. Make your reservation today!",
  keywords = "ethiopian restaurant lagos, authentic ethiopian food, injera, doro wat, coffee ceremony, traditional ethiopian cuisine, lagos restaurant, african food lagos",
  image = "/src/assets/hero-image.jpg",
  type = "website",
  canonical
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', 'H&T Ethiopian Restaurant');
    updateMeta('robots', 'index, follow');
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', type, true);
    updateMeta('og:url', currentUrl, true);
    updateMeta('og:image', image, true);
    updateMeta('og:site_name', 'H&T Ethiopian Restaurant', true);
    updateMeta('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    updateMeta('twitter:site', '@HTEthiopianLagos');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // JSON-LD Structured Data for Restaurant
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "H&T Ethiopian Restaurant",
      "description": description,
      "image": [image],
      "url": currentUrl,
      "telephone": "+234-706-394-5538",
      "priceRange": "₦₦",
      "servesCuisine": "Ethiopian",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Centre of Lagos",
        "addressLocality": "Lagos",
        "addressRegion": "Lagos State",
        "addressCountry": "NG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "6.5244",
        "longitude": "3.3792"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "11:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday", "Saturday"],
          "opens": "11:00",
          "closes": "23:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "12:00",
          "closes": "21:00"
        }
      ],
      "menu": `${window.location.origin}/menu`,
      "acceptsReservations": true,
      "hasMenu": {
        "@type": "Menu",
        "url": `${window.location.origin}/menu`
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup function (optional)
    };
  }, [title, description, keywords, image, type, canonicalUrl, currentUrl]);

  return null;
};

export default SEO;