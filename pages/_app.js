// pages/_app.js
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
         <meta name="description"content="A site for my programming portfolio"/>
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp
