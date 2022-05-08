import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&Inter&display=swap"
            rel="stylesheet"
          />

          {/* {process.env.NETLIFY === 'true' ? (
                        <>
                            <script src="https://getinsights.io/js/insights.js"></script>
                            <script dangerouslySetInnerHTML={{
                                __html: "insights.init('j2x__mZtlN831KAD'); insights.trackPages();",
                            }} />
                        </>
                    ) : (
                        <></>
                    )
                    } */}
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
