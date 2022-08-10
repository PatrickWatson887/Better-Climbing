import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { GA_TRACKING_ID } from 'utils/gtag'

const isSSR = typeof window !== 'undefined'
const isDevMode = process.env.NODE_ENV === 'development'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap" rel="stylesheet"/>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-39JFRL7NS5`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-39JFRL7NS5', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body className={isDevMode ? 'debug-screens' : ''}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
