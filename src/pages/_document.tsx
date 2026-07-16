import { Html, Head, Main, NextScript } from "next/document";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const SHOULD_LOAD_GTM =
  process.env.NODE_ENV === "production" &&
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true" &&
  Boolean(GTM_ID);

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Charset y Viewport */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Theme color */}
        <meta name="theme-color" content="#09090b" />
        <meta name="msapplication-TileColor" content="#09090b" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body id="root" className="bg-zinc-900 text-zinc-50">
        {/* Google Tag Manager (noscript) */}
        {SHOULD_LOAD_GTM && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
          </noscript>
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
