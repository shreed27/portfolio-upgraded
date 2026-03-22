'use client';

import { heroConfig, socialLinks } from '@/config/Hero';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../ui/command';

type NavCommand = {
  label: string;
  href: string;
  keywords?: string[];
  shortcut?: string;
};

const navCommands: NavCommand[] = [
  { label: 'Home', href: '/', shortcut: 'H' },
  { label: 'Work', href: '/work-experience', shortcut: 'W' },
  { label: 'Projects', href: '/projects', shortcut: 'P' },
  { label: 'Blog', href: '/blog', shortcut: 'B' },
  { label: 'Resume', href: '/resume', shortcut: 'R' },
  { label: 'Gears', href: '/gears', shortcut: 'G' },
  { label: 'Setup', href: '/setup', shortcut: 'S' },
  { label: 'Journey', href: '/journey', shortcut: 'J' },
  { label: 'Contact', href: '/contact', shortcut: 'C' },
];

function extractEmailFromMailto(maybeMailto: string | undefined) {
  if (!maybeMailto) return null;
  if (maybeMailto.startsWith('mailto:')) return maybeMailto.slice('mailto:'.length);
  return null;
}

export default function CommandPalette({ className }: { className?: string }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onOpenRequest = () => setOpen(true);
    const onKeyDown = (event: KeyboardEvent) => {
      const isK = event.key.toLowerCase() === 'k';
      if (!isK) return;
      if (!(event.metaKey || event.ctrlKey)) return;

      event.preventDefault();
      setOpen((current) => !current);
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('commandpalette:open', onOpenRequest);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('commandpalette:open', onOpenRequest);
    };
  }, []);

  const email = extractEmailFromMailto(
    socialLinks.find((link) => link.name.toLowerCase() === 'email')?.href,
  );

  const runNavigation = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const copyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copied');
    } catch {
      toast.error('Could not copy email');
    } finally {
      setOpen(false);
    }
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      className={cn('sm:max-w-lg', className)}
      title="Command Palette"
      description={`Quick links for ${heroConfig.name}`}
      showCloseButton={false}
    >
      <CommandInput placeholder="Type a page or action..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {navCommands.map((command) => (
            <CommandItem
              key={command.href}
              value={[command.label, command.href, ...(command.keywords ?? [])].join(
                ' ',
              )}
              onSelect={() => runNavigation(command.href)}
            >
              {command.label}
              {command.shortcut ? <CommandShortcut>{command.shortcut}</CommandShortcut> : null}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          {email ? (
            <CommandItem value="Copy email" onSelect={copyEmail}>
              Copy email
              <CommandShortcut>⌘</CommandShortcut>
            </CommandItem>
          ) : null}
          <CommandItem value="Open email" onSelect={() => runNavigation('/contact')}>
            Get in touch
            <CommandShortcut>T</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
