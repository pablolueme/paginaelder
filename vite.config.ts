import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolveBasePath = (): string => {
  if (!process.env.GITHUB_ACTIONS || !process.env.GITHUB_REPOSITORY) {
    return "/";
  }

  const [, repoName] = process.env.GITHUB_REPOSITORY.split("/");
  const owner = process.env.GITHUB_REPOSITORY_OWNER;

  if (!repoName || !owner) {
    return "/";
  }

  // User/organization pages repository uses root path.
  if (repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
    return "/";
  }

  // Project pages repository needs /<repo>/ base path.
  return `/${repoName}/`;
};

export default defineConfig({
  base: resolveBasePath(),
  plugins: [react()]
});
