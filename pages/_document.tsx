import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  charset: "utf-8",
  title: "Aman Verma - Portfolio",
  description:
    "A website about Aman Verma, full stack developer, open source enthusiast, and tech creator.",
  keywords:
    "Aman Verma, Full Stack Developer, Open Source, Tech Creator, Patna, Bihar, India",
  author: "Aman Verma",
  openGraph: {
    title: "AMAN VERMA - Portfolio",
    description:
      "A website about AMAN VERMA, full stack developer, open source enthusiast, and tech creator.",
    siteName: "AMAN VERMA - Portfolio",
    images: [
      {
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Verma - Portfolio",
    description:
      "A website about Aman Verma, full stack developer, open source enthusiast, and tech creator.",
    images: [
      {
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Document() {
  return (
    <Html lang="en" className={""}>
      <Head>
        <meta charSet={metadata.charset} />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:url" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
