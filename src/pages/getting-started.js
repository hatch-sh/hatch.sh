import React from 'react'
import { Helmet } from 'react-helmet'
import marked from 'marked'

const markup = marked(`
## Installation

I am using __markdown__.
`)

export default ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>Hatch Installation</title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  )
}
