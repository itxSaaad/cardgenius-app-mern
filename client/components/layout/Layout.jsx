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

export default Layout;
