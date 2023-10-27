import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //  server: {
  //    open: true,
  //    //https: true,
  //  },
  //  build: {
  //    outDir: "dist",
  //    sourcemap: true,
  //  },
  base: "/basketballFE/",

  //  test: {
  //    globals: true,
  //    environment: "jsdom",
  //    setupFiles: "src/setupTests",
  //    mockReset: true,
  //  },
})
