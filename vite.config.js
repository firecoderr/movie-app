import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "animate.css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
