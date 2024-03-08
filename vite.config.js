import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  //root: "src" is just to tell vite that the "index.html" file is in "src"
  //basically it goes into the "src" directory, it finds the "index.html" file, it finds the script with ""./App.jsx"
  root: "src",
});
