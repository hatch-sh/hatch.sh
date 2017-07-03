import React from 'react'
import { Helmet } from 'react-helmet'

import { Terminal, Prompt, Line } from '../components/terminal'

import './styles.css'

const Header = () =>
  <div style={{ textAlign: 'center', paddingTop: '1em' }}>
    <h1
      style={{
        fontWeight: 900,
      }}
    >
      Hatch.
    </h1>

    <h2
      style={{
        fontWeight: 'normal',
        fontSize: '3rem',
        lineHeight: '3.2rem',
        paddingBottom: '1rem',
      }}
    >
      <b>Easy</b> deployment of static websites to Amazon Web Services
    </h2>

    <p style={{ padding: '1.5em 0' }}>
      Simple command line interface for managing your static websites on AWS — Hatch takes
      cares of creating S3 buckets, configuring your custom domains, and setting up
      CloudFront — All from the comforts of your command line.
    </p>
  </div>

const Body = () =>
  <div
    style={{
      marginTop: '2em',
    }}
  >
    <p>
      You can check out the code on{' '}
      <a href="https://github.com/hatch-sh/hatch" target="_blank">
        Github
      </a>{' '}
      or read the <a href="/getting-started">getting started guide</a> to get up and
      running in no time.
    </p>
  </div>

const Footer = () =>
  <div
    style={{
      marginTop: '6rem',
      fontWeight: '300',
      fontSize: '0.8rem',
      textAlign: 'center',
    }}
  >
    <p>
      Made with ❤️ by
      <a
        href="https://twitter.com/mads_hartmann"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}Mads Hartmann{' '}
      </a>{' '}
      &
      <a
        href="https://twitter.com/kenneth_skovhus"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}Kenneth Skovhus
      </a>
    </p>
  </div>

export default () =>
  <div>
    <Helmet>
      <title>Hatch</title>
    </Helmet>
    <div className="container">
      <Header />
      <Terminal>
        <Prompt>brew tap hatch-sh/hatch</Prompt>
        <Prompt>brew install hatch</Prompt>
        <Prompt>hatch deploy</Prompt>
        <Line>Deploying site</Line>
        <Line>Site deployed to http://abc.foobar.com</Line>
      </Terminal>
      <Body />
      <Footer />
    </div>
  </div>
