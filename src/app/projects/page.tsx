import Container from '@/components/common/Container';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { projects } from '@/config/Projects';
import { Link } from 'next-view-transitions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ProjectsPage() {
  return (
    <Container className="py-12">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-secondary mt-2 max-w-2xl text-sm leading-6">
          Experiments, shipped products, and systems I&apos;ve built across AI,
          web, and developer tooling.
        </p>
      </section>

      <section className="mt-10 divide-y">
        {projects.map((project) => (
          <article key={project.title} className="py-6 first:pt-0 last:pb-0">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={project.projectDetailsPageSlug}
                    className="text-xl font-semibold hover:opacity-75"
                  >
                    {project.title}
                  </Link>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      project.isWorking
                        ? 'bg-green-50 text-green-700'
                        : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300'
                    }`}
                  >
                    {project.isWorking ? '● Active' : 'Archived'}
                  </span>
                </div>
                <p className="text-secondary mt-2 max-w-2xl text-sm leading-6">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={`${project.title}-${technology.name}`}
                      className="hover:bg-muted flex size-9 items-center justify-center rounded-lg border transition-colors [&_svg]:size-4"
                      aria-label={technology.name}
                    >
                      {technology.icon}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-secondary hover:text-foreground underline underline-offset-4"
                  >
                    Live
                  </Link>
                ) : null}
                {project.github ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-secondary hover:text-foreground underline underline-offset-4"
                  >
                    Code
                  </Link>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
}
