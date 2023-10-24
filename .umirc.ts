import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/comProperty", component: "comProperty" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "npm",
});
