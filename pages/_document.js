import Document, { Head, Main, NextScript } from "next/document"

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <link rel="stylesheet" href="/static/normalize.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
