'use client';

import { useOpenExternalBrowser } from 'open-external-browser';

export default function External() {
  useOpenExternalBrowser({ where: 'all' });

  return (
    <main>
      <h1>external browser route</h1>
    </main>
  );
}
