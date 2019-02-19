import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';


export default ({props, data}) => (
  <Layout>
    <Seo
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.title} />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
      <h1
        className="fw1 tc f2 display absolute dn dib-ns"
        style={{bottom: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>{data.markdownRemark.frontmatter.title}</h1>
    </div>
    <div className="mw9 center flex flex-wrap pv5-l w-100">
      <div className="lh-copy f4" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
    </div>
  </Layout>
)

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {name: {eq: "datenschutzerklaerung"}}) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: {eq: "img/about__banner.jpg"}) {
      childImageSharp {
        fluid(maxHeight: 720, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
