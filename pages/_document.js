import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Prathmesh Sadake" />
          <meta
            name="description"
            content="<title>Prathmesh Sadake</title>I’m Prathmesh Sadake a Full Stack Software Engineer. As a Full Stack Engineer, I am able to create client-facing apps while also providing cutting-edge back-end support."
          />
          <meta name="keywords" content="Prathmesh Sadake" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Prathmesh Sadake" />

          <title>Prathmesh Sadake</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
