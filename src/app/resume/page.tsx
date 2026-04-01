import Container from '@/components/common/Container';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { Link } from 'next-view-transitions';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
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

export default function ResumePage() {
  return (
    <Container className="py-12">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
        <p className="text-secondary mt-2 max-w-2xl text-sm leading-6">
          A concise snapshot of my work across AI engineering, research,
          quantitative analysis, and product execution.
        </p>
        <div className="mt-5">
          <Link
            href={resumeConfig.url}
            target="_blank"
            className="inline-flex rounded-full border px-4 py-2 text-sm transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            Open full resume
          </Link>
        </div>
      </section>
      <section className="mt-10 overflow-hidden rounded-3xl border bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_18px_45px_rgba(0,0,0,0.04)] dark:bg-neutral-950">
        <div className="border-b px-5 py-3 text-sm text-neutral-500">
          Preview
        </div>
        <div className="mx-auto max-w-4xl">
          <iframe
            src={resumeConfig.url}
            className="min-h-[1100px] w-full"
            title="Resume preview"
          ></iframe>
        </div>
      </section>
    </Container>
  );
}
