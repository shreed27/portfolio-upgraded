import Container from '@/components/common/Container';
import Kbd from '@/components/common/Kbd';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { settingsJson, steps } from '@/config/Setup';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/setup'),
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

export default function SetupPage() {
  return (
    <Container className="py-12">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Setup</h1>
        <p className="text-secondary mt-2 max-w-2xl text-sm leading-6">
          The editor workflow I use daily, including fonts, extensions, and a
          pared-down `settings.json`.
        </p>
      </section>

      <section className="mt-10 divide-y">
        {steps.map((step) => (
          <article key={step.id} className="py-6 first:pt-0 last:pb-0">
            <div className="flex items-center gap-3">
              <span className="text-secondary rounded-full border px-3 py-1 text-xs">
                Step {step.id}
              </span>
              <span className="text-secondary flex size-9 items-center justify-center rounded-xl border">
                {step.icon}
              </span>
              <h2 className="text-lg font-semibold tracking-tight">{step.title}</h2>
            </div>

            <div className="mt-4 space-y-3">
              {step.content.map((item, index) => (
                <div key={`${step.id}-${index}`}>
                  {item.type === 'download' ? (
                    <Link
                      href={item.href || '#'}
                      download
                      className="hover:bg-muted flex items-start gap-3 rounded-2xl border p-4 transition-colors"
                    >
                      <Download className="text-secondary mt-0.5 size-4 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{item.name}</span>
                          <ExternalLink className="text-secondary size-3" />
                        </div>
                        <p className="text-secondary mt-1 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ) : null}

                  {item.type === 'instruction' ? (
                    <p className="text-secondary text-sm leading-6">· {item.text}</p>
                  ) : null}

                  {item.type === 'shortcut' ? (
                    <div className="rounded-2xl border p-4">
                      <Kbd>{item.text}</Kbd>
                    </div>
                  ) : null}

                  {item.type === 'prompt' ? (
                    <div className="rounded-2xl border p-4">
                      <div className="flex items-start gap-3">
                        <FileText className="text-secondary mt-0.5 size-4 shrink-0" />
                        <code className="text-secondary font-mono text-sm">
                          {item.text}
                        </code>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">settings.json</h2>
        <div className="mt-4 overflow-hidden rounded-3xl border">
          <div className="text-secondary border-b px-4 py-3 text-sm">settings.json</div>
          <div className="overflow-x-auto">
            <pre className="min-w-full bg-neutral-50 p-4 text-xs leading-6 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
              <code>{settingsJson}</code>
            </pre>
          </div>
        </div>
      </section>
    </Container>
  );
}
