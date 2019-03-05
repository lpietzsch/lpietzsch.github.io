import React from 'react';
import { Link } from 'gatsby';
import "tachyons";


export default props => (
  <div className="bg-light-blue ph2 pv5 flex flex-column justify-center items-center">
    <Link to={`/${props.category}`} className="sans-serif ttu dark-gray tracked f5">{props.category}</Link>
    <h1 className="near-black display fw4 f1-l f2 tc">{props.title}</h1>
    <span className="sans-serif tracked ttu f5 mb2">von {props.author}</span>
    <span className="sans-serif tracked ttu f5">{props.date}</span>
  </div>
)
