import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';


export default ({props, data}) => (
  <Layout>
    <Seo
      title="Über mich"
      description={data.markdownRemark.frontmatter.title} />
    <div className="relative">
      <Img fluid={data.banner.childImageSharp.fluid} />
      <h1
        className="white tracked tc f2 display absolute dn dib-ns"
        style={{bottom: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>Über mich</h1>
    </div>
    <div className="pv5 pa2 flex flex-wrap center justify-around items-center">
      <div className="w-100 mw6 self-start">
        <h1 className="display fw1 db lh-copy" dangerouslySetInnerHTML={{__html: data.markdownRemark.frontmatter.title}}></h1>
        <Link to="/blog" className="dib bg-near-black b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2">Zu meinem Blog</Link>
      </div>
      <div className="w-100 mw7 lh-copy serif pa2 flex flex-column justify-center f4" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
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
    markdownRemark(frontmatter: {name: {eq: "about__bio"}}) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: {eq: "img/banner-kandidat.jpeg"}) {
      childImageSharp {
        fluid(maxHeight: 720, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
