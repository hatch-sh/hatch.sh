import React from 'react'
import {Helmet} from 'react-helmet'

import './styles.css'

export default () =>
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>hatch.sh - Simplified AWS</title>
        </Helmet>
        <div className="container">
            <p><code>hatch.sh</code> makes it easy to solve a specific set of problems using AWS's various services.</p>

            <div className="logo">🐣 <code>hatch.sh</code></div>

            <p><code>hatch.sh</code> provides a set of commands that bundle various AWS services together in order to solve a specific problem.
                Currently the following use-cases are implemented.</p>

            <h2>Static Websites</h2>
            <p>Create a static website and host it on S3. This uses a comibnation of S3, CloudFront, and Route53.</p>
            <pre>
                <code>
        hatch website create
        hatch website deploy
        hatch website start
                </code>
            </pre>

            <h2>HTTP(S) APIs</h2>
            <p>Create HTTP(S) APIs in python. This uses Lambda, APIGateway, Route53</p>
            <pre>
                <code>
hatch api create
hatch api start
hatch api deploy
                </code>
            </pre>

            <h2>Cron jobs</h2>
            <p>TODO</p>

            <h2>Docker deployments</h2>
            <p>TODO</p>
        </div>
    </div>
