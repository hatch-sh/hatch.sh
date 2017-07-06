import React from 'react'
import { Helmet } from 'react-helmet'
import marked from 'marked'

import { HatchName } from '../components/header'

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
      <HatchName />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  )
}
