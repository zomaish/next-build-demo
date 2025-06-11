"use client";

import { AppProps } from "next/app";

type CustomAppProps = AppProps & {
  Component: {
    fullPageLayout?: boolean;
  } & AppProps["Component"];
};

export default function App({ Component, pageProps }: CustomAppProps) {
  return <Component {...pageProps} />;
}
