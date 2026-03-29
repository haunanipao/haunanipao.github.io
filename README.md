# Haunani Pao 🦄 Portfolio

**A High-Fidelity Digital Universe** A professional single-page portfolio built with a "Vibe Coding" approach—prioritising fluid animations, accessible design, topline content set with a Deep-Space aesthetic.

**Live Site:** [haunanipao.github.io](https://haunanipao.github.io/)

---

## 🌌 Overview & Philosophy

This project is a complete architectural refactor of my professional identity. It represents the intersection of my background in UX/Product Design and my journey into Web3 and modern frontend development.

### My "Vibe Coding" Process
This wasn't just a solo build; it was an experiment in **AI-Augmented Creativity**. I led the strategy and visual direction while collaborating with multiple LLMs to solve technical hurdles:

* **Ideation:** Used **Claude**, **Replit**, and **Figma Make** to generate three distinct visual directions based on my career infographic.
* **Sense-Checking:** Leveraged **ChatGPT** to audit the output for logical flow and user experience.
* **Refactoring & Launch:** Partnered with **Gemini** to modularise a monolithic codebase into a professional React architecture, troubleshooting complex state logic and environment configurations.
* **Design:** Settled on a "Night Sky of Aotearoa" theme after a day of colour exploration on **Pinterest** and **Figma**. It felt like home to me.

### Insights & Growth
When I first learned to code at **Dev Academy Aotearoa**, I relied on templates to learn the basics and growth. This project was different. While I used LLMs as collaborators and reference for syntax and troubleshooting, I remained the "Lead Architect." It was a lesson in knowing exactly what I wanted, but using a friendly tool to help me get there—a process that feels incredibly empowering and satisfying.

As a maker, using tools for ideation seems normal.  Using them to help me problem solve when I fail to remember the syntax or can't find a bit of code on a websites, is "chef's kiss".  

I manage to get this done in about a week, however, now that I know more, have a bit more confidence, I will try again and see what happens next.

The type of subscription can impact progress.  I learned the duration of free tokens LLM in real time. I made decisions quicker to suit my time and move on in the process, especially when I ran out of time. It simply would cost too much to pay those subscriptions as an individual. I know folks that have one or two subscriptions from their workplace, I say use them effectively and try something out.  However, I reached my goal with the "free" subs and I can live with that. 😉

---

## 🛠 Tech Stack

* **React 18.3** – Component-based architecture
* **TypeScript** – Robust type safety
* **Tailwind CSS v4** – Modern, utility-first styling
* **Framer Motion** – Fluid, physics-based animations
* **Vite** – Lightning-fast build tool
* **Lucide React** – Clean, consistent iconography
* **Vercel** – Automated CI/CD deployment

---

## 🎨 Design Decisions

### Colour Scheme: The Night Sky of Aotearoa
* **Primary:** `#DC7FE0` (Rich Plum Purple)
* **Secondary:** `#CFC6FF` (Soft Pink)
* **Text:** High-contrast variants of Light Blue and Pink for maximum readability.
* **Atmosphere:** Deep Space purples and blues, featuring dynamic galaxy orbs and twinkling starfields.

### The Narrative (Sections)
1. **Hero** – Who am I and how do I describe myself; clear call-to-action.
2. **Capabilities** – A data-driven snapshot of 100+ projects and 20+ industries.
3. **Work & Growth** – Stories of Web3 exploration and technical deep-dives linked to Medium.
4. **Design Principles** – My core values: methodology, mentorship, and user-centricity.
5. **Community** – Contributions to UX Auckland and ADPList.
6. **Contact** – Frictionless access to Calendly, LinkedIn, and GitHub.

---

## 🚀 Development & Deployment

### File Structure
```text
portfolio-hpao/
├── node_modules/       (Ignored by git)
├── public/             (Favicon and static assets)
│   └── favicon.svg
├── src/
│   ├── components/     (Reusable UI pieces)
│   │   ├── Background.tsx
│   │   ├── Navigation.tsx
│   │   └── Logo.tsx
│   ├── data/           (The "Brain")
│   │   └── portfolioData.tsx
│   ├── sections/       (The "Rooms" of your house)
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Work.tsx
│   │   ├── DesignPrinciples.tsx
│   │   ├── Community.tsx
│   │   └── Contact.tsx
│   ├── styles/         (Animations and global CSS)
│   │   └── animations.ts
│   ├── App.tsx         (The Control Center)
│   └── main.tsx        (The Entry Point)
├── .gitignore          (Crucial for GitHub!)
├── index.html          (The Skeleton)
├── package.json        (The List of Tech Ingredients)
└── vite.config.ts      (The Instructions)


## License

© 2026 Haunani Pao. All rights reserved. hello@uxauckland.com
