import Container from '@/components/common/Container';
import { ProjectContent } from '@/components/projects/ProjectContent';
import { ProjectNavigation } from '@/components/projects/ProjectNavigation';
import { siteConfig } from '@/config/Meta';
import {
  getProjectCaseStudyBySlug,
  getProjectCaseStudySlugs,
  getProjectNavigation,
  getRelatedProjectCaseStudies,
} from '@/lib/project';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import { notFound } from 'next/navigation';

interface ProjectCaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all project case studies
export async function generateStaticParams() {
  const slugs = getProjectCaseStudySlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each project case study
export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getProjectCaseStudyBySlug(slug);

  if (!caseStudy || !caseStudy.frontmatter.isPublished) {
    return {
      title: 'Project Not Found',
    };
  }

  const { title, description, image } = caseStudy.frontmatter;

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${title} - Project Case Study`,
    description,
    openGraph: {
      title: `${title} - Project Case Study`,
      description,
      images: [image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Project Case Study`,
      description,
      images: [image],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getProjectCaseStudyBySlug(slug);

  if (!caseStudy || !caseStudy.frontmatter.isPublished) {
    notFound();
  }

  const navigation = await getProjectNavigation(slug);
  const relatedProjects = await getRelatedProjectCaseStudies(slug, 2);

  return (
    <Container className="py-16">
      <div className="space-y-12">
        <div>
          <Link
            href="/projects"
            className="text-secondary hover:text-foreground text-sm underline underline-offset-4"
          >
            Back to Projects
          </Link>
        </div>

        <ProjectContent
          frontmatter={caseStudy.frontmatter}
          content={caseStudy.content}
        />

        <ProjectNavigation
          previous={navigation.previous}
          next={navigation.next}
        />

        {relatedProjects.length > 0 && (
          <section className="border-t pt-8">
            <h2 className="text-lg font-semibold tracking-tight">Related Projects</h2>
            <div className="mt-4 divide-y">
              {relatedProjects.map((project) => (
                <article key={project.slug} className="py-4 first:pt-0 last:pb-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block hover:opacity-80"
                  >
                    <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline">
                      <div>
                        <h3 className="font-medium">{project.frontmatter.title}</h3>
                        <p className="text-secondary mt-1 text-sm">
                          {project.frontmatter.description}
                        </p>
                      </div>
                      <p className="text-secondary text-sm">
                        {project.frontmatter.status}
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
  );
}
