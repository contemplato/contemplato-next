import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>         
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-668732255"></script>
          <script src="./embed/gaAW2.js"></script> 
          <title> Contemplato </title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// <!-- Event snippet for Whatsapp conversion page -->
//  <script> gtag('event', 'conversion', {'send_to': 'AW-668732255/DKhmCLin0N0BEN-W8L4C'}); </script>
