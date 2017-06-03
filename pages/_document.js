import Document, {Head, Main, NextScript} from 'next/document'
import {flush} from 'helpers/styletron'

export default class MyDocument extends Document {
  static getInitialProps ({renderPage}) {
    const page = renderPage()
    const styletron = flush()
    const stylesheets = styletron ? styletron.getStylesheets() : []
    return {...page, stylesheets}
  }

  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          <link
            href="https://fonts.googleapis.com/css?family=Great+Vibes|Bungee|Bungee+Hairline|Bungee+Outline|Bungee+Shade"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <style>{`* { margin: 0;padding: 0; box-sizing: border-box}`}</style>
          {this.props.stylesheets.map((sheet, i) =>
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{__html: sheet.css}}
              media={sheet.media || ''}
              key={i}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
