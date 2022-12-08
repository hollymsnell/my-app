import "./App.css";
import About from "./components/About";
import Details from "./components/Details";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Details />
      <About />
      <Footer />
    </div>
  );
}

export default App;
