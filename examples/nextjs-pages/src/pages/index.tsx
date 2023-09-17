import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>open external browser</title>
        <meta name="description" content="openx external browser next.js pages example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${inter.className}`}>
        <h1>open external browser</h1>
      </main>
    </>
  );
}
