import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            homepageHeader
            homepageAbout
          }
        }
      }  
    `}
    render={(data) => (
      <div className="bg-light-blue flex flex-column justify-center items-center pa2 pv5">
        <h1 className="fw1 display db near-black f2 tc">{data.site.siteMetadata.homepageHeader}</h1>
        <p className="f4 serif mw7 tc lh-copy">{data.site.siteMetadata.homepageAbout}</p>
        <Link to="/about" className="mt3 db no-underline ph5 pv3 sans-serif near-white bg-near-black ttu tracked b hover-bg-mid-gray">Über mich</Link>
      </div>
    )} />
)
