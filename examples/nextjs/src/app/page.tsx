'use client';

import Link from 'next/link';
import { openExternalBrowser } from 'open-external-browser';

export default function Home() {
  return (
    <main>
      <h1>open external browser</h1>

      <Link href="/external">route that opens to external browser</Link>
      <button onClick={() => openExternalBrowser({ where: 'all' })}>open external browser when in-app</button>
    </main>
  );
}
