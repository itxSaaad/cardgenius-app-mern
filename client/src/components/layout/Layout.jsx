import PropTypes from 'prop-types';

import Footer from './Footer';
import MainNavbar from './MainNavbar';

function Layout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
