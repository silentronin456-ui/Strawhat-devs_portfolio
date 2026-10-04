# VayuTwin — UAV Digital Twin Platform

> **StrawHat Devs** | SIH Project

Real-time predictive stress modeling and visualization platform for DRDO next-generation UAVs. Built on a live Digital Twin that maps telemetry data to a high-fidelity 3D model, enabling commanders to visualize structural stress points and predict maintenance needs before failure occurs.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Interface | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 13 |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| Routing | React Router v7 |

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploying to Vercel

This project is configured for **zero-config Vercel deployment**.

1. Push this repo to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — hit **Deploy**

The `vercel.json` file handles SPA routing so all routes resolve correctly.

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Impact.jsx
│   ├── TechStack.jsx
│   ├── Roadmap.jsx
│   ├── Team.jsx
│   ├── Contact.jsx
│   ├── Docs.jsx
│   └── CustomCursor.jsx
├── pages/            # Route-level page wrappers
│   ├── MainScrollPage.jsx
│   ├── ImpactPage.jsx
│   ├── TechPage.jsx
│   ├── RoadmapPage.jsx
│   ├── TeamPage.jsx
│   ├── ContactPage.jsx
│   └── DocsPage.jsx
├── App.jsx           # Root component + routing
├── main.jsx          # Entry point
└── index.css         # Global styles + Tailwind
```

---

## 👥 Team — StrawHat Devs

| Operative | Primary Role | Specialties | Links |
|---|---|---|---|
| **Aditya Parab** | Head & Team Lead | System Architect, Developer Lead, UI/UX & 3D Designer | — |
| **Krishav Maurya** | Research Lead & Developer | Presentation Lead, Systems Research | [GitHub](https://github.com/krishav01-stack) • [LinkedIn](https://www.linkedin.com/in/krishav-maurya-1b25283ba/) |
| **Atharva Manoj Jaiswal** | Assis. Research & Developer | Simulation Engine, Backend Support | [GitHub](https://github.com/xyzabc-crypto) • [LinkedIn](https://www.linkedin.com/in/atharva-jaiswal-28104b434) |
| **Gehana Manwani** | Lead Designer | Documentation Head, Design Systems | [GitHub](https://github.com/GehanaManwani) • [LinkedIn](https://www.linkedin.com/in/gehana-manwani-a40066417) |
| **Atharva Gaikwad** | Tester | Quality Assurance, Telemetry Verification | [GitHub](https://github.com/attu1409py) • [LinkedIn](https://www.linkedin.com/in/atharva-gaikwad-962330389) |
| **Bhupesh Patil** | Assis. Designer & Support Developer | Support Developer, Asset Pipeline | [GitHub](https://github.com/Bhupesh-tech143) • [LinkedIn](https://www.linkedin.com/in/bhupesh-patil-0aa64b376) |

---

## 📄 License

Private — StrawHat Devs. All rights reserved.
