import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
const SHOULD_LOAD_GA = process.env.NODE_ENV === "production" && Boolean(GA_MEASUREMENT_ID);

const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!SHOULD_LOAD_GA) return;

    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {SHOULD_LOAD_GA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}
