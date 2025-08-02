import { Helmet } from "react-helmet-async";
import { SEOData, baseSEO } from "@/utils/seo";

interface SEOProps {
  data: SEOData;
}

const SEO = ({ data }: SEOProps) => {
  const {
    title,
    description,
    keywords,
    canonical,
    ogType = "website",
    ogImage = baseSEO.defaultImage,
    structuredData
  } = data;

  const fullTitle = title.includes(baseSEO.siteName) ? title : `${title} | ${baseSEO.siteName}`;
  const canonicalUrl = canonical || window.location.href;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${baseSEO.baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={baseSEO.siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Business Information */}
      <meta name="contact:phone_number" content={baseSEO.phone} />
      <meta name="contact:email" content={baseSEO.email} />
      <meta name="geo.region" content="TX" />
      <meta name="geo.placename" content="Texas" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      
      {/* Structured Data */}
      {structuredData && Array.isArray(structuredData) && 
        structuredData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))
      }
      {structuredData && !Array.isArray(structuredData) && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;