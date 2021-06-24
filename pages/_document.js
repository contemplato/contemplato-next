import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../components/common/lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              <!-- Global site tag (gtag.js) - Google Ads: 668732255 -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
              <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); gtag('config', '${GA_TRACKING_ID}'); </script>

              <!-- Event snippet for Contemplato - Lead Quero Comprar conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
              <script> function gtag_report_conversion(url)
              { var callback = function () { if (typeof(url) != 'undefined'){ window.location = url; } };
              gtag('event', 'conversion', { 'send_to': 'AW-668732255/Px9VCOmLw9ABEN-W8L4C', 'event_callback': callback }); return false; }
              </script>
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
