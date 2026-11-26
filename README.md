# 📺 VidStream
### A Modern, Responsive YouTube Clone in React + Vite

> ⚠️ **DISCLAIMER:** This is a **personal learning and portfolio project**. It is a UI/UX-focused YouTube clone built with React, Vite, Tailwind-inspired CSS, and the official YouTube Data API v3 for educational and demonstration purposes. It is **NOT** affiliated with YouTube, Google, or Alphabet. All video content is fetched live from the public YouTube Data API and remains the property of its respective creators.

A sleek, fully responsive YouTube clone featuring a glassmorphism navbar, an animated collapsible sidebar, a 4-column video grid, a full video player with recommended videos, and a dark cinematic theme. Built with React 18, Framer Motion animations, Material-UI icons, and real YouTube API integration — with proper `.env`-based API key protection.

![Version](https://img.shields.io/badge/Version-1.0.0-FF0033)
![Status](https://img.shields.io/badge/Status-Portfolio%20Project-F4B400)
![Responsive](https://img.shields.io/badge/Responsive-Desktop%20%26%20Mobile-2D6A4F)
![React](https://img.shields.io/badge/React-18-61DAFB)

---

## 🔗 Links

- **Live Demo:** [vidstream-youtube-clone.netlify.app](https://vidstream-youtube-clone.netlify.app)
- **Source Code:** [github.com/Ashish22Gupta/YoutubeClone](https://github.com/Ashish22Gupta/YoutubeClone)

---

## ✨ Implemented Features

### 🎬 Video Browsing
- **Trending Feed** — Auto-fetches "most popular" videos in the US region via `videos?chart=mostPopular&regionCode=US`.
- **Responsive Video Grid** — Automatically adapts from 4 columns (≥1200px) → 3 → 2 → 1 column for mobile.
- **Staggered Card Animations** — Each video card fades + rises with a 0.05s incremental delay via Framer Motion.
- **Hover Overlay** — A dark overlay with a play icon appears on thumbnail hover, plus a 5% thumbnail scale effect.
- **Channel Avatar + Meta** — Each card displays the channel avatar, title (2-line clamp), channel name, views, and relative timestamp.

### 🔍 Search
- **Pill-Shaped Search Bar** — Glassmorphism input with blurred backdrop and accent-colored focus ring.
- **Focus Expansion** — `.navbar-center.focused` widens the search area by 20% when the input is focused.
- **Search on Submit** — Submits via Enter or the search icon button, updating the video list and navigating back to `/`.
- **Auto-Clear After Search** — The input resets after submission for a clean slate.

### 🧭 Navbar & Sidebar
- **Glassmorphism Navbar** — Semi-transparent black with `backdrop-filter: blur(20px)`.
- **Animated Logo** — The ▶ icon pulses between `#ff0033` and `#ff0066` colors on an infinite 3-second loop.
- **Responsive Logo Text** — `Tube.` shrinks and the wordmark hides below 768px, leaving only the icon.
- **Hamburger Icon** — Rotates 90° on hover via `whileHover` and scales on tap.
- **Four Action Icons** — Create, Apps, Notifications, and Profile buttons that stagger-fade in on load.
- **Right-side Icon Hiding** — The first two icon buttons (Create, Apps) hide below 768px to preserve space.

### 📂 Collapsible Sidebar
- **Animated Slide-in** — The sidebar springs in from `x: -300` to `x: 0` using Framer Motion.
- **Animated Backdrop** — A dark blurred overlay fades in behind the sidebar on mobile.
- **Content Blur Effect** — When the sidebar is open, the main content gets `filter: blur(8px)` and `pointer-events: none` — a cinematic focus effect.
- **9 Navigation Items** — Home, Trending, Explore, Subscriptions, Library, History, Music, Movies, and Gaming.
- **Category via Query Param** — Clicking a sidebar item fires a category-specific YouTube search query.
- **Floating Active Indicator** — The selected menu item shows a red dot that animates between items via `layoutId`.

### ▶️ Video Player
- **Full-Height Embed** — Uses YouTube's iframe embed API with `autoplay=1` and full `allow` permissions.
- **Aspect-Ratio Wrapper** — The 56.25% padding-bottom trick guarantees a perfect 16:9 video container.
- **Video Metadata Card** — Displays the title, channel avatar, channel name, and views (formatted with `toLocaleString`).
- **Subscribe Button** — Animated gradient button with hover scale and accent shadow.
- **Recommended Videos** — Fetches 10 related videos via `search?relatedToVideoId=...` and displays them in a sidebar (right column on desktop, grid below on tablet/mobile).
- **Loading & Error States** — Animated spinner while loading; a friendly emoji error screen with a "Go Home" retry button.

### 🎨 Visual Design
- **Dark Mode Theme** — Full palette of `--bg-primary: #0a0a0a`, `--bg-secondary: #121212`, `--bg-card: #1a1a1a`.
- **Accent Red** — `#ff0033` used for the logo, active sidebar items, scrollbar, and buttons.
- **Custom Scrollbar** — 6px-wide accent red thumb with hover transition.
- **Glass Utility Class** — Reusable `.glass` class across navbar and sidebar with `backdrop-filter: blur(20px)`.
- **Three Reusable Animations** — `@keyframes float`, `@keyframes pulse`, `@keyframes spin`.

### 📱 Fully Responsive Design
- **Desktop (≥1200px):** 4-column video grid, 280px sidebar.
- **Desktop (992–1199px):** 3-column grid.
- **Tablet (600–991px):** 2-column grid.
- **Mobile (<600px):** Single column, full-width sidebar drawer.
- **Ultra-small (<380px):** Tighter padding and gaps.
- **Dynamic CSS Variables** — Navbar height adjusts `72px → 64px → 56px` across breakpoints.

### 🔒 Secure API Key Handling
- **`.env`-Based Key** — Uses `import.meta.env.VITE_YOUTUBE_API_KEY` from Vite's environment system.
- **Git-Safe** — The key never hardcoded in source; add `.env` to `.gitignore`.
- **Quota Protection** — The README includes a full step-by-step guide for creating a restricted API key (HTTP referrers + YouTube-only API restriction).

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | React 18, React Router DOM 7 |
| **Build Tool** | Vite (fast HMR + native ESM) |
| **Styling** | CSS Modules + custom design tokens, glassmorphism |
| **Animation** | Framer Motion |
| **Icons** | Material-UI Icons (`@mui/icons-material`) |
| **HTTP Client** | Axios |
| **API** | YouTube Data API v3 |
| **Environment** | Vite `.env` with `VITE_` prefix |
| **Hosting** | Netlify |

---

## 📁 Project Structure

```text
YoutubeClone/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + Navbar.css
│   │   ├── Sidebar.jsx + Sidebar.css
│   │   ├── VideoCard.jsx + VideoCard.css
│   │   └── Videos.jsx + Videos.css
│   │
│   ├── pages/
│   │   ├── Home.jsx + Home.css
│   │   └── VideoPlayer.jsx + VideoPlayer.css
│   │
│   ├── hooks/
│   │   └── useFetch.js                 # Axios-based YouTube data fetcher
│   │
│   ├── utils/
│   │   ├── constants.js                # Mock videos for offline demo
│   │   └── helpers.js                  # getCurrentYear and other utilities
│   │
│   ├── App.jsx                         # React Router setup
│   ├── main.jsx                        # Entry + BrowserRouter
│   └── index.css                       # Global tokens + glass utility + animations
│
├── .env.example                        # Template for VITE_YOUTUBE_API_KEY
├── .gitignore                          # Must include .env
├── index.html
├── package.json
└── vite.config.js
