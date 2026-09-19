# 🎓 PDM Tablet Kiosk Portal — 4-Volunteer Git Relay Activity

> **Classroom Demo Teaching Activity**  
> **Course:** IT31A — Systems Integration & Architecture  
> **Topic:** Version Control Systems (Git & GitHub Collaboration)  
> **Mission:** Build and deploy the Pambayang Dalubhasaan ng Marilao (PDM) Student Self-Service Kiosk Login feature as a 4-person Git relay team.  
> **GitHub Repo:** [https://github.com/butterkookies/volunteer-milestones.git](https://github.com/butterkookies/volunteer-milestones.git)

---

## 🌐 Live Vercel Architecture

This project is configured with a two-branch workflow for live classroom demonstration:

1. **`main` Branch (Baseline / Unstyled Wireframe)**:
   - Extremely plain, boring, raw HTML layout (default serif font, black text on white background, missing logo box, raw browser inputs, inactive button).
   - This is what is initially deployed to Vercel so the students see the "Before" state.
2. **`demo` Branch (Completed / Polished Application)**:
   - Full collegiate blue gradient theme (`theme.css`), official PDM crest (`pdm.png`), frosted glass credentials card (`login_form.html`), and interactive 3D Duolingo-style button (`auth_button.js`).
3. **Live Auto-Deploy**:
   - As volunteers push their milestones to `main` (or merge branches into `main`), Vercel automatically redeploys in ~10–15 seconds, transforming the live website before the students' eyes!

---

## 📁 Directory Structure

```text
C:\Andrei.dev\Projects\demo-teaching-act\
│
├── index.html                      # Kiosk Viewport (Unstyled on main, Polished on demo)
├── README.md                       # This instruction guide
├── src\
│   ├── assets\
│   │   └── pdm.png                 # Official PDM College Crest (Mounted in Milestone 2)
│   ├── css\
│   │   ├── base.css                # Base resets & typography
│   │   ├── theme.css               # Collegiate blue gradient theme (Milestone 1)
│   │   └── layout.css              # Credentials card, header, and 3D button layout
│   ├── js\
│   │   ├── api.js                  # Mock student authentication logic
│   │   ├── auth_button.js          # Interactive button handler (Milestone 4)
│   │   └── router.js               # Client-side view toggle (Login ⟷ Portal)
│   └── pages\
│       ├── login_form.html         # Credentials form component (Milestone 3)
│       └── portal.html             # Authenticated student dashboard component
│
└── volunteer-milestones\           # Pre-packaged milestone files for the live relay
    ├── student-a-theme\            # Contains theme.css
    ├── student-b-brand\            # Contains pdm.png
    ├── student-c-architect\        # Contains login_form.html
    ├── student-d-activator\        # Contains auth_button.js
    └── polished-kiosk\             # Complete working application files
```

---

## 👥 4 Volunteer Relay Roles & Tasks

### 🟦 Student A: The Stylist (Milestone 1)
- **Role:** Styles the tablet kiosk screen with PDM's collegiate blue theme and top status bar.
- **Action:** Copy `volunteer-milestones/student-a-theme/theme.css` to `src/css/theme.css`.
- **Git Relay Commands:**
  ```bash
  git status
  git add src/css/theme.css
  git status
  git commit -m "style(ui): add collegiate blue gradient theme and status bar"
  git push origin main
  ```
- **Vercel Result:** Refresh live site &rarr; Background turns into vibrant PDM blue gradient with top status bar!

---

### 🟪 Student B: The Brand (Milestone 2)
- **Role:** Mounts the official PDM college crest onto the kiosk brand header.
- **Action:** Copy `volunteer-milestones/student-b-brand/pdm.png` to `src/assets/pdm.png`.
- **Git Relay Commands:**
  ```bash
  git status
  git add src/assets/pdm.png
  git status
  git commit -m "feat(brand): mount official PDM college crest onto kiosk header"
  git push origin main
  ```
- **Vercel Result:** Refresh live site &rarr; Official PDM seal appears with floating animation!

---

### 🟦 Student C: The Architect (Milestone 3)
- **Role:** Builds the student credentials card with Student ID Number and Password input fields.
- **Action:** Copy `volunteer-milestones/student-c-architect/login_form.html` to `src/pages/login_form.html`.
- **Git Relay Commands:**
  ```bash
  git status
  git add src/pages/login_form.html
  git status
  git commit -m "feat(auth): build student credentials form card"
  git push origin main
  ```
- **Vercel Result:** Refresh live site &rarr; Modern frosted glass credentials card with glowing inputs renders!

---

### 🟩 Student D: The Activator (Milestone 4)
- **Role:** Activates the interactive 3D Log In button to validate student credentials and trigger entry.
- **Action:** Copy `volunteer-milestones/student-d-activator/auth_button.js` to `src/js/auth_button.js`.
- **Git Relay Commands:**
  ```bash
  git status
  git add src/js/auth_button.js
  git status
  git commit -m "feat(ui): activate interactive 3D login button action"
  git push origin main
  ```
- **Vercel Result:** Refresh live site &rarr; Green 3D button is active! Clicking it verifies student credentials and opens the PDM Scholar Dashboard with confetti!

---

## 💡 The 3 Professional Habits Reinforced
1. **Commit Small, Commit Often:** Each student saves a single logical piece of work.
2. **Write Meaningful Messages:** Clear commit messages tell groupmates exactly what changed.
3. **Review Together:** Verify code changes before merging to prevent overwriting each other!
