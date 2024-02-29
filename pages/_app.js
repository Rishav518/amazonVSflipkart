import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from 'next/head'
import Script from "next/script"
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Amazon VS Flipkart</title>
      <meta
        name='Tailblocks - Ready to use Tailwind CSS Blocks'
        content='Tailblocks provides you to use Tailwind pre-made blocks and use them on any platform. The blocks are royalty-free and easy to use. Just copy and paste where you want to use.'
      />
      <meta property="og:image" content="/t5.png" />
      {/* <meta name="google-site-verification" content="CNoKzKiZOGuaIvr9s_xGmGo4CqXWgQveGK1jKJB5FdM" /> */}
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quintessential&display=swap" rel="stylesheet"></link>
    </Head>

    <Component {...pageProps} />
    {/* <Script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2387352266688666' 
    crossOrigin='anonymous'></Script> */}

    <Script src="https://use.fontawesome.com/03f8a0ebd4.js"></Script>
    <Script src="https://kit.fontawesome.com/290d4f0eb4.js" crossOrigin='anonymous'></Script>
    <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
    {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EQCS9VX3YJ"
        strategy="afterInteractive"
      /> */}
      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EQCS9VX3YJ');
        `}
      </Script> */}
    
  </>

}

export default MyApp
