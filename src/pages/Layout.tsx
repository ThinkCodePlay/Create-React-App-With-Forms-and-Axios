import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Content />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
