import React from "react";

const SimpleLink = ({ href, external, children, ...otherProps }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    {...otherProps}
  >
    {children}
  </a>
);

export default SimpleLink;
