# Statutory Provisions Against Piracy, Cyber Crimes and Hacking

**Academic College Micro-Project | Legal Awareness & Professional Ethics in Computing**  
**Technology Stack:** HTML5, CSS3, Vanilla JavaScript (Zero External Dependencies, Pure Client-Side Architecture)  
**Target Environment:** Cross-platform (Windows 11 / Linux / macOS) via VS Code Live Server or Direct Browser Execution.

---

## 1. Project Overview & Abstract

### Abstract
In an increasingly digitized world, the proliferation of digital piracy, unauthorized computer intrusions, phishing campaigns, and data exfiltration poses acute threats to personal privacy, commercial security, and critical national infrastructure. While computer science curricula emphasize system development, there exists a significant pedagogical gap regarding the legal boundaries governing digital technologies.

This micro-project, entitled **"Statutory Provisions Against Piracy, Cyber Crimes and Hacking,"** is an interactive educational web platform designed to foster legal literacy and professional ethics. Grounded in the statutory provisions of the **Information Technology Act, 2000** and the **Copyright Act, 1957** of India, the platform deconstructs complex legal doctrines into intuitive modules:
- An empirical taxonomy of cybercrimes and technical mitigation strategies.
- A granular breakdown of civil liabilities versus criminal penal sanctions.
- Five interactive fictional case studies with immediate judicial evaluation.
- A 12-question self-assessment quiz with real-time scoring and statutory rationales.
- A practical Cyber Safety and Digital Hygiene guide.
- An educational incident triage simulator generating structured dockets for evidence preservation.

---

## 2. Project Architecture & File Structure

The project has been engineered to run without any complex backend servers, node build steps, or paid third-party API keys:

```
├── index.html            # Main semantic HTML5 markup containing all 10 core modules
├── style.css             # Responsive CSS3 stylesheet with a dark navy & cyan cyber theme
├── script.js             # Vanilla JavaScript engine managing data, search, quiz, and triage
├── metadata.json         # AI Studio App metadata and configuration
├── package.json          # Node project manifest (compatible with Vite dev server)
├── tsconfig.json         # TypeScript compiler configuration
├── vite.config.ts        # Vite configuration for AI Studio live preview
└── README.md             # Complete documentation, setup guide, and project report outline
```

---

## 3. How to Run the Website on Windows 11 in VS Code

### Method A: Using VS Code "Live Server" Extension (Recommended)
1. **Install Visual Studio Code**: Download and install VS Code on Windows 11 from [https://code.visualstudio.com/](https://code.visualstudio.com/).
2. **Open the Project Folder**:
   - Launch VS Code.
   - Click **File** > **Open Folder...** (or press `Ctrl + K, Ctrl + O`).
   - Select the folder containing `index.html`, `style.css`, and `script.js`.
3. **Install the Live Server Extension**:
   - Click the Extensions icon on the left Activity Bar (or press `Ctrl + Shift + X`).
   - In the search bar, type `Live Server` (by Ritwick Dey).
   - Click **Install**.
4. **Launch the Web Application**:
   - Right-click `index.html` in the VS Code File Explorer.
   - Select **"Open with Live Server"** (or click **"Go Live"** in the bottom-right status bar).
   - Your default web browser (Microsoft Edge, Google Chrome, Firefox, or Brave) will automatically open `http://127.0.0.1:5500/index.html`.

### Method B: Direct Browser Execution (Zero Tooling Required)
Because this application is built with 100% vanilla web standards:
1. Open Windows File Explorer (`Win + E`).
2. Navigate to the project directory.
3. Double-click `index.html`, or right-click `index.html` > **Open with** > **Google Chrome** or **Microsoft Edge**.
4. All search, filtering, quiz evaluations, case study analyses, and incident report generation work offline without an active internet connection.

---

## 4. Step-by-Step Faculty Demonstration Script (5-Minute Viva Walkthrough)

Use this structured presentation flow during your faculty evaluation or project viva:

### Step 1: Project Title & Hero Section (0:00 - 1:00)
- **Action**: Open the home page. Point to the exact project title: *"Statutory Provisions Against Piracy, Cyber Crimes and Hacking."*
- **Talking Points**:
  - *"Good morning, respected professors. Our micro-project addresses the legal and ethical responsibilities of computer engineers under Indian statutory frameworks."*
  - Scroll to the **Official Statistics Strip**. Highlight the verified figures: 65,893 cybercrime cases registered in 2022 (+24.4% YoY) as documented in the NCRB Crime in India 2022 Report, with 69.8% involving fraud and cheating (IT Act Sec 66D).

### Step 2: Live Search & Statutory Provisions (1:00 - 2:00)
- **Action**: In the Search & Filter bar, type `66` or `piracy`.
- **Talking Points**:
  - Show how the real-time filter dynamically narrows down crime categories and statutory sections with term highlighting.
  - Navigate to **Module 02 (Statutory Jurisprudence)**.
  - Present the **Civil Liability vs Criminal Offence Comparison Table**:
    - Explain that Section 43 of the IT Act provides *civil compensation* (up to ₹5 Crore) adjudicated by the State IT Adjudicating Officer under Section 46 on a *preponderance of probabilities*.
    - Contrast this with Section 66, which requires *mens rea* (dishonest or fraudulent intent) and imposes *criminal imprisonment* up to 3 years and fines.
    - Mention Copyright Act provisions: Section 14 (literary work status of code), Section 51 (infringement), Section 52(1)(aa) (statutory exception for backup copies by lawful owners), and Section 63B (knowing use of infringing software on computers).

### Step 3: Ethical Hacking Boundary (2:00 - 2:45)
- **Action**: Highlight the **Ethical Security Testing Callout** under Module 01.
- **Talking Points**:
  - Clarify the crucial legal principle: *"Under Indian law, ethical hacking and unauthorized hacking are separated strictly by prior written authorization and scope. Testing without consent constitutes an offence under Section 43/66, regardless of benevolent intent."*

### Step 4: Interactive Case Studies & Quiz Engine (2:45 - 4:00)
- **Action**: Scroll to **Module 03 (Case Studies)**.
  - Select **Case 01 (Campus Torrent Distribution)** or **Case 04 (Unsolicited College Portal Pentest)**.
  - Select an option and click **"Analyze & Check Legal Answer"**.
  - Show the dynamic feedback, statutory citations, and educational limitations.
- **Action**: Scroll to **Module 04 (Assessment Quiz)**.
  - Answer 2-3 questions to demonstrate the live progress bar, score counter, and statutory citation explanations.

### Step 5: Incident Triage Simulator & Conclusion (4:00 - 5:00)
- **Action**: Scroll to **Module 06 (Incident Simulator)**.
  - Select an incident type (e.g. *Phishing & Credential Theft Attempt*).
  - Attempt to enter a dummy credit card number to show safety validation.
  - Fill in the form and click **"Generate Triage Docket"**.
  - Show the generated educational assessment with Docket ID, classification, applicable sections (e.g. Sec 66C & 66D), and evidence preservation checklist.
  - Point out the prominent disclaimer and official helpline (**1930 / cybercrime.gov.in**).
  - Conclude with professional ethics under IEEE & ACM codes.

---

## 5. College Project Report Outline

### 1. Abstract
An overview of the necessity for cyber law education among engineering undergraduates, the objectives of translating statutory legal frameworks into interactive web tools, and an outline of the modules implemented.

### 2. Introduction & Problem Statement
- Exponential growth of digital transactions and internet penetration in India.
- Lack of cyber law awareness among computer science students regarding digital piracy, intellectual property infringement, and unauthorized penetration testing.
- The need for an accessible, offline-capable, interactive educational platform.

### 3. Objectives of the Project
- To design a responsive web application highlighting the Information Technology Act, 2000 and the Copyright Act, 1957.
- To formulate fictional, realistic case scenarios demonstrating practical statutory applications.
- To build interactive self-evaluation tools (12-question quiz with score tracking).
- To simulate an incident triage reporting mechanism without storing or transmitting sensitive personal data.

### 4. Technical Methodology & System Architecture
- **Front-End Architecture**: Pure HTML5 semantic elements (`<header>`, `<section>`, `<article>`, `<main>`, `<footer>`), styled via modular CSS3 variables for theme cohesion.
- **State Management & DOM Manipulation**: Vanilla ES6+ JavaScript utilizing client-side arrays, regular expression highlighting, and event-driven form validation.
- **Privacy & Security by Design**: Zero server-side data persistence; client-side regex filters prevent accidental submission of real Aadhaar or banking card numbers.
- **Reliability & Portability**: Completely independent of third-party cloud CDNs or paid APIs, ensuring deterministic offline performance during academic evaluations.

### 5. Module Descriptions
- **Module 01: Cybercrime Taxonomy**: Categorization of unauthorized access, hacking, phishing, identity theft, online impersonation, data exfiltration, and software piracy.
- **Module 02: Statutory Jurisprudence**: Verified legal quotes and interpretations of IT Act (Sec 43, 43A, 66, 66C, 66D, 70) and Copyright Act (Sec 14, 51, 52, 63, 63B).
- **Module 03: Practical Case Studies**: Five contextual scenarios illustrating academic and corporate cyber dilemmas.
- **Module 04: Assessment Quiz**: Interactive 12-question evaluation engine with instant citation feedback.
- **Module 05: Cyber Safety Guide**: Technical guidelines on password entropy, MFA, FOSS licensing, and SHA-256 integrity verification.
- **Module 06: Incident Triage Simulator**: Interactive form generating printable assessment briefs with incident checklists.
- **Module 07: Government Portals & Legal Disclaimers**: Verification links to India Code, CERT-In, and the National Cyber Crime Reporting Portal.

### 6. Results & Discussion
- Successful implementation of a fully responsive, accessible, dark-themed educational interface.
- 100% client-side execution verified across modern browsers (Chrome, Edge, Firefox).
- Enhanced student understanding of civil remedies versus criminal sanctions and fair dealing exceptions.

### 7. Limitations & Scope for Future Work
- **Academic Limitation**: The system is an educational simulation; it does not constitute legal counsel or replace formal police investigations.
- **Future Scope**: Expansion into regional Indian languages, integration with legal database APIs, and modules covering the Digital Personal Data Protection (DPDP) Act, 2023.

### 8. Conclusion
Software developers and computing professionals bear a civic and ethical duty to uphold system integrity and respect intellectual property. This project equips students with the statutory knowledge required to navigate their professional careers ethically and legally.

---

## 6. Statutory References & Official Citations
1. **Information Technology Act, 2000 (Act No. 21 of 2000)**, as amended by the Information Technology (Amendment) Act, 2008. Official India Code link: [https://www.indiacode.nic.in/handle/123456789/1999](https://www.indiacode.nic.in/handle/123456789/1999).
2. **The Copyright Act, 1957 (Act No. 14 of 1957)**, as amended. Official India Code link: [https://www.indiacode.nic.in/handle/123456789/1367](https://www.indiacode.nic.in/handle/123456789/1367).
3. **National Crime Records Bureau (NCRB)**, *Crime in India 2022 Report*, Ministry of Home Affairs, Government of India.
4. **Indian Computer Emergency Response Team (CERT-In)**, Annual Cyber Incident Reports, Ministry of Electronics and Information Technology (MeitY).
5. **ACM Code of Ethics and Professional Conduct** & **IEEE Code of Ethics**.
