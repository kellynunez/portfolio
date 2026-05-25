import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Charset y Viewport */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Meta tags de control */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* Theme color */}
        <meta name="theme-color" content="#09090b" />
        <meta name="msapplication-TileColor" content="#09090b" />

        {/* Fonts */}
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
      </Head>
      <body id="root" className="bg-zinc-900 text-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
