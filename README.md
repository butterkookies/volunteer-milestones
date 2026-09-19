# 🎓 PDM Tablet Kiosk Portal — Frontend & Backend Git Relay

> **Classroom Demo Teaching Activity**  
> **Course:** IT31A — Systems Integration & Architecture  
> **Topic:** Version Control Systems (Git & GitHub Collaboration)  
> **Mission:** Build and deploy the Pambayang Dalubhasaan ng Marilao (PDM) Student Self-Service Kiosk Login feature as a Frontend & Backend Git relay team.  
> **GitHub Repo:** [https://github.com/butterkookies/volunteer-milestones.git](https://github.com/butterkookies/volunteer-milestones.git)

---

## 📁 Project Directory Structure

```text
C:\Andrei.dev\Projects\demo-teaching-act\
│
├── index.html                      # Main Kiosk Viewport (Plain wireframe on main)
├── README.md                       # This instruction guide
│
├── frontend\                       # 🟦 Volunteer 1: Frontend Folder (UNTRACKED)
│   ├── theme.css                   # Collegiate blue gradient theme & status bar
│   └── pdm.png                     # Official PDM College Crest
│
└── backend\                        # 🟩 Volunteer 2: Backend Folder (UNTRACKED)
    └── auth.js                     # Interactive 3D login button & portal logic
```

---

## 👥 2 Volunteer Relay Roles & Realistic Git Commands

### 🟦 Volunteer 1: The Frontend Developer (Theme & Branding)
- **Role:** Adds the collegiate blue theme, glassmorphic status bar, card styling, and official PDM crest.
- **Target Folder:** `frontend/`
- **Commands:**
  ```bash
  git status
  git add frontend/
  git status
  git commit -m "feat(frontend): add PDM collegiate blue theme and official crest"
  git push origin main
  ```
- **Live Vercel Result:** Refresh the live URL &rarr; The plain white wireframe transforms into a stunning, glowing, collegiate blue tablet kiosk with the official PDM crest!

---

### 🟩 Volunteer 2: The Backend Developer (Authentication & Logic)
- **Role:** Activates the interactive 3D Log In button, validates student credentials, and unlocks the student portal.
- **Target Folder:** `backend/`
- **Commands:**
  ```bash
  git status
  git add backend/
  git status
  git commit -m "feat(backend): activate interactive login and student portal"
  git push origin main
  ```
- **Live Vercel Result & Finale:** Refresh the live URL &rarr; The green 3D button is active! Volunteer 2 enters credentials, clicks the button, and opens the PDM Scholar Dashboard with celebratory verification! 🎉

---

## 💡 The Professional Git Habits Reinforced
1. **Separation of Concerns:** Frontend and Backend developers work in their dedicated folders without merge conflicts.
2. **Git GPS (`git status`):** Check status before staging (RED) and after staging (GREEN).
3. **Meaningful Commit Messages:** Conventional commit prefixes (`feat(frontend):`, `feat(backend):`).
