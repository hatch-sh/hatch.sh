import React from 'react'
import { Helmet } from 'react-helmet'
import marked from 'marked'

import logo from '../../static/images/hatch-200x240.png'

const markup = marked(`

Hatch makes it easy to manage your static websites on [AWS][aws] — Hatch takes
cares of creating S3 buckets and configuring your custom domains in Route53 —
All from the comforts of your command line.

- [Installation](#installation)
- [Configuration](#configuration)
  - [AWS](#aws)
  - [Hatch](#hatch)
- [Deploying](#deploying)
  - [Auto-generated URLS](#auto-generated-urls)
  - [Named buckets](#named-buckets)
  - [Custom domains](#custom-domains)
- [Relevant AWS pricing](#relevant-aws-pricing)
- [Background](#background)

## Installation

On macOS you can install Hatch using [Homebrew][homebrew]:

\`\`\`sh
brew tap hatch-sh/hatch
brew install hatch
hatch --version
\`\`\`

This will install hatch as well as [Zsh][zsh] and [Bash][bash] completion scripts so you get
nice helpful tab-completions in your shell. For the Bash completions to work
you need to have the \`bash-completion\` homebrew package installed. For Zsh
completions to work you need to be using [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh).

On other platforms you can install hatch as a pip package

\`\`\`sh
pip install hatch-cli
\`\`\`

Or you can install it from source

\`\`\`sh
git clone git@github.com:hatch-sh/hatch.git
cd hatch
make install
\`\`\`

## Configuration

### AWS

As hatch helps you deploy static websites to AWS you need to have an AWS
account — You can create a free account [here][aws-free].

The AWS services that Hatch is using are very inexpensive but they aren't free.
See [AWS Pricing](#aws-pricing) for more information.

Hatch uses the default way to configure AWS. You can read more about that
[here][aws-configure].

### Hatch

You can configure Hatch through command line arguments (see \`hatch -h\` for more
information) or through a YAML configuration file. By default it looks for a
file named \`website.yml\` in the current directory but you can also choose to
pass a configuration file using the \`--config-file\` option.

The following configuration options are currently available:

- **path**: The path to the folder you want to deploy. By default it will deploy the
  current directory.

- **name**: The name of the S3 bucket to upload your site to.

- **domain**: The custom domain name you want to use. This requires that you have
  transferred the domain to your AWS account using [Route53][route53].

- **region**: The AWS region in which to deploy the site. If unspecified it will
  use the region you've specified in your \`~/.aws/config\` file

A configuration file might looks something like this

\`\`\`yml
domain: "hatch.sh"
path: "./dist"
region: "eu-central-1"
\`\`\`

And using command line arguments that would be

\`\`\`sh
hatch website deploy \\
    --domain hatch.sh \\
    --path dist \\
    --region eu-central-1
\`\`\`

## Deploying

### Auto-generated URLS

If you don't supply a name or custom domain hatch will simply upload your site
to a randomly generated bucket.

### Named buckets

If you use the \`name\` option you can control the name of the bucket and thus
the prefix of the S3 website URL.

### Custom domains

By using the \`domain\` option you can use a custom domain if you've registered
it in [Route53][route53].

### Examples

This site is deployed using Hatch on [Travis][travis]. The site is generated
using [Gatsby.js][gatsby]. You can see the code [here][hatch-website].

## Relevant AWS pricing

Storing and serving static content using S3 is extremely cheap. You can see
the prices for your region [here][s3-pricing].

If you're using a custom domain then see the prices for Route53
[here][route53-pricing].

## Background

Amazon Web Services provides an overwhelming number of services and tools that
will help you build your products. These services are highly configurable and
can be shaped to your individual use-cases. This is very powerful but it comes
at a cost. Building simple products using AWS like a small API, a static
website, etc. usually requires the use of several different services and takes
a huge effort when it comes to configuration. We wanted to change that with
Hatch.

By focusing on a few simple use-cases we've been able to automate the entire
creation and deployment for you so you can focus on building your product. For
now we only support static websites but we have serverless APIs using API
Gateway and AWS Lambda in the the works as well.

[aws]: https://aws.amazon.com/
[aws-free]: https://aws.amazon.com/free
[aws-configure]: http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html
[zsh]: http://www.zsh.org/
[bash]: https://www.gnu.org/software/bash/
[homebrew]: https://brew.sh/
[travis]: https://travis-ci.org
[gatsby]: https://www.gatsbyjs.org/
[hatch-website]: https://github.com/hatch-sh/hatch.sh
[route53]: https://aws.amazon.com/route53
[s3-pricing]: https://aws.amazon.com/s3/pricing/
[route53-pricing]: https://aws.amazon.com/route53/pricing/
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
