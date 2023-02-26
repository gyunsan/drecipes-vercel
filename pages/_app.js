import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";
import { Red_Hat_Display } from '@next/font/google';
import PrimarySearchAppBar from "../components/layout/app-nav";

const redHatDisplay = Red_Hat_Display ({
  subsets: ['latin'],
  weight: '400',
})


function MyApp({ Component, pageProps }) {
  return (
    <>
    <PrimarySearchAppBar /> 
    <main className={redHatDisplay.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </main></>
  );
}

export default MyApp;
