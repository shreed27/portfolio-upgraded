import { Link } from 'next-view-transitions';

interface ProjectNavigationProps {
  previous: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <div className="grid gap-4 border-t pt-8 md:grid-cols-2">
      <div className={`${next ? '' : 'md:col-span-2'}`}>
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="hover:bg-muted block rounded-3xl border p-5 transition-colors"
          >
            <div className="text-secondary text-xs uppercase tracking-wide">
              Previous Project
            </div>
            <div className="mt-2 font-medium">{previous.title}</div>
          </Link>
        ) : (
          <div className="h-16" />
        )}
      </div>
      <div className={`${previous ? '' : 'md:col-span-2'}`}>
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="hover:bg-muted block rounded-3xl border p-5 text-right transition-colors"
          >
            <div className="text-secondary text-xs uppercase tracking-wide">
              Next Project
            </div>
            <div className="mt-2 font-medium">{next.title}</div>
          </Link>
        ) : (
          <div className="h-16" />
        )}
      </div>
    </div>
  );
}
