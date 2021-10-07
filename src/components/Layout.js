import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <div className="flex m-5 content">
        <Navbar className=""></Navbar>
        <div className="w-full pl-5">{children}</div>
        <div></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
