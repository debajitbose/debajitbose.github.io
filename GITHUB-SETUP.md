# 🚀 Putting Your Website Online with GitHub Pages — Step by Step

This guide assumes you know **nothing** about GitHub. Follow it top to bottom.
Total time: about 15 minutes. Total cost: **₹0 — completely free, forever.**
(GitHub Pages is free for public repositories. You will never be asked for a
card or payment for any step below.)

Your website address will be: **https://debajitbose.github.io**

---

## Step 0 — What you have

You downloaded a ZIP file from Claude. Unzip it. Inside you'll find these files:

| File | What it is |
|---|---|
| `index.html` | Your home page |
| `publications.html` | Publications page (Virgo) |
| `talks.html` | Talks page (Scorpius) |
| `proceedings.html` | Proceedings page (Taurus) |
| `awards.html` | Awards page (Sagittarius) |
| `style.css` | Design (colours, fonts) |
| `sky.js` | The constellation animations |
| `HOW-TO-EDIT.md` | Editing guide for later |
| `GITHUB-SETUP.md` | This file |

---

## Step 1 — Log in to GitHub

You already have an account: **github.com/debajitbose**.
Go to https://github.com and sign in.
(If you actually don't have the account yet: click **Sign up**, use your email,
choose username `debajitbose`, and pick the **Free** plan when asked.)

## Step 2 — Create the special repository

A "repository" (repo) is just a folder that GitHub stores for you.
For a personal website, the repo must have one **exact magic name**.

1. Click the **+** icon in the top-right corner → **New repository**.
2. In **Repository name**, type exactly:

   ```
   debajitbose.github.io
   ```

   (your username + `.github.io` — this exact name is what makes it a website)
3. Keep it set to **Public** (required for the free website).
4. Tick the checkbox **"Add a README file"**.
5. Click the green **Create repository** button.

## Step 3 — Upload your website files

You are now looking at your new (almost empty) repository.

1. Click the **Add file** button (near the green Code button) → **Upload files**.
2. Open the unzipped folder on your computer, select **ALL the files**
   (Ctrl+A / Cmd+A), and drag them into the browser window.
   You should see all 9 files listed.
3. Scroll down and click the green **Commit changes** button.
   ("Commit" just means "save".)

## Step 4 — Switch on the website

1. In your repository, click **Settings** (the tab with a gear ⚙, top of the page).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** → **Source**, make sure it says
   **Deploy from a branch**.
4. Under **Branch**, choose **main** and folder **/ (root)**, then click **Save**.
   (Often GitHub does this automatically for a repo with this name — if it
   already shows "Your site is live", you're done.)

## Step 5 — Visit your website! 🎉

Wait 1–3 minutes, then open:

**https://debajitbose.github.io**

Scroll down slowly and watch Orion assemble itself.
If you see a 404 error, wait two more minutes and refresh — the very first
build can be slow.

## Step 6 — Upload your CV (optional, recommended)

The "CV (PDF)" button on your homepage looks for a file called `cv.pdf`.

1. Rename your CV file on your computer to exactly: `cv.pdf`
2. In your repository: **Add file → Upload files** → drag `cv.pdf` in → **Commit changes**.

Done — the button now works. To update your CV later, just upload a new
`cv.pdf` the same way; it replaces the old one.

---

## Things that are good to know

- **It's free.** Public repos + GitHub Pages cost nothing. There is no step
  where payment appears.
- **Your content is YOURS.** Putting it on GitHub does not transfer copyright —
  GitHub only gets permission to host and display it. That's why the footer
  says "© Debajit Bose" and that is legally correct.
- **Every change is saved with history.** If you ever break something while
  editing, the old version is always recoverable.
- **Updates take ~1 minute.** After you edit or upload anything, the live site
  refreshes itself within about a minute.

## If something goes wrong

| Problem | Fix |
|---|---|
| 404 page at debajitbose.github.io | Wait 2–3 min; check repo name is exactly `debajitbose.github.io`; check Settings → Pages shows "Your site is live". |
| Site loads but looks plain / broken | `style.css` or `sky.js` probably didn't upload, or files are inside a sub-folder. All files must sit at the TOP level of the repo (you should see index.html directly on the repo's front page). |
| Constellation doesn't move | The animation pauses if your device has "Reduce motion" enabled — that's intentional (accessibility). |
| CV button gives 404 | The file must be named exactly `cv.pdf` (lowercase) and sit at the top level. |

When you're ready to edit content (add a talk, a paper, a new section),
open **HOW-TO-EDIT.md** — or just come back and ask Claude.
