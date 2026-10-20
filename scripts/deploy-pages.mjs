/**
 * Publish the production build to the `gh-pages` branch, which GitHub Pages
 * serves at https://njabulodark.github.io/mathubesizwe-high/
 *
 * Usage: npm run deploy
 */
import { execFileSync } from "node:child_process";
import { cpSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = process.cwd();
const remote = process.env.PAGES_REMOTE || "origin";
const branch = "gh-pages";

const git = (args, cwd) =>
  execFileSync("git", args, { cwd, stdio: "inherit" });

const remoteUrl = execFileSync("git", ["remote", "get-url", remote], {
  cwd: root,
})
  .toString()
  .trim();

const workDir = mkdtempSync(join(tmpdir(), "mathubesizwe-pages-"));
const siteDir = join(workDir, "site");

try {
  cpSync(resolve(root, "dist"), siteDir, { recursive: true });

  git(["init", "-b", branch], siteDir);
  git(["add", "-A"], siteDir);
  git(
    [
      "-c",
      "user.name=github-pages",
      "-c",
      "user.email=github-pages@users.noreply.github.com",
      "commit",
      "-m",
      "Deploy to GitHub Pages",
    ],
    siteDir,
  );
  git(["remote", "add", remote, remoteUrl], siteDir);
  git(["push", "--force", remote, `HEAD:${branch}`], siteDir);
} finally {
  rmSync(workDir, { recursive: true, force: true });
}
