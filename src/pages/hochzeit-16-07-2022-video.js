import React from 'react';
import Layout from '../common/layouts';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Seo from '../common/seo';
import './hochzeit.css';


export default ({props, data}) => {
  return (
    <Layout withFooter={false} withNavbar={false}>
      <Seo
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.title} />
      <div className="center flex flex-wrap w-100">
        <div className="serif f4 lh-copy center row">
          <div className="tc col-md-12" style={{paddingLeft: 30, paddingRight: 30}}>
            <div className="embed-responsive">
              <video controls style={{width: '100%', height: 'auto'}} src="https://www.dropbox.com/s/3sexlz0uxkbvf73/Lara_Jonas_Hochzeit_fertig.mov?raw=1"></video>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {name: {eq: "hochzeit"}}) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: {eq: "img/banner-wedding.jpeg"}) {
      childImageSharp {
        fluid(maxHeight: 320, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
