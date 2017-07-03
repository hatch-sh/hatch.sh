import React from 'react'

export default ({ body, headComponents, postBodyComponents }) =>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,700,900"
        rel="stylesheet"
      />
      {headComponents}
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
