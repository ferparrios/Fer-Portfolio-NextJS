import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Fernando Paredes Rios</title>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XQRL267RZ4"></Script>
          <Script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XQRL267RZ4');
            
            `
          }} />
        </Head>
        
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument