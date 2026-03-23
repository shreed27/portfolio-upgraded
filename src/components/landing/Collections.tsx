import { Link } from 'next-view-transitions';
import React from 'react';

type LinkItem = {
  title: string;
  description: string;
  href: string;
};

const development: LinkItem[] = [
  {
    title: 'Gears',
    description: 'Tools, devices, and software I use.',
    href: '/gears',
  },
  {
    title: 'Setup',
    description: 'Editor and workflow preferences.',
    href: '/setup',
  },
];

const personal: LinkItem[] = [
  {
    title: 'Journey',
    description: 'A timeline of what I’m building and learning.',
    href: '/journey',
  },
  {
    title: 'Projects',
    description: 'Selected work and experiments.',
    href: '/projects',
  },
];

function ListSection({ title, items }: { title: string; items: LinkItem[] }) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:bg-muted rounded-md border p-3 transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">{item.title}</p>
              <span className="text-secondary text-sm">Read</span>
            </div>
            <p className="text-secondary mt-1 text-sm">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Collections() {
  return (
    <section className="mt-16 grid gap-10 sm:grid-cols-2">
      <ListSection title="Development" items={development} />
      <ListSection title="Personal" items={personal} />
    </section>
  );
}
