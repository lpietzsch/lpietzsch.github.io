import React from "react"
import Layout from '../common/layouts';
import { graphql } from 'gatsby';
import Hero from '../homepage/components/hero';
import Card from '../homepage/components/card';
import Bio from '../homepage/components/bio';
import Seo from '../common/seo';

export default ({ data }) => {
  const fixedImage = data.file.childImageSharp.fluid;
  return (
    <Layout>
      <Seo
        title={"Startseite"}
        description={data.site.siteMetadata.description} />
      <Hero
        title='Die Kuppel einer erfolgreichen Marke'
        image={fixedImage}
        description='Kommunikation. PR. Leidenschaft.' />
      <div className="flex flex-wrap center mw9 justify-around pb3">
        {data.cards.edges.map(({node}) => (
          <Card
            title={node.frontmatter.title}
            image={node.frontmatter.postImage.childImageSharp.fluid}
            to={node.frontmatter.slug}
            description={node.frontmatter.description} />
        ))}
      </div>
      <Bio />
    </Layout>
  )
}

export const query = graphql`
  query {
    cards: allMarkdownRemark(
      limit: 3,
      sort: {order: DESC, fields: frontmatter___date},
      filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
    file(relativePath: { eq: "img/index-page-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
