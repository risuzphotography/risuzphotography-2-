import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  keywords = "Risuz Photography, Wedding Photographer Sri Lanka, Portrait Photographer Sri Lanka, Event Photography, Graduation Photography, Couple Shoots, Photography Sri Lanka",
  image = "https://risuzphotography.pages.dev/Logo.png",
  url = "https://risuzphotography.pages.dev/",
}) {
  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Risuz Photography" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Risuz Photography" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;