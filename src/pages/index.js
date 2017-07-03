import React from 'react'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import Header from '../components/header'
import { Terminal, Prompt, Line } from '../components/terminal'

import './styles.css'

export default () =>
  <div>
    <Helmet>
      <title>Hatch</title>
    </Helmet>
    <div className="container">
      <Header />
      <p style={{ padding: '1.5em 0' }}>
        Simple command line interface for managing your static websites on AWS — Hatch
        takes cares of creating S3 buckets, configuring your custom domains, and setting
        up CloudFront — All from the comforts of your command line.
      </p>
      <Terminal>
        <Prompt>brew tap hatch-sh/hatch</Prompt>
        <Prompt>brew install hatch</Prompt>
        <Prompt>hatch deploy</Prompt>
        <Line>Deploying site</Line>
        <Line>Site deployed to http://abc.foobar.com</Line>
      </Terminal>
      <div
        style={{
          marginTop: '2em',
        }}
      >
        <p>
          You can check out the code on{' '}
          <a
            href="https://github.com/hatch-sh/hatch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{' '}
          or read the <a href="/getting-started">getting started guide</a> to get up and
          running in no time.
        </p>
      </div>
      <Footer />
    </div>
  </div>
