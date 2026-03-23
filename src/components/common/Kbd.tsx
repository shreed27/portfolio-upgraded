import React from 'react';

export default function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-md border px-2 py-1 font-mono text-xs leading-none">
      {children}
    </kbd>
  );
}

