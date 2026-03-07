interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  slug: string;
  category: string;
  author: string;
}

export default function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  slug,
  category,
  author,
}: ArticleSchemaProps) {
  // Convert Dutch date to ISO format
  const months: { [key: string]: string } = {
    januari: "01",
    februari: "02",
    maart: "03",
    april: "04",
    mei: "05",
    juni: "06",
    juli: "07",
    augustus: "08",
    september: "09",
    oktober: "10",
    november: "11",
    december: "12",
  };

  const dateParts = datePublished.split(" ");
  const day = dateParts[0].padStart(2, "0");
  const month = months[dateParts[1]] || "01";
  const year = dateParts[2];
  const isoDate = `${year}-${month}-${day}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      name: author.split(",")[0].trim(),
      jobTitle: author.includes(",") ? author.split(",")[1].trim() : undefined,
      worksFor: {
        "@type": "Organization",
        name: "CrossFit Alkmaar",
        url: "https://crossfitalkmaar.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "CrossFit Alkmaar",
      logo: {
        "@type": "ImageObject",
        url: "https://crossfitalkmaar.com/images/logo_dark.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://crossfitalkmaar.com/blog/${slug}`,
    },
    articleSection: category,
    url: `https://crossfitalkmaar.com/blog/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}
