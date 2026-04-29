import { JetBrains_Mono } from "next/font/google";
import { HomPage } from "@/components";
import Head from "next/head"; // 1. Importa el componente Head

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono"
});

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Kelly Núñez | Principal Product Designer & Frontend Developer</title>
        <meta name="description" content="Especialista en identidad de marca y desarrollo frontend con más de 10 años de experiencia unificando la estrategia de branding con la ejecución técnica de productos digitales escalables." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta property="og:title" content="Kelly Núñez | Principal Designer & Frontend Developer" />
        <meta property="og:description" content="Especialista en identidad de marca y desarrollo frontend con más de 10 años de experiencia unificando la estrategia de branding con la ejecución técnica de productos digitales escalables." />
        <meta property="og:image" content="/kelly-nunez-portfolio.png" />
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