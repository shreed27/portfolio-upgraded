import { BlogFrontmatter } from '@/types/blog';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

import { BlogComponents } from './BlogComponents';

interface BlogContentProps {
  frontmatter: BlogFrontmatter;
  content: string;
}

export function BlogContent({ frontmatter, content }: BlogContentProps) {
  const { title, description, image, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-secondary rounded-full border px-3 py-1 text-xs uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>

        <p className="text-secondary mt-4 max-w-3xl text-lg leading-8">
          {description}
        </p>

        <div className="text-secondary mt-4 text-sm">
          <time dateTime={date}>{formattedDate}</time>
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl border">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote
          source={content}
          components={BlogComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeHighlight,
                  {
                    theme: 'github-dark',
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
