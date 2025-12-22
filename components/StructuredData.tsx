import { siteConfig } from "@/config/siteConfig";

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.siteName,
    "description": siteConfig.meta.description,
    "url": siteConfig.meta.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

