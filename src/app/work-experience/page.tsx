import Container from '@/components/common/Container';
import { experiences } from '@/config/Experience';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Link } from 'next-view-transitions';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

export const metadata: Metadata = {
  ...getMetadata('/work-experience'),
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
  } as Robots,
};

export default function WorkExperiencePage() {
  return (
    <Container className="py-12">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
        <p className="text-secondary mt-2 max-w-2xl text-sm leading-6">
          Roles across AI engineering, research, product, and quantitative
          systems.
        </p>
      </section>

      <section className="mt-10 divide-y">
        {experiences.map((experience) => (
          <article key={experience.company} className="py-6 first:pt-0 last:pb-0">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  {experience.website && experience.website !== '#' ? (
                    <Link
                      href={experience.website}
                      target="_blank"
                      className="text-xl font-semibold hover:opacity-75"
                    >
                      {experience.company}
                    </Link>
                  ) : (
                    <p className="text-xl font-semibold">{experience.company}</p>
                  )}
                  {experience.isCurrent ? (
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">
                      ● Working
                    </span>
                  ) : null}
                </div>
                <p className="text-secondary mt-1 text-sm">{experience.position}</p>
              </div>
              <div className="text-secondary text-sm sm:text-right">
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
                <p>{experience.location}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <a
                  key={`${experience.company}-${technology.name}`}
                  href={technology.href}
                  className="hover:bg-muted flex size-9 items-center justify-center rounded-lg border transition-colors [&_svg]:size-4"
                  aria-label={technology.name}
                >
                  {technology.icon}
                </a>
              ))}
            </div>

            <ul className="text-secondary mt-4 space-y-2 text-sm leading-6">
              {(experience.featuredHighlights ?? experience.description).map((item) => (
                <li key={`${experience.company}-${item}`}>· {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </Container>
  );
}
