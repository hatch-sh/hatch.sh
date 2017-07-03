module.exports = {
    siteMetadata: {
        title: "Hatch"
    },
    plugins: [{
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/pages`,
            name: "pages",
        },
    }]
}
