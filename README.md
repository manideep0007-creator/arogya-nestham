# Arogya Jagruthi (ఆరోగ్య జాగృతి)
### Early Health Warning Signs Awareness System for Rural Communities

> **Tagline:** *"Your friend for early health care"* / *"ఆలస్యం చేయకండి, డాక్టర్ను కలవండి"*  
> **Target Region:** Rural communities in Andhra Pradesh, India

---

## 📌 Project Overview
**Arogya Jagruthi** is a mobile-first, ultra-lightweight, static educational website built exclusively with **vanilla HTML5, CSS3, and JavaScript**. It contains **no external framework dependencies, no backend, and no build steps**.

### Key Highlights:
- **Instant Launch:** Open directly by double-clicking `index.html` in any web browser (`file:///` protocol supported).
- **Dual Language Support:** Instant 1-click toggle between **English** and **తెలుగు (Telugu)** in the navigation bar. Remembers the user's preferred language via `localStorage`.
- **Purely Educational:** Strictly raises awareness about early warning signs and consulting qualified healthcare professionals at Primary Health Centres (PHCs). **Does not diagnose, predict disease, check symptoms, or suggest medications.**
- **Mobile-First & Accessible:** Designed with high-contrast text, 48px+ touch targets, calm green and white healthcare palette, and optimized for 360px budget smartphone screens and slow internet connections.

---

## 🗂 Project Structure
```text
Arogya Jagruthi/
├── index.html       # Semantic HTML5 layout with sticky navigation & accessibility landmarks
├── style.css        # Responsive CSS with design tokens, 3D flip cards, and animations
├── script.js        # Single content object (content.en & content.te) and interactive logic
├── images/          # Image directory for community visit photographs
│   ├── visit1.jpg   # (Slot 1: Interacting with local healthcare personnel)
│   ├── visit2.jpg   # (Slot 2: Awareness session in the village)
│   ├── visit3.jpg   # (Slot 3: Community members learning about warning signs)
│   └── visit4.jpg   # (Slot 4: Interactive group discussion)
└── README.md        # Documentation and customization guide
```

---

## 📱 Sections Included
1. **Sticky Header:** Brand logo, navigation links, 108 emergency dial button, mobile hamburger drawer, and English/Telugu toggle.
2. **Hero:** Project title, dual-language tagline, core message, CTA buttons, and key highlight badges.
3. **7 Early Warning Signs (Icon Cards):**
   - Continuous cough (> 2 weeks)
   - Prolonged fever
   - Continuous weakness / tiredness
   - Unexplained weight loss
   - Non-healing wound or sore
   - Persistent body pain
   - Persistent loss of appetite  
   *(Each card includes: what it looks like, why not to ignore it, and "What to do: visit a qualified doctor".)*
4. **Emergency Warning Signs (Prominent Red Box):**
   - Severe chest pain / pressure
   - Difficulty breathing
   - Fainting / loss of consciousness
   - Sudden weakness on one side (stroke symptoms)  
   *(Includes direct tap-to-call link for **108 Emergency Ambulance**.)*
5. **Myths vs Facts (5 Flip Cards):** Interactive 3D flip cards addressing home remedies, self-medication, herbal pastes for snakebites, chronic painkiller use, and PHC accessibility.
6. **Why Not Self-Medicate:** Explains how over-the-counter pills mask warning signals, risk kidney damage, cause antibiotic resistance, and delay true diagnosis.
7. **When to Go to the Doctor Checklist:** Practical checklist and golden rule of thumb for rural families.
8. **Community Awareness Quiz:** 5 multiple-choice questions with instant correct/wrong visual feedback, explanations, score tally, and encouraging advice.
9. **Find Help:** Facility cards for the Primary Health Centre (PHC, Revidi, Padmanabham) and Community Health Centre (CHC, Bheemunipatnam), 104 Health Helpline and 108 Emergency call cards, plus village ASHA & ANM guidance.
10. **Our Community Activity (Padmanabham Village):**
    - Village summary for Padmanabham, Visakhapatnam District.
    - Editable metrics: *People Reached* (20+), *Date of Visit* (29 June 2026), and *Healthcare Personnel Interacted* (2).
    - 4-slot photo gallery with automatic fallback placeholders when image files are not yet added.
11. **Footer:** Medical disclaimer, project team members (Team No. 6 · HealthFirst), college name (Lendi Institute of Engineering and Technology), and project guide (P. Venkata Satya Sri).

---

## ✏️ How to Customize Content
All text content, translations, metrics, and team details are centralized inside `script.js` in the `content` object:

```javascript
const content = {
  en: { ... },
  te: { ... }
};
```

### 1. Update Community Visit Numbers:
In `script.js`, find `community.stats`:
```javascript
stats: [
  { id: "peopleReached", label: "People Reached", value: "20+" },
  { id: "visitDate", label: "Date of Visit", value: "29 June 2026" },
  { id: "healthWorkers", label: "Healthcare Personnel Interacted", value: "2" }
]
```

### 2. Update College & Team Names:
In `script.js`, find `footer`:
```javascript
teamBadge: "Team No. 6 · HealthFirst",
teamHeading: "Team Members",
teamList: "Meesala Veda Gayatri, Nallabanda Manideep, Nammi Sruthi, Neteti Asha, Nithin Pyla, Oruganti Sai Mani Keerthana, Palaparthi Pavani, Pampana Sai Teja",
collegeName: "Lendi Institute of Engineering and Technology",
guideName: "P. Venkata Satya Sri"
```

### 3. Update Health Facilities:
In `script.js`, find `findHelp.facilities`:
```javascript
facilities: [
  { type: "Primary Care", name: "Primary Health Centre (PHC), Revidi, Padmanabham", ... },
  { type: "Secondary Care", name: "Community Health Centre (CHC), Bheemunipatnam", ... }
]
```

### 4. Add Photos:
Drop 4 JPEG files into the `images/` folder named:
- `visit1.jpg`
- `visit2.jpg`
- `visit3.jpg`
- `visit4.jpg`

If any file is absent, the webpage automatically displays a clean, neutral placeholder card with the caption.
