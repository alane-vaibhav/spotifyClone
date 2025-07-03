import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tailwindcssVite from "@tailwindcss/vite";

export default defineConfig({
  //plugins: [tailwindcss()],
  plugins: [tailwindcssVite()],
});
