import InteractiveBackground from "./components/InteractiveBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <InteractiveBackground />
      <Navbar />

      <Hero />
      <Work />
      <About />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;