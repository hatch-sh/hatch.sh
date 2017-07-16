import React from 'react'
import { Helmet } from 'react-helmet'
import Link from 'gatsby-link'

import { Terminal, Prompt, Line } from '../components/terminal'

import './styles.css'

export default () =>
  <div>
    <Helmet>
      <title>Hatch</title>
    </Helmet>
    <h2
      style={{
        fontSize: '3rem',
        fontWeight: 'normal',
        lineHeight: '3.2rem',
        marginBottom: '1rem',
        marginTop: 0,
        paddingBottom: '1rem',
        textAlign: 'center',
      }}
    >
      <b>Easy</b> deployment of static websites to Amazon Web Services
    </h2>
    <p style={{ padding: '1.5em 0' }}>
      Simple command line interface for managing your static websites on AWS. Hatch takes
      cares of creating S3 buckets and configuring your custom domains — all from the
      comforts of your command line.
    </p>
    <Terminal>
      <Prompt>brew tap hatch-sh/hatch</Prompt>
      <Prompt>brew install hatch</Prompt>
      <Prompt>hatch website deploy</Prompt>
      <Line>Hatching...</Line>
      <Line>
        Website uploaded to http://2aee2ef6cab3.s3-website.eu-central-1.amazonaws.com
      </Line>
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
        or read the <Link to="/getting-started">getting started guide</Link> to get up and
        running in no time.
      </p>
    </div>
  </div>
