import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <main class="max-w-4xl mx-auto mt-6">
        <section
          id="about"
          className="flex flex-col-reverse justify-center sm:flex-row px-6 items-center gap-8 mb-12"
        >
          <article class="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              Hi I'm Edmund
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              I am a software engineer.
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              Here is my stuff.
            </p>
          </article>
          <img
            className="w-1/3 dark:hidden"
            src="./photos/EWLogo.png"
            alt="My photo"
          ></img>
          <img
            className="w-1/3 hidden dark:block"
            src="./photos/EWLogoWhite.png"
            alt="My photo"
          ></img>
        </section>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
