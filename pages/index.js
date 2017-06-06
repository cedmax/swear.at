import React from 'react'
import Header from 'components/header';
import Head from 'next/head'

export default () =>(
  <div>
    <Head>
      <style>{`
        * { box-sizing: border-box;}
        div, ol, ul, li, body, html, img, nav, h1, h2, h3 { margin: 0; padding: 0; border: 0;}
        ul,li { list-style-type:none;}
        li { display:inline-block;}
      `}</style>
      <link rel="stylesheet" href="/static/css/bundle.css" />
    </Head>
    <Header />
  </div>
)

