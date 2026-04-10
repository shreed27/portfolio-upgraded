import { ProjectCaseStudyFrontmatter } from '@/types/project';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import { ProjectComponents } from './ProjectComponents';

interface ProjectContentProps {
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export function ProjectContent({ frontmatter, content }: ProjectContentProps) {
  const {
    title,
    description,
    image,
    technologies,
    github,
    live,
    timeline,
    role,
    team,
    status,
    challenges,
    learnings,
  } = frontmatter;

  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs uppercase tracking-wide ${
              status === 'completed'
                ? 'bg-green-50 text-green-700'
                : status === 'in-progress'
                  ? 'bg-blue-50 text-blue-700'
                  : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300'
            }`}
          >
            {status}
          </span>
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-secondary rounded-full border px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>

        <p className="text-secondary mt-4 max-w-3xl text-lg leading-8">
          {description}
        </p>

        <div className="text-secondary mt-6 grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide">Timeline</p>
            <p className="mt-1">{timeline}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide">Role</p>
            <p className="mt-1">{role}</p>
          </div>
          {team ? (
            <div>
              <p className="text-xs uppercase tracking-wide">Team</p>
              <p className="mt-1">{team}</p>
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {live ? (
            <Link
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground underline underline-offset-4"
            >
              Live Demo
            </Link>
          ) : null}
          {github ? (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground underline underline-offset-4"
            >
              Source Code
            </Link>
          ) : null}
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

      {(challenges?.length || learnings?.length) && (
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {challenges && challenges.length > 0 ? (
            <div className="rounded-3xl border p-5">
              <h3 className="mb-3 text-lg font-semibold tracking-tight">
                Key Challenges
              </h3>
              <ul className="text-secondary space-y-2 text-sm leading-6">
                {challenges.map((challenge, index) => (
                  <li key={index}>· {challenge}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {learnings && learnings.length > 0 ? (
            <div className="rounded-3xl border p-5">
              <h3 className="mb-3 text-lg font-semibold tracking-tight">
                Key Learnings
              </h3>
              <ul className="text-secondary space-y-2 text-sm leading-6">
                {learnings.map((learning, index) => (
                  <li key={index}>· {learning}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote
          source={content}
          components={ProjectComponents}
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
