import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Intro from "./Intro";
import Contact from "./Contact";
import TechStack from "./TechStack";
import Projects from "./Projects";

const App = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-slate-50 dark:bg-black dark:text-white"
        id="about"
      >
        <Header />
        <Intro />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
