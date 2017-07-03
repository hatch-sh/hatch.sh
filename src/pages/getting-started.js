import React from 'react'
import { Helmet } from 'react-helmet'
import marked from 'marked'

import Footer from '../components/footer'
import Header from '../components/header'

const markup = marked(`
# Installation

I am using __markdown__.
`)

export default ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>Hatch Installation</title>
      </Helmet>
      <div className="container">
        <Header />
        <div dangerouslySetInnerHTML={{ __html: markup }} />
        <Footer />
      </div>
    </div>
  )
}
