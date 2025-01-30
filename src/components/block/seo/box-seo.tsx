import { SEOProps } from "@/types";
import { Helmet } from "react-helmet-async";

const SEOHeader: React.FC<SEOProps> = ({
  title = "Portfolio - ULIL ABSOR",
  description = "Welcome to my portfolio. Discover my projects, skills, and contact information.",
  keywords = "portfolio, web developer, react, typescript",
  author = "[Nama Anda]",
  image = "/default-image.jpg", // URL gambar Anda
  url = window.location.href,
}) => {
  return (
    <Helmet>
      {/* Meta Tag Dasar */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph Metadata (untuk Facebook, LinkedIn, dll.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* X (dulu Twitter) Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Metadata */}
    </Helmet>
  );
};

export default SEOHeader;
