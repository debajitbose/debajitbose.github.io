# ✏️ How to Edit Your Website (No Coding Knowledge Needed)

Everything is edited directly in your web browser on GitHub. The pattern is
always the same:

1. Go to **github.com/debajitbose/debajitbose.github.io**
2. Click the file you want to change (e.g. `index.html`)
3. Click the **pencil icon** ✏️ (top right of the file view)
4. Make your change
5. Click the green **Commit changes** button
6. Wait ~1 minute → refresh your website

If you ever break something: every old version is saved. Click the file →
**History** → open an older version → copy it back. Nothing is ever lost.

---

## Which file is which?

| To change... | Edit this file |
|---|---|
| Home page (name, research interests, education, recent papers/talks, contact) | `index.html` |
| Full publication list | `publications.html` |
| Full talk list | `talks.html` |
| Proceedings | `proceedings.html` |
| Awards | `awards.html` |
| Colours / fonts | `style.css` (rarely needed) |
| Constellations | `sky.js` (rarely needed) |

Inside every file, big banners like
`<!-- ===== PUBLICATION LIST ===== -->` mark each section.
Text between `<!--` and `-->` is a comment — invisible on the website,
only there to help you.

---

## Recipe 1 — Add a new publication

Open `publications.html`, find the publication list, **copy one whole block**
from `<li>` to `</li>`, paste it ABOVE the others (newest on top), and edit:

```html
<li>
  <p class="pt">PAPER TITLE HERE</p>
  <p class="pa">A. Author, <em>D. Bose</em>, C. Author</p>
  <p class="pm"><a href="https://arxiv.org/abs/XXXX.XXXXX">arXiv:XXXX.XXXXX</a> <span class="tag">preprint</span></p>
</li>
```

- `<em>D. Bose</em>` underlines your name — keep that around your name.
- For a preprint keep `<span class="tag">preprint</span>`;
  once published, delete the tag and write the journal:
  `Phys. Rev. D 113, 055022 (2026) · <a href="...">arXiv:XXXX.XXXXX</a>`
- To also show it in "Recent" on the home page, paste the same block into
  `index.html` (section II) and remove the oldest one there (keep 3).

## Recipe 2 — Add a talk

Open `talks.html`, copy one `<li>...</li>` block:

```html
<li><p class="pt">TALK TITLE</p><p class="pm">Invited seminar · Institute, City · January 2027</p></li>
```

Same for the home page "Recent Talks" (keep 3 there).

## Recipe 3 — Add an award or education row

In `awards.html` or in the Education section of `index.html`, copy a row:

```html
<div class="row"><span class="yr">2026</span><p><b>Award name</b>, who gave it.</p></div>
```

## Recipe 4 — Fix your links (do this first!)

In `index.html`, find the line `<!-- ===== PROFILE LINKS`. Replace each `#`
with your real link, e.g.:

```html
<a href="https://arxiv.org/a/your_arxiv_id">arXiv</a>
<a href="https://scholar.google.com/citations?user=YOURID">Google Scholar</a>
```

Do the same for the social icons in the Contact section (LinkedIn, X, Bluesky).
To remove an icon you don't use, delete its whole `<a ...>...</a>` block.

## Recipe 5 — Update your CV

Upload a new file named exactly `cv.pdf` (Add file → Upload files → Commit).
It replaces the old one automatically.

## Recipe 6 — Add a whole NEW SECTION to the home page
(e.g. "Teaching")

1. Edit `index.html`. Copy an entire section, from `<section id="talks">`
   down to its `</section>`.
2. Paste it where you want it (sections appear top-to-bottom in page order).
3. Change the id (`id="teaching"`), the numeral (`IV.` → renumber the ones
   below), the heading text, and the entries.
4. Optionally add it to the menu: in the `<nav>` list, copy one
   `<li><a href="...">...</a></li>` line:
   `<li><a href="index.html#teaching">Teaching</a></li>`
   (Do this in ALL five html files so the menu matches everywhere.)

## Recipe 7 — Add a whole NEW PAGE
(e.g. a "Teaching" page with its own constellation)

1. On the repo front page: open `awards.html` → pencil ✏️ → select ALL the
   text → copy.
2. Go back → **Add file → Create new file** → name it `teaching.html` →
   paste → edit the title, heading, and list entries → Commit.
3. Pick its constellation: in the line
   `<body data-constellation="sagittarius">` choose one of:
   `orion`, `virgo`, `scorpius`, `taurus`, `sagittarius`.
   (Want a NEW constellation? Ask Claude — the recipe is to add one data
   block in `sky.js` with real star coordinates.)
4. Add it to the `<nav>` menu in all html files:
   `<li><a href="teaching.html">Teaching</a></li>`

## Recipe 8 — Change the accent colour

In `style.css`, at the very top, change `--gold` and `--gold-bright`
to any colours you like (search "hex color picker" to choose values).

---

**Stuck?** Open a chat with Claude, paste the file's contents (or describe the
change), and ask. Editing is always: pencil ✏️ → change → Commit.
