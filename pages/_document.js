import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head><script src="https://platform.illow.io/banner.js?siteId=509a0942-1d46-47c3-a1b8-248de9de1bcc"></script></Head>
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
