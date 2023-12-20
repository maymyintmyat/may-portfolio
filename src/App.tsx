import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Intro from "./components/Intro";
import MyProjects from "./components/MyProjects";
import Tools from "./components/Tools";

function App() {
  return (
    <>
      <div>
        <div>
          <Intro />
          <AboutMe />
          <Tools />
          <MyProjects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
