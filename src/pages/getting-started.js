import React from 'react'
import { Helmet } from 'react-helmet'
import marked from 'marked'

const markup = marked(`

Hatch makes it easy to manage your static websites on AWS — Hatch takes cares
of creating S3 buckets, configuring your custom domains in Route53, and setting
up CloudFront — All from the comforts of your command line.

## Installation

On macOS you can install Hatch using [Homebrew][homebrew]:

\`\`\`sh
brew tap hatch-sh/hatch
brew install hatch
\`\`\`


This will install hatch as well as ZSH and Bash completion scripts so you get
nice helpful tab-completions in your shell.

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

## Examples

This site is deployed using Hatch on [Travis][travis]. The site is generated
using [Gatsby.js][gatsby]. You can see the code [here][hatch-website].

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
