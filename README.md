# 🎓 PDM Tablet Kiosk Portal — 4-Volunteer Git Relay Activity

> **Classroom Demo Teaching Activity**  
> **Course:** IT31A — Systems Integration & Architecture  
> **Topic:** Version Control Systems (Git & GitHub Collaboration)  
> **Mission:** Build and deploy the Pambayang Dalubhasaan ng Marilao (PDM) Student Self-Service Kiosk Login feature as a 4-person Git relay team.  
> **GitHub Repo:** [https://github.com/butterkookies/volunteer-milestones.git](https://github.com/butterkookies/volunteer-milestones.git)

---

## 📁 Flat Root Directory Structure

```text
C:\Andrei.dev\Projects\demo-teaching-act\
│
├── index.html                      # Main Kiosk Viewport (Kiosk Tablet Frame)
├── base.css                        # Base resets, variables, and typography
├── layout.css                      # Layout structure & card styling
├── api.js                          # Mock student authentication logic
├── router.js                       # Client-side view toggle (Login ⟷ Portal)
├── portal.html                     # Authenticated student dashboard component
├── README.md                       # This instruction guide
│
├── theme.css                       # 🟦 Student A's Target (UNTRACKED)
├── pdm.png                         # 🟪 Student B's Target (UNTRACKED)
├── login_form.html                 # 🟦 Student C's Target (UNTRACKED)
├── auth_button.js                  # 🟩 Student D's Target (UNTRACKED)
│
└── volunteer-milestones\           # Pre-packaged backup assets
```

---

## 👥 4 Volunteer Relay Roles & Simple Git Commands

Walang folders na kailangang i-type! Direktang filename lang ang ilalagay ng bawat volunteer:

### 🟦 Student A: The Stylist (Milestone 1)
- **Role:** Styles the tablet kiosk screen with PDM's collegiate blue theme and top status bar.
- **Target File:** `theme.css`
- **Commands:**
  ```bash
  git status
  git add theme.css
  git status
  git commit -m "style(ui): add collegiate blue gradient theme and status bar"
  git push origin main
  ```

---

### 🟪 Student B: The Brand (Milestone 2)
- **Role:** Mounts the official PDM college crest onto the kiosk brand header.
- **Target File:** `pdm.png`
- **Commands:**
  ```bash
  git status
  git add pdm.png
  git status
  git commit -m "feat(brand): mount official PDM college crest onto kiosk header"
  git push origin main
  ```

---

### 🟦 Student C: The Architect (Milestone 3)
- **Role:** Builds the student credentials card with Student ID Number and Password input fields.
- **Target File:** `login_form.html`
- **Commands:**
  ```bash
  git status
  git add login_form.html
  git status
  git commit -m "feat(auth): build student credentials form card"
  git push origin main
  ```

---

### 🟩 Student D: The Activator (Milestone 4)
- **Role:** Activates the interactive 3D Log In button to validate student credentials and trigger entry.
- **Target File:** `auth_button.js`
- **Commands:**
  ```bash
  git status
  git add auth_button.js
  git status
  git commit -m "feat(ui): activate interactive 3D login button action"
  git push origin main
  ```

---

## 💡 The 3 Professional Habits Reinforced
1. **Commit Small, Commit Often:** Each student saves a single logical piece of work.
2. **Write Meaningful Messages:** Clear commit messages tell groupmates exactly what changed.
3. **Review Together:** Verify code changes before merging to prevent overwriting each other!
