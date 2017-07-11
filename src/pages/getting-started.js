import React from 'react'
import { Helmet } from 'react-helmet'
import marked from 'marked'

import logo from '../../static/images/hatch-200x240.png'

const markup = marked(`

Hatch makes it easy to manage your static websites on AWS — Hatch takes cares
of creating S3 buckets, configuring your custom domains in Route53, and setting
up CloudFront — All from the comforts of your command line.

- [Installation](#installation)
- [Configuration](#configuration)
- [Deploying](#deploying)
- [Relevant AWS pricing](#relevant-aws-pricing)
- [How it works](#how-it-works)

## Installation

On macOS you can install Hatch using [Homebrew][homebrew]:

\`\`\`sh
brew tap hatch-sh/hatch
brew install hatch
hatch --version
\`\`\`

This will install hatch as well as Zsh and Bash completion scripts so you get
nice helpful tab-completions in your shell. For the Bash completions to work
you need to have the \`bash-completion\` homebrew package installed. For Zsh
completions to work you need to be using [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh).

On other platforms you can install hatch as a pip package

\`\`\`sh
pip install hatch-cli
\`\`\`

## Configuration

As hatch helps you deploy static websites to AWS you need to have an AWS
account and have it configured properly.

__TODO__.

As for configuring hatch you can either use command line arguments (see \`help
hatch\`) or you can use a configuration file called \`website.yml\`.

\`\`\`yml
name: my.website.com
\`\`\`

Alternativly you can use the command line arguments

\`\`\`sh
hatch --todo
\`\`\`

## Deploying

This site is deployed using Hatch on [Travis][travis]. The site is generated
using [Gatsby.js][gatsby]. You can see the code [here][hatch-website].

## Relevant AWS pricing

## How it works

[homebrew]: https://brew.sh/
[travis]: https://travis-ci.org
[gatsby]: https://www.gatsbyjs.org/
[hatch-website]: https://github.com/hatch-sh/hatch.sh
`)

export default ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>Hatch Installation</title>
      </Helmet>
      <div className="docs" dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  )
}
