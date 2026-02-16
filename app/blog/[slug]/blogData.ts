// Blog post data - single source of truth for both listing and detail pages
export interface BlogPost {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: { [key: string]: BlogPost } = {
  // Nieuwe blogs worden hier toegevoegd
};

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}
