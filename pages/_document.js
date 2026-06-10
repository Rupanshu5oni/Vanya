import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Vanya — Premium women's fashion. Elegant, modern, timeless clothing crafted with the finest fabrics." />
        <meta property="og:title" content="Vanya — Timeless Women's Fashion" />
        <meta property="og:description" content="Discover Vanya's premium collection of dresses, ethnic and contemporary wear." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/images/vanya.jpg" />
        
      </Head>
      <body><Main /><NextScript /></body>
    </Html>
  );
}
