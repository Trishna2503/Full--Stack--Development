import Profile from "./components/Profile";
import PersonalDetails from "./components/PersonalDetails";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="page">

      <div className="portfolio-card">

        <Profile />

        <hr />

        <PersonalDetails />

        <About />

        <Skills />

        <Contact />

      </div>

    </div>
  );
}

export default App;