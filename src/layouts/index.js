import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

export default ({ children }) =>
  <div className="container">
    <Header />
    {children()}
    <Footer />
  </div>
