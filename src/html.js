/* eslint-env node */
import React from 'react'

const ProductionStyles = () =>
  process.env.NODE_ENV === `production` &&
  <style
    id="gatsby-inlined-css"
    dangerouslySetInnerHTML={{ __html: require(`!raw-loader!../public/styles.css`) }}
  />

export default ({ body, headComponents, postBodyComponents }) =>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="referrer" content="origin" />
      <meta
        name="description"
        content="Easy deployment of static websites to Amazon Web Services"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Hatch.sh</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,700,900"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
      {headComponents}
      <ProductionStyles />
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
