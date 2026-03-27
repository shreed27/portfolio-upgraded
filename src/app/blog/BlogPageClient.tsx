'use client';

import Container from '@/components/common/Container';
import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { BlogPostPreview } from '@/types/blog';
import { Link } from 'next-view-transitions';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BlogPageClientProps {
  initialPosts: BlogPostPreview[];
  initialTags: string[];
}

const getBlogPostsByTagClient = (
  posts: BlogPostPreview[],
  tag: string,
): BlogPostPreview[] => {
  return posts.filter((post) =>
    post.frontmatter.tags.some(
      (postTag) => postTag.toLowerCase() === tag.toLowerCase(),
    ),
  );
};

export function BlogPageClient({
  initialPosts,
  initialTags,
}: BlogPageClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  // Get tag from URL params on mount
  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setSelectedTag(tagParam);
      const filtered = getBlogPostsByTagClient(initialPosts, tagParam);
      setFilteredPosts(filtered);
    } else {
      setSelectedTag(null);
      setFilteredPosts(initialPosts);
    }
  }, [searchParams, initialPosts]);

  // Handle tag click
  const handleTagClick = (tag: string) => {
    if (isMobile()) {
      triggerHaptic('light');
    }

    if (selectedTag === tag) {
      setSelectedTag(null);
      setFilteredPosts(initialPosts);
      router.replace('/blog');
    } else {
      setSelectedTag(tag);
      const filtered = getBlogPostsByTagClient(initialPosts, tag);
      setFilteredPosts(filtered);
      router.replace(`/blog?tag=${encodeURIComponent(tag)}`);
    }
  };

  const getTagPostCount = (tag: string) => {
    return initialPosts.filter((post) =>
      post.frontmatter.tags.some(
        (postTag) => postTag.toLowerCase() === tag.toLowerCase(),
      ),
    ).length;
  };

  return (
    <Container className="py-12">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-secondary mt-2 max-w-2xl text-sm leading-6">
          Notes on engineering, AI systems, frontend craft, and ideas worth
          keeping around.
        </p>
      </section>

      {initialTags.length > 0 ? (
        <section className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            {initialTags.map((tag) => {
              const postCount = getTagPostCount(tag);
              const isSelected = selectedTag === tag;

              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`rounded-full border px-3 py-1.5 text-sm capitalize transition-colors ${
                    isSelected
                      ? 'bg-foreground text-background border-foreground'
                      : 'text-secondary hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {tag} ({postCount})
                </button>
              );
            })}
            {selectedTag ? (
              <button
                onClick={() => handleTagClick(selectedTag)}
                className="text-secondary hover:text-foreground ml-2 text-sm underline underline-offset-4"
              >
                Clear filter
              </button>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="mt-10 divide-y">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="py-5 first:pt-0 last:pb-0">
            <Link href={`/blog/${post.slug}`} className="block hover:opacity-80">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <div>
                  <h2 className="text-lg font-semibold">{post.frontmatter.title}</h2>
                  <p className="text-secondary mt-1 text-sm leading-6">
                    {post.frontmatter.description}
                  </p>
                  <div className="text-secondary mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-wide">
                    {post.frontmatter.tags.map((tag) => (
                      <span key={`${post.slug}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                <p className="text-secondary text-sm">{post.frontmatter.date}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </Container>
  );
}
