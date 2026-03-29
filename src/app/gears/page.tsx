import Container from '@/components/common/Container';
import Monitor from '@/components/svgs/devices/Monitor';
import { devices, software, webExtensions } from '@/config/Gears';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { ArrowUpRight, Puzzle } from 'lucide-react';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/gears'),
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

export default function GearsPage() {
  return (
    <Container className="py-12">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">Gears</h1>
        <p className="text-secondary mt-2 max-w-2xl text-sm leading-6">
          The devices, apps, and browser tools that make up my everyday setup.
        </p>
      </section>

      <section className="mt-10 grid gap-12">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Devices</h2>
          <div className="mt-4 divide-y">
            {devices.map((device) => (
              <div key={device.name} className="flex items-center gap-4 py-4">
                <div className="bg-muted text-secondary flex size-10 items-center justify-center rounded-xl border">
                  {device.icon}
                </div>
                <p className="text-sm leading-6">{device.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <div className="bg-muted text-secondary flex size-10 items-center justify-center rounded-xl border">
              <Puzzle className="size-4" />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">Web Extensions</h2>
          </div>
          <div className="mt-4 divide-y">
            {webExtensions.map((extension, index) => (
              <Link
                key={extension.name}
                target="_blank"
                href={extension.href}
                className="hover:bg-muted grid gap-2 py-4 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <span className="text-secondary text-sm">{index + 1}.</span>
                <p className="text-sm">{extension.name}</p>
                <ArrowUpRight className="text-secondary size-4" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <div className="bg-muted text-secondary flex size-10 items-center justify-center rounded-xl border">
              <Monitor className="size-4" />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">Software</h2>
          </div>
          <div className="mt-4 divide-y">
            {software.map((app, index) => (
              <Link
                key={app.name}
                target="_blank"
                href={app.href}
                className="hover:bg-muted grid gap-2 py-4 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <span className="text-secondary text-sm">{index + 1}.</span>
                <p className="text-sm">{app.name}</p>
                <ArrowUpRight className="text-secondary size-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
