import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs } from "./blogData";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog niet gevonden",
      description: "Dit blog artikel bestaat niet.",
    };
  }

  const seoTitle = post.metaTitle ?? post.title;

  return {
    title: seoTitle,
    description: post.excerpt,
    openGraph: {
      title: `${seoTitle} | CrossFit Alkmaar`,
      description: post.excerpt,
      url: `https://www.crossfitalkmaar.com/blog/${slug}`,
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://www.crossfitalkmaar.com/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return children;
}
