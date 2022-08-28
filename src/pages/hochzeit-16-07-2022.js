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
      <div className="relative">
        <Img fluid={data.banner.childImageSharp.fluid} />
        <h1
          className="white tracked tc f2 display absolute dn dib-ns"
          style={{bottom: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>{data.markdownRemark.frontmatter.title}</h1>
      </div>
      <div className="mw9 center flex flex-wrap pv5-l w-100">
        <div className="serif f4 lh-copy center options">
          <div className="tc" style={{paddingLeft: 30, paddingRight: 30}}>
            <h2 className="f3">Hochzeitsvideo</h2>
            <p>Das Video ist ca. 12 Minuten lang und muss zum Anschauen heruntergeladen werden (ca 1,3 GB).</p>
            <a href="https://we.tl/t-6hG3biJM7O" target="_blank" className="dib bg-near-black b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2">Zum Download</a>
          </div>
          <div className="tc" style={{paddingLeft: 30, paddingRight: 30}}>
            <h2 className="f3">Fotos herunterladen</h2>
            <p>Alle Fotos herunterladen, um sie in Ruhe überall schauen und archivieren zu können.{'\n'}<strong>Passwort: <i>16072022</i></strong></p>
            <a href="https://ricardaphotoghraphy.pixieset.com/laraundjonashochzeitsreportage/" target="_blank" className="dib bg-near-black b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2">Zum Download</a>
          </div>
          <div className="tc" style={{paddingLeft: 30, paddingRight: 30}}>
            <h2 className="f3">Foto-Slideshow</h2>
            <p>3-minütige Online-Slideshow der Highlights (ausgesucht von Ricarda) mit Hintergrundmusik.</p>
            <a href="https://ricarda-photoghraphy.smartslides.com/lara-und-jonas-16072022/" target="_blank" className="dib bg-near-black b near-white hover-bg-mid-gray pv3 ph4 ttu tracked sans-serif no-underline mv2">Zur Slideshow</a>
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