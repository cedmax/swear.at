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
          <title>Swear at...</title>
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-240287-38', 'auto');
            ga('send', 'pageview');
          `
            }}
          />
        </body>
      </html>
    )
  }
}
