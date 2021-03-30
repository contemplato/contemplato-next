import React from "react"

export default () => (
  <React.Fragment>
    <script
      dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_CODE}');
      fbq('track', 'PageView');`,
      }}
    />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-157797116-1"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `        window.dataLayer = window.dataLayer || [] function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'UA-157797116-1')`,
      }}
    ></script>
    />
  </React.Fragment>
)
