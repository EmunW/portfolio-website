import { DarkMode } from "./DarkMode";
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleMenu = () => {
    if (isNavOpen) setIsNavOpen(false);
    else setIsNavOpen(true);
  };

  return (
    <header className="bg-teal-400 text-white sticky top-0 z-10 dark:bg-white dark:text-black">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#header">Edmund Wong</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#about" className="link hover:opacity-90">
              About Me
            </a>
            <a href="#projects" className="link hover:opacity-90">
              Projects
            </a>
            <a href="#contact" className="link hover:opacity-90">
              Contact
            </a>
            <a
              href="https://github.com/EmunW"
              className="link hover:opacity-90"
            >
              GitHub
            </a>
            <DarkMode></DarkMode>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={
          isNavOpen
            ? "absolute top-0 bg-teal-400 dark:bg-white w-full text-3xl flex flex-col justify-content-center origin-right animate-open-menu"
            : "absolute top-0 bg-teal-400 dark:bg-white w-full text-3xl justify-content-center origin-right animate-open-menu hidden"
        }
      >
        <button
          className="text-6xl self-end px-6 py-1 bg-teal-400 dark:bg-white dark:text-black"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <nav className="bg-slate-50 dark:bg-gray-900 text-black dark:text-white flex flex-col min-h-screen items-center py-4">
          <a
            href="#header"
            className="w-full text-center py-4 hover:opacity-90"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="w-full text-center py-4 hover:opacity-90"
            onClick={toggleMenu}
          >
            About Me
          </a>
          <a
            href="#projects"
            className="w-full text-center py-4 hover:opacity-90"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="w-full text-center py-4 hover:opacity-90"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <a
            href="https://github.com/EmunW"
            className="w-full text-center py-4 hover:opacity-90"
            onClick={toggleMenu}
          >
            GitHub
          </a>
          <div className="py-4">
            <DarkMode></DarkMode>
          </div>
        </nav>
      </section>
    </header>
  );
}
