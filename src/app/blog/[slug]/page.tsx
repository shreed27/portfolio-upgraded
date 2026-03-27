import { BlogContent } from '@/components/blog/BlogContent';
import Container from '@/components/common/Container';
import FontSizeControls from '@/components/common/FontSizeControls';
import { siteConfig } from '@/config/Meta';
import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  getRelatedPosts,
} from '@/lib/blog';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  //  await params
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || !post.frontmatter.isPublished) {
    return {
      title: 'Post Not Found',
    };
  }

  const { title, description, image } = post.frontmatter;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || !post.frontmatter.isPublished) {
    notFound();
  }
  const relatedPosts = await getRelatedPosts(slug, 3);

  return (
    <>
      <Container className="py-16">
        <div className="space-y-12">
          <div>
            <Link
              href="/blog"
              className="text-secondary hover:text-foreground text-sm underline underline-offset-4"
            >
              Back to Blog
            </Link>
          </div>

          <BlogContent frontmatter={post.frontmatter} content={post.content} />

          {relatedPosts.length > 0 && (
            <section className="border-t pt-8">
              <h2 className="text-lg font-semibold tracking-tight">Related Posts</h2>
              <div className="mt-4 divide-y">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="py-4 first:pt-0 last:pb-0">
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="block hover:opacity-80"
                    >
                      <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline">
                        <div>
                          <h3 className="font-medium">{relatedPost.frontmatter.title}</h3>
                          <p className="text-secondary mt-1 text-sm">
                            {relatedPost.frontmatter.description}
                          </p>
                        </div>
                        <p className="text-secondary text-sm">
                          {relatedPost.frontmatter.date}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </Container>
      <FontSizeControls />
    </>
  );
}
