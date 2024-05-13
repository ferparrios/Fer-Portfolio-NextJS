import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@components/index";

import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="first-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XQRL267RZ4"
      ></Script>
      <Script
        id="second-script"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XQRL267RZ4');
            
            `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
