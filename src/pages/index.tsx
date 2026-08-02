import { JetBrains_Mono } from "next/font/google";
import { HomPage } from "@/components";
import Head from "next/head";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono"
});

export default function Home() {
  const description = "Especialista Front-End y de sistemas de diseño UI/UX. Integración de identidad de marca, comunicación y diseño publicitario.";
  const title = "Kelly Núñez — Design Engineer | Frontend & UI/UX";
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kelly-nunez.com").replace(/\/$/, "");
  const imagePath = "/kelly-nunez-portfolio.png";
  const image = `${siteUrl}${imagePath}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kelly Núñez",
    url: siteUrl,
    jobTitle: "Design Engineer | Frontend & UI/UX",
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
      email: "kellynunezhu@gmail.com"
    }
  };

  return (
    <>
      {/* SEO */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Design Engineer, Creative Lead, Graphic Designer, Publicity, Product Designer, Web Developer, UI/UX, Frontend, Brand Identity, Branding Digital Products" />
        <meta name="author" content="Kelly Núñez" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:url" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Vista previa del portafolio de Kelly Núñez" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content="Preview of the portfolio of Kelly Núñez" />
        <meta name="twitter:creator" content="@kellynunez" />
        
        {/* Additional SEO */}
        <meta name="format-detection" content="telephone=no" />
        <link rel="alternate" hrefLang="es" href={siteUrl} />
        
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