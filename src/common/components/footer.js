import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import {
  FaXing,
  FaTwitter
} from 'react-icons/fa';
import 'tachyons';
import SimpleLink from './simpleLink';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            xing
            twitter
          }
        }
      } 
    `}
    render={data => (
      <footer className="pa2 bg-dark-gray near-white pv5">
        <div className="flex flex-wrap justify-around w-100 mw9 center mb5">
          <div className="w-100 mw5 mb4">
            <span className="display f2">{data.site.siteMetadata.siteTitle}</span>
            <hr />
            <div className="w-100 flex justify-around items-center pv2">
              <SimpleLink className="near-white" href={data.site.siteMetadata.xing} external><FaXing /></SimpleLink>
              <SimpleLink className="near-white" href={data.site.siteMetadata.twitter} external><FaTwitter /></SimpleLink>
            </div>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">Artikel von {data.site.siteMetadata.siteTitle}</span>
            <Link to="/blog" className="near-white sans-serif f5 tracked pv1 db">ALLE ARTIKEL</Link>
            <Link to="/rss.xml" className="near-white sans-serif f5 tracked pv1 db">RSS FEED</Link>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">MORE ON {data.site.siteMetadata.siteTitle}</span>
            <Link to="/about" className="near-white sans-serif f5 tracked pv1 db">ABOUT US</Link>
          </div>
        </div>
        <div className="w-100 mw9 center silver mb3">
          <div className="w-100 bb b--mid-gray mv3"></div>
          <div className="flex w-100 mw6 items-center justify-center justify-start-ns">
            <Link to="/impressum" className="silver sans-serif f5 tracked pv1 db mh1">IMPRESSUM</Link>
            <span className="mh1">|</span>
            <Link to="/datenschutz" className="silver sans-serif f5 tracked pv1 db mh1">DATENSCHUTZ</Link>
          </div>
        </div>
      </footer>
    )} />
)
