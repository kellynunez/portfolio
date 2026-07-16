import { JetBrains_Mono } from "next/font/google";
import { HomPage } from "@/components";
import Head from "next/head";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono"
});

export default function Home() {
  const description = "Diseño y desarrollo soluciones digitales escalables. Especialista en la intersección del diseño gráfico, UI/UX y el desarrollo frontend. Enfocada en crear productos coherentes que combinan estética de marca y viabilidad técnica.";
  const title = "Kelly Núñez | Design Engineer | Branding, UI/UX & Frontend";
  const url = "https://kelly-nunez.com";
  const image = `${url}/project-imgs/kelly-nunez-portfolio.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kelly Núñez",
    url: url,
    jobTitle: "Design Engineer | Branding, UI/UX & Frontend",
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
        <meta name="keywords" content="Design Engineer, Graphic, Publicity, Product Designer, Web Developer, UI/UX, Frontend, Brand Identity, Branding Digital Products" />
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