import { useState } from "react";
import { DarkMode } from "./DarkMode";

export default function Header() {
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10 dark:bg-white dark:text-black">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#header">Edmund Wong</a>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-3xl sm:hidden focus:outline-none"
          >
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
            <a href="#about" className="link hover:opacity-90">
              About Me
            </a>
            <a href="#projects" className="link hover:opacity-90">
              Projects
            </a>
            <a href="#contact" className="link hover:opacity-90">
              Contact
            </a>
            <DarkMode></DarkMode>
          </nav>
        </div>
      </section>
    </header>
  );
}
