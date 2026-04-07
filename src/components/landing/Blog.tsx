import { getPublishedBlogPosts } from '@/lib/blog';
import { Link } from 'next-view-transitions';
import React from 'react';

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <section className="mt-16">
      <h2 className="text-lg font-semibold tracking-tight">Blog</h2>
      <div className="mt-4 grid gap-3">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="hover:bg-muted rounded-md border p-4 transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="font-medium">{post.frontmatter.title}</p>
              <p className="text-secondary text-sm">{post.frontmatter.date}</p>
            </div>
            <p className="text-secondary mt-1 text-sm">
              {post.frontmatter.description}
            </p>
            <p className="text-secondary mt-2 text-sm underline underline-offset-4">
              Read more
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Link
          href="/blog"
          className="text-secondary hover:text-foreground text-sm underline underline-offset-4"
        >
          Show all blogs
        </Link>
      </div>
    </section>
  );
}
