import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";
import { Red_Hat_Display } from '@next/font/google';

const redHatDisplay = Red_Hat_Display ({
  subsets: ['latin'],
  weight: '400',
})


function MyApp({ Component, pageProps }) {
  return (
    <main className={redHatDisplay.className}>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    </main>
  );
}

export default MyApp;
