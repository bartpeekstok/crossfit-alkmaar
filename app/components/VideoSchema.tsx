interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
  duration?: string; // ISO 8601 duration format, e.g., "PT2M30S" for 2 min 30 sec
}

export default function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  embedUrl,
  duration,
}: VideoSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    embedUrl,
    contentUrl: embedUrl,
    publisher: {
      "@type": "Organization",
      name: "CrossFit Alkmaar",
      logo: {
        "@type": "ImageObject",
        url: "https://crossfitalkmaar.com/images/logo_dark.png",
      },
    },
    ...(duration && { duration }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
