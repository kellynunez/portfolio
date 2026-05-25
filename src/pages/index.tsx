import { JetBrains_Mono } from "next/font/google";
import { HomPage } from "@/components";
import Head from "next/head"; // 1. Importa el componente Head

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono"
});

export default function Home() {
  const description = "Especialista en identidad de marca y desarrollo frontend con más de 10 años de experiencia unificando la estrategia de branding con la ejecución técnica de productos digitales escalables.";
  const title = "Kelly Núñez | Lead Product Designer & Web Dev";
  const url = "https://kellynunez.com";
  const image = `${url}/kelly-nunez-portfolio.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kelly Núñez",
    url: url,
    jobTitle: "Lead Product Designer & Web Developer",
    description: description,
    image: image,
    sameAs: [
      "https://linkedin.com/in/kelly-nunez",
      "https://twitter.com/kellynunez",
      "https://github.com/kellynunez"
    ],
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@kellynunez.com"
    }
  };

  return (
    <>
      {/* SEO */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Product Designer, Web Developer, UI/UX, Frontend, Brand Identity, Digital Products" />
        <meta name="author" content="Kelly Núñez" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={url} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta name="twitter:creator" content="@kellynunez" />
        
        {/* Additional SEO */}
        <meta name="format-detection" content="telephone=no" />
        <link rel="alternate" hrefLang="es" href={url} />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <main className={`font-satoshi ${jetbrainsMono.variable}`}>
        <HomPage />
        <form name="contact-customer" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contact-customer" />
          <input type="text" name="bot-field" />
          <input type="email" name="email" />
          <input type="text" name="nombre" />
          <textarea name="comentario"></textarea>
        </form>
      </main>
    </>
  );
}