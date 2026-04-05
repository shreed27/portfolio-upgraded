import { footerConfig } from '@/config/Footer';
import { socialLinks } from '@/config/Hero';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-14">
      <div className="grid gap-10 border-t pt-14 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="text-secondary text-sm uppercase">Navigate</p>
          <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-5">
            {footerConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-secondary text-sm uppercase">Connect</p>
          <div className="mt-5 grid grid-cols-4 gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-foreground flex size-12 items-center justify-center rounded-2xl border transition-colors"
                aria-label={link.name}
              >
                <span className="block size-5 [&_svg]:size-5">{link.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-secondary mt-16 flex flex-col gap-3 border-t pt-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {footerConfig.developer}. {footerConfig.copyright}
        </p>
        <p>
          You&apos;re the <span className="text-foreground font-semibold">{footerConfig.visitorCount}</span> visitor
        </p>
      </div>
    </Container>
  );
}
