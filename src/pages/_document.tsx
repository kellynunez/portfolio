import { Html, Head, Main, NextScript } from "next/document";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const SHOULD_LOAD_GTM = process.env.NODE_ENV === "production" && Boolean(GTM_ID);

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Google Tag Manager */}
        {SHOULD_LOAD_GTM && (
          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');` }} />
        )}

        {/* Charset y Viewport */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

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
