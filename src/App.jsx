import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Summary from "./components/Summary";
function App() {
  return (
    <>
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <About />
      <Summary />
      <Skills />
      <Stats />
      <Project />
      <Footer />
    </>
  );
}

export default App;
