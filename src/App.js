import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="page">
      <Header logoSrc="/icons_assets/logo.svg" logoAlt="Little Lemon logo" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
