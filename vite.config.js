import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.SECURITY_ID": JSON.stringify(env.SERVICE_ID),
      "process.env.TEMPLATE_ID": JSON.stringify(env.TEMPLATE_ID),
      "process.env.PUBLIC_KEY": JSON.stringify(env.PUBLIC_KEY),
    },
    plugins: [react()],
    //root: "src" is just to tell vite that the "index.html" file is in "src"
    //basically it goes into the "src" directory, it finds the "index.html" file, it finds the script with ""./App.jsx"
    root: "src",
  };
});
