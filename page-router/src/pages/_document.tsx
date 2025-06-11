"use client";

import { Html, Head, Main, NextScript } from "next/document";

export default function DocumentComponent() {
  return (
    <Html
      lang="en"
      className="light"
      style={{
        colorScheme: "light",
      }}
    >
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
