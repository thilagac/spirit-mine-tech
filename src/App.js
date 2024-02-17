import "./App.css";
import About from "./component/About";
import Carousel from "./component/Carousel";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Services from "./component/Services";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Services />
      <About />
      <Contact />
    </>
  );
}

export default App;
