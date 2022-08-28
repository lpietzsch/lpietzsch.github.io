import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import 'tachyons';
import '../styles/custom.tachyons.css';


export default ({ children, withFooter = true, withNavbar = true }) => (
  <React.Fragment>
    <Helmet>
      <body className="bg-near-white mid-gray-darker" />
    </Helmet>
    { withNavbar ? <Navbar /> : null }
    {children}
    { withFooter ? <Footer /> : null }
  </React.Fragment>
)
