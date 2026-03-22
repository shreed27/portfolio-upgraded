'use client';

import React from 'react';

import Kbd from './Kbd';

export default function CommandPaletteTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('commandpalette:open'))}
      className="hover:bg-muted focus-visible:ring-ring inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-hidden"
      aria-label="Open command palette"
    >
      <span className="text-secondary">⌕</span>
      <Kbd>
        <span className="hidden sm:inline">Ctrl</span>
        <span className="sm:hidden">⌘</span>
        <span>K</span>
      </Kbd>
    </button>
  );
}
