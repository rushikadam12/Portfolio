Stitch (Google's AI UI design tool) works best when you set the design system first, then generate one screen per prompt. Use them in this order. Replace the `[PLACEHOLDERS]` with your details.

One note: Stitch produces static screens, not real animations. Prompt 4 makes it design the hover/active states, and you then paste the same spec into your Astro build prompt so the code gets the real motion.

---

## 1. Design system (run this first)

```
Create a design system for a developer portfolio website with two themes 
that share one brand.

Brand feel: modern, confident, minimal, with personality. Not corporate, not 
playful. Think "senior engineer with good taste".

Typography:
- Headings and body: Inter (or Geist)
- Code and Engineer theme labels: JetBrains Mono

PROFESSIONAL theme (light, warm, clean):
- Background #FAFAF9, surface/cards #FFFFFF, border #E7E5E4
- Text #1C1917, muted text #78716C
- Primary accent #4F46E5 (indigo), accent hover #4338CA
- Soft accent tint #EEF2FF for tags and highlights

ENGINEER theme (dark, code-editor):
- Background #0B0F14, surface #121820, border #1F2937
- Text #E6EDF3, muted #8B949E
- Primary accent #3FB950 (terminal green)
- Syntax colors: keys #79C0FF, strings #FFA657, numbers #D2A8FF, 
  punctuation #8B949E

Shape and spacing:
- 8px spacing grid, card radius 16px (Professional) and 6px (Engineer, sharper)
- Soft shadows in Professional, 1px borders and no shadows in Engineer
- Max content width 1100px, generous whitespace

Accessibility: all text must meet WCAG AA contrast. Visible focus rings.

Include buttons (primary, secondary, ghost), tags, cards, nav bar, and a 
code block component for both themes.
```

**Why these colors:** indigo reads as trustworthy and professional on a light background, while green-on-near-black is instantly recognized as "terminal/editor." Keeping neutrals shared makes both views feel like one person.

---

## 2. Landing page: "How do you want to read my portfolio?"

```
Design the landing page of my portfolio, using the design system above.

Purpose: the visitor chooses how to read my portfolio.

Layout (desktop): full-screen split.
- Top center: small text logo "[YOUR NAME]" with a tiny nav toggle hint
- Hero text, centered: 
  Small label: "[YOUR NAME] · [YOUR ROLE]"
  Headline: "How do you want to read my portfolio?"
  Subtext (one real sentence about me): "[One sentence: what you build and 
  who for.]"
- Two large choice cards side by side:

  LEFT CARD (Professional theme, light, white card, indigo accent):
  - Icon: briefcase or user
  - Title: "Professional"
  - Line: "Meet the person behind the code."
  - Small bullets: Projects, Experience, Contact
  - Button: "Read the normal way →"
  - Marked as the recommended/default option with a small "Recommended" tag

  RIGHT CARD (Engineer theme, dark, terminal green accent):
  - Icon: terminal or braces
  - Title: "Engineer"
  - Show a few lines of JSON inside the card as a preview:
    { "role": "engineer", "stack": ["..."], "status": "open_to_work" }
  - Button: "cat portfolio.json →"

- Below the cards: tiny muted link "Not sure? Skip and view the 
  professional version"
- Footer: GitHub, LinkedIn, email icons

The page must feel like a bold first impression. Mobile version: cards stack 
vertically, Professional first.
```

---

## 3a. Professional view

```
Design the PROFESSIONAL portfolio page using the light theme.

Sections, top to bottom:
1. Sticky header: logo, links (Projects, Experience, About, Contact), and a 
   "View mode" toggle (Professional | Engineer) on the right.
2. Hero: large headline "[Role] who [what you do]", a short 2-line intro, 
   photo or avatar on the right, two buttons: "View projects" and 
   "Download resume".
3. Featured projects: 2-column grid of project cards. Each card has a cover 
   image, title, one-line description, tag chips, and "View project →".
4. Experience: clean vertical timeline with company, role, dates, and 
   2 bullets each.
5. Skills: grouped chips (Frontend, Backend, Tools).
6. About: short friendly paragraph with a second image.
7. Contact: large call-to-action section "Let's work together", email button, 
   social links.
8. Footer.

Tone: warm, trustworthy, easy to scan for a non-technical recruiter. 
Lots of whitespace, soft shadows, indigo used sparingly for actions only.
```

## 3b. Engineer view

```
Design the ENGINEER portfolio page using the dark code-editor theme. It must 
look completely different from the Professional page.

Concept: the whole page looks like a code editor (VS Code style).
- Top: window bar with three dots, tab named "portfolio.json", and a 
  "View mode" toggle to switch back to Professional.
- Left sidebar: file explorer with files: profile.json, projects/, 
  experience.json, skills.json, contact.json. Active file highlighted.
- Main area: syntax-highlighted JSON with line numbers showing my profile: 
  name, role, location, bio, skills array, socials with clickable links.
- Projects section shown as an array of JSON objects: title, description, 
  tags, links { live, github, docs }, each with a small "open →" link.
- Bottom status bar: "UTF-8 · JSON · Ln 1, Col 1 · open_to_work ●" in green.
- Add a small terminal panel at the bottom with a blinking cursor and the 
  prompt: "$ cat contact.json"

Use monospace everywhere, sharp 6px corners, 1px borders, no shadows. 
Keys cyan, strings orange, numbers purple, green accent for status and links.
Dense but readable.
```

---

## 4. Animation and micro-interactions

```
Show the interaction states and motion design for my portfolio, for both 
themes. Create state variations and annotate the motion specs.

LANDING PAGE
- Choice cards: on hover, lift 6px with soft glow (indigo on Professional, 
  green on Engineer), arrow slides 4px right. Duration 200ms, ease-out.
- Engineer card: JSON preview types out line by line on page load, with a 
  blinking cursor.
- Headline fades up on load, cards stagger in 100ms apart.

PROFESSIONAL VIEW
- Project cards: image zooms 1.05x on hover, title underline slides in, 
  tags subtly brighten.
- Sections fade up as they scroll into view (once only).
- Buttons: slight press-down on click (scale 0.97).
- Header gets a soft shadow after scrolling.

ENGINEER VIEW
- Line numbers and the hovered line highlight like an editor.
- Clicking a file in the sidebar switches content with a quick fade.
- Terminal cursor blinks; links show a green underline on hover.
- Status dot pulses slowly.

GLOBAL
- View-mode toggle: smooth 300ms cross-fade between themes.
- All motion respects "prefers-reduced-motion" (disable or simplify).
- Keep every animation under 400ms, subtle and purposeful, never distracting.
```

---

## 5. Project detail page

```
Design the PROJECT DETAIL page for my portfolio (Professional theme, light). 
This opens when a visitor clicks a project card.

Layout:
1. Breadcrumb: "← Back to projects"
2. Header: project title, one-line description, tag chips, date, and action 
   buttons: "Live demo ↗" (primary), "GitHub" (secondary), "Docs" (ghost). 
   Buttons are hidden if the link doesn't exist.
3. Hero media: large cover image or embedded demo video player with 
   rounded corners.
4. Quick facts sidebar (sticky on desktop): Role, Timeline, Stack, Status.
5. Main content:
   - "What it does": 2-3 short paragraphs
   - "Key features": checklist or icon grid
   - "Screenshots": gallery grid, click to open lightbox
   - "How it's built": tech stack and a simple architecture note
   - "Challenges & what I learned"
   - "Mini README": styled code/markdown block with install and run steps
6. Bottom: "Next project →" card and "Back to all projects".

Also create the ENGINEER version of this page: same content shown as a JSON 
object with fields (name, description, stack, links, features, readme) in the 
dark code-editor style, with screenshots listed as file paths.

Make it scannable in under 30 seconds, but deep enough for someone who wants 
details.
```

---

## Tips for using these in Stitch

- **Run prompt 1 first**, then say "use the same design system" in every later prompt.
- Generate one screen per prompt, then refine with small follow-ups like "make the cards larger" or "reduce the green saturation."
- When you're happy with the screens, export the design (or copy the code/Figma) and give it to your Astro build prompt: "Implement these designs in the Astro project."

Want me to update the Astro setup prompt so it matches this design (routes, components, theme switching, and project page structure)?