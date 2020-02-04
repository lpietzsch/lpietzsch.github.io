import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

const capitalizeFirstLetter = (inputString) =>  inputString.charAt(0).toUpperCase() + inputString.slice(1)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }  
    `}
    render={data => (
      <Helmet>
        <title>{capitalizeFirstLetter(props.title) + " - " + data.site.siteMetadata.title}</title>
        <meta name="description" content={props.description} />
      </Helmet>
    )} />
)
