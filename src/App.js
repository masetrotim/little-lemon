import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
  <>
<Header logoSrc="/icons_assets/logo.svg" logoAlt="Little Lemon logo" />
  <Nav />
  <Main />
  <Footer />
  </>
  );
}

export default App;
