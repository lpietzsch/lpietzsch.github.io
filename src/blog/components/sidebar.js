import React from 'react';
import {
  FaXing,
  FaLinkedin,
  FaFacebookF
} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'
import { StaticQuery, graphql } from 'gatsby';
import 'tachyons';


export default (props) => {
  let { desc, img, location } = props;
  location = encodeURIComponent(location.pathname);
  desc = encodeURIComponent(desc);
  img = encodeURIComponent(img);
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }  
      `}
      render={data => {
        const base = encodeURIComponent(data.site.siteMetadata.siteUrl);
        return (
        <div className="dn db-l" style={{gridArea: "sidebar"}}>
          <div className="w3 bg-dark-gray flex flex-wrap" style={{position: "sticky", top: "4rem"}}>
            {/* <a
              href={`https://pinterest.com/pin/create/button/?url=${base + location}&description=${desc}&media=${base + img}`}
              className="w-100 h3 flex items-center justify-center b near-white"><FaPinterestP /></a> */}

            <a
              href={`https://www.xing.com/spi/shares/new?url=${base + location}`}
              target='_blank'
              rel='noopener noreferrer'
              className="w-100 h3 flex items-center justify-center b near-white"><FaXing /></a>
            <a
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${base + location}`}
              target='_blank'
              rel='noopener noreferrer'
              className="w-100 h3 flex items-center justify-center b near-white"><FaLinkedin /></a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${base + location}`}
              target='_blank'
              rel='noopener noreferrer'
              className="w-100 h3 flex items-center justify-center b near-white"><FaFacebookF /></a>
            <a
              href={`mailto:?&body=${base + location}`}
              className="w-100 h3 flex items-center justify-center b near-white"><FiMail /></a>
          </div>
        </div>
    )}} />
  )
}
