/**
 * Statutory Provisions Against Piracy, Cyber Crimes and Hacking
 * College Micro-Project - Educational Legal Awareness Platform
 * Client-Side Vanilla JavaScript Engine
 * 
 * Note: All scenarios, simulations, and examples are fictional and designed for 
 * academic legal awareness and professional ethics education.
 */

// --- EDUCATIONAL DATA REPOSITORY ---

const CYBERCRIMES_DATA = [
  {
    id: "unauth-access",
    title: "Unauthorized Computer Access",
    category: "hacking",
    typeTag: "Civil & Criminal",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    shortDesc: "Gaining entry into a computer system, network, or secure account without legal authorization or exceeding permitted access boundaries.",
    scenario: "Fictional Case: Rohan, a college student, notices an administrator forgot to lock their workstation. He opens the administrative portal and browses confidential grading logs without permission.",
    impact: "Compromise of confidentiality, administrative disruption, and potential tampering with critical records.",
    prevention: "Role-based access control (RBAC), automatic screen locks, session timeouts, and strict physical security controls.",
    statuteRef: "IT Act, 2000 — Section 43(a) [Civil Liability] & Section 66 [Criminal Offence]"
  },
  {
    id: "hacking-intrusion",
    title: "Hacking & System Disruption",
    category: "hacking",
    typeTag: "Criminal Offence",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    shortDesc: "Intentionally or fraudulently destroying, deleting, altering, or diminishing the value of data in a computer resource, or disrupting its normal operation.",
    scenario: "Fictional Case: A disgruntled ex-contractor inputs arbitrary scripts into a web server database to corrupt active records and take the service offline.",
    impact: "Data corruption, operational downtime, financial losses, and forensic recovery expenses.",
    prevention: "Input sanitization (parameterized queries), web application firewalls (WAF), principle of least privilege, and immutable audit logging.",
    statuteRef: "IT Act, 2000 — Section 43(d)/(e) & Section 66 (Punishment: Imprisonment up to 3 years or fine up to ₹5 lakh or both)"
  },
  {
    id: "phishing-fraud",
    title: "Phishing & Social Engineering",
    category: "cybercrime",
    typeTag: "Criminal Offence",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    shortDesc: "Deceiving individuals into revealing sensitive credentials, passwords, or financial data through fraudulent emails, deceptive websites, or spoofed messages.",
    scenario: "Fictional Case: Priyanshi receives an SMS purportedly from her college registrar with a link asking for her password to 'prevent immediate cancellation of semester enrollment'. The link directs to a counterfeit clone page.",
    impact: "Compromise of credentials, unauthorized account takeovers, and subsequent financial theft or academic impersonation.",
    prevention: "Phishing awareness training, URL domain inspection, anti-phishing mail filters (SPF/DKIM/DMARC), and phishing-resistant hardware MFA.",
    statuteRef: "IT Act, 2000 — Section 66D (Cheating by Personation) & Section 66C (Identity Theft)"
  },
  {
    id: "identity-theft",
    title: "Identity Theft & Credential Theft",
    category: "identity",
    typeTag: "Criminal Offence",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    shortDesc: "Dishonestly or fraudulently using another person's electronic signature, password, or unique identification feature without consent.",
    scenario: "Fictional Case: An individual obtains a colleague's digital signature certificate (DSC) and password from an unsecured desk notebook and signs an unauthorized procurement requisition.",
    impact: "Severe legal and financial liabilities placed on innocent victims, loss of professional trust, and unauthorized transactions.",
    prevention: "Use password managers with random passphrases, never share OTPs or DSC dongles, and implement multi-factor authentication.",
    statuteRef: "IT Act, 2000 — Section 66C (Punishment: Imprisonment up to 3 years and fine up to ₹1 lakh)"
  },
  {
    id: "online-impersonation",
    title: "Online Impersonation & Cheating",
    category: "identity",
    typeTag: "Criminal Offence",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>`,
    shortDesc: "Cheating by personating any person, real or fictitious, through any computer resource or communication device.",
    scenario: "Fictional Case: A scammer creates an instant messaging profile using a professor's real photo and name, messaging students to send an urgent 'emergency conference registration fee' via UPI.",
    impact: "Defamation of the impersonated party, psychological distress, and financial defrauding of unwary students.",
    prevention: "Institutional channel verification, out-of-band identity checks before transferring funds, and official account verification badges.",
    statuteRef: "IT Act, 2000 — Section 66D (Punishment: Imprisonment up to 3 years and fine up to ₹1 lakh)"
  },
  {
    id: "data-theft",
    title: "Data Theft & Unpermitted Extraction",
    category: "cybercrime",
    typeTag: "Civil & Criminal",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    shortDesc: "Downloading, copying, or extracting any data, computer database, or information from a computer system without owner permission.",
    scenario: "Fictional Case: An employee about to resign connects an external hard drive and copies proprietary customer lead databases and algorithms to use at a competing startup.",
    impact: "Direct loss of trade secrets, intellectual property leakage, violation of data privacy standards, and massive commercial damage.",
    prevention: "Data Loss Prevention (DLP) agents, USB port restrictions on enterprise endpoints, and granular access auditing.",
    statuteRef: "IT Act, 2000 — Section 43(b) [Compensation up to ₹5 Crore] & Section 66 / 66B [Criminal Liability]"
  },
  {
    id: "software-piracy",
    title: "Software & Digital Piracy",
    category: "piracy",
    typeTag: "Criminal & Civil",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m10 15 5-3-5-3v6Z"></path></svg>`,
    shortDesc: "Unauthorized reproduction, distribution, cracked modification, or commercial exploitation of copyrighted computer programmes and digital media.",
    scenario: "Fictional Case: A computer lab administrator downloads a cracked license generator ('keygen') from a peer-to-peer torrent site to install commercial CAD engineering software across 40 campus workstations.",
    impact: "Severe legal exposure under copyright laws, exposure to ransomware/malware embedded in warez keygens, and loss of software vendor support.",
    prevention: "Adopt Free and Open Source Software (FOSS) alternatives, implement Software Asset Management (SAM), and inspect software license agreements.",
    statuteRef: "Copyright Act, 1957 — Section 51, Section 63 & Section 63B (Imprisonment up to 3 years and fine up to ₹2 lakh)"
  }
];

const STATUTORY_PROVISIONS_DATA = [
  {
    act: "IT Act, 2000",
    section: "Section 43",
    name: "Penalty and Compensation for Damage to Computer, Computer System, etc.",
    type: "civil",
    quote: "If any person without permission of the owner or any other person who is incharge of a computer, computer system or computer network: (a) accesses or secures access to such computer... (b) downloads, copies or extracts any data... (c) introduces or causes to be introduced any computer contaminant or computer virus... (e) disrupts or causes disruption of any computer... he shall be liable to pay damages by way of compensation to the person so affected.",
    explanation: "This section establishes civil liability for unauthorized access, downloading data, infecting with malware, or disrupting systems. It focuses on compensating the injured party rather than imprisonment. Matters under Section 43 are adjudicated by the IT Adjudicating Officer appointed by the State Government under Section 46 of the IT Act.",
    remedyType: "Civil Remedy (Compensation to the Victim)",
    penalty: "Compensation up to ₹5 Crore (under Section 43/46 Adjudication)",
    mensRea: "Civil strict liability / unauthorized conduct without necessary criminal intent requirement.",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1999"
  },
  {
    act: "IT Act, 2000",
    section: "Section 43A",
    name: "Compensation for Failure to Protect Sensitive Personal Data",
    type: "civil",
    quote: "Where a body corporate, possessing, dealing or handling any sensitive personal data or information in a computer resource which it owns, controls or operates, is negligent in implementing and maintaining reasonable security practices and procedures and thereby causes wrongful loss or wrongful gain to any person, such body corporate shall be liable to pay damages by way of compensation to the person so affected.",
    explanation: "Imposes direct civil liability on corporate organizations and entities handling sensitive personal data if negligence in security standards leads to a data breach or wrongful loss. Note: While Section 43A established foundational data protection in 2008, organizations in India now also prepare for compliance under the Digital Personal Data Protection (DPDP) Act, 2023.",
    remedyType: "Civil Compensation",
    penalty: "Damages by way of compensation to affected parties (No statutory upper ceiling specified)",
    mensRea: "Negligence in maintaining reasonable security practices.",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1999"
  },
  {
    act: "IT Act, 2000",
    section: "Section 66",
    name: "Computer Related Offences (Hacking & Malicious Acts)",
    type: "criminal",
    quote: "If any person, dishonestly or fraudulently, does any act referred to in section 43, he shall be punishable with imprisonment for a term which may extend to three years or with fine which may extend to five lakh rupees or with both.",
    explanation: "Section 66 converts the civil violations enumerated under Section 43 into criminal offences whenever the accused acts 'dishonestly' or 'fraudulently' (as defined in Sections 24 and 25 of the Indian Penal Code / Bharatiya Nyaya Sanhita). This is the primary criminal charge for unauthorized system hacking, denial of service, and data tampering.",
    remedyType: "Criminal Prosecution (Police Cognizance & Trial)",
    penalty: "Imprisonment up to 3 years, or fine up to ₹5,00,000, or both.",
    mensRea: "Requires proving 'dishonest' or 'fraudulent' intent (Mens Rea).",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1999"
  },
  {
    act: "IT Act, 2000",
    section: "Section 66C",
    name: "Punishment for Identity Theft",
    type: "criminal",
    quote: "Whoever, fraudulently or dishonestly make use of the electronic signature, password or any other unique identification feature of any other person, shall be punished with imprisonment of either description for a term which may extend to three years and shall also be liable to fine which may extend to one lakh rupees.",
    explanation: "Explicitly penalizes the misappropriation and unauthorized use of another individual's digital identity markers, including login passwords, biometric data, OTPs, cryptographic keys, and digital signature certificates (DSC).",
    remedyType: "Criminal Offence (Cognizable)",
    penalty: "Imprisonment up to 3 years and fine up to ₹1,00,000.",
    mensRea: "Fraudulent or dishonest intent.",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1999"
  },
  {
    act: "IT Act, 2000",
    section: "Section 66D",
    name: "Punishment for Cheating by Personation Using Computer Resource",
    type: "criminal",
    quote: "Whoever, by means of any computer resource or communication device cheats by personating, shall be punished with imprisonment of either description for a term which may extend to three years and shall also be liable to fine which may extend to one lakh rupees.",
    explanation: "Addresses phishing, fake social media profiles, spoofed official emails, and fraudulent telecom calls where the perpetrator pretends to be someone else (e.g. a bank manager, professor, or lottery officer) to defraud victims.",
    remedyType: "Criminal Offence (Cognizable & Non-Bailable)",
    penalty: "Imprisonment up to 3 years and fine up to ₹1,00,000.",
    mensRea: "Intent to deceive and induce property delivery or consent.",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1999"
  },
  {
    act: "IT Act, 2000",
    section: "Section 70",
    name: "Protected Systems (Critical Information Infrastructure)",
    type: "criminal",
    quote: "The appropriate Government may, by notification in the Official Gazette, declare any computer resource which directly or indirectly affects the facility of Critical Information Infrastructure, to be a protected system... Any person who secures access or attempts to secure access to a protected system in contravention of the provisions of this section shall be punished with imprisonment of either description for a term which may extend to ten years and shall also be liable to fine.",
    explanation: "Provides stringent protection for Critical Information Infrastructure (CII)—such as power grids, nuclear facilities, defence systems, air traffic control, and national banking clearing networks. Unauthorized probing or penetration testing on designated protected systems carries severe criminal punishment.",
    remedyType: "Severe National Security Offence",
    penalty: "Imprisonment up to 10 years and fine.",
    mensRea: "Unauthorized access or attempted access.",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1999"
  },
  {
    act: "Copyright Act, 1957",
    section: "Section 51",
    name: "When Copyright Infringed (Software & Digital Media)",
    type: "civil",
    quote: "Copyright in a work shall be deemed to be infringed: (a) when any person, without a licence granted by the owner of the copyright or the Registrar of Copyrights... does anything, the exclusive right to do which is by this Act conferred upon the owner... or permits for profit any place to be used for the communication of the work to the public...",
    explanation: "Under Section 14 of the Copyright Act, computer programs are protected as 'literary works'. Section 51 defines infringement, covering unauthorized software duplication, distributing pirated serial keys, and hosting cracked binaries on websites or servers.",
    remedyType: "Civil Remedies (Injunction, Damages, Account of Profits under Section 55)",
    penalty: "Civil injunctions, seizure orders, and compensatory damages.",
    mensRea: "Infringing acts regardless of commercial intent (strict civil infringement).",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1367"
  },
  {
    act: "Copyright Act, 1957",
    section: "Section 52(1)(aa)-(ad)",
    name: "Statutory Exemptions for Computer Programmes (Fair Dealing)",
    type: "civil",
    quote: "The following acts shall not constitute an infringement of copyright... (aa) the making of copies or adaptation of a computer programme by the lawful possessor of a copy... in order to utilize the computer programme for the purposes for which it was supplied; or to make back-up copies purely as a temporary protection against loss, destruction or damage... (ab) the doing of any act necessary to obtain information essential for operating interoperability... (ad) the observation, study or test of the functioning of the programme...",
    explanation: "Crucial legal protection for students, developers, and legitimate license owners. It legalizes making personal backup copies of lawfully acquired software, testing interoperability, and reverse engineering purely to understand underlying concepts without copying code.",
    remedyType: "Statutory Safe Harbor / Legal Defense",
    penalty: "Non-infringing acts (Exempt from liability).",
    mensRea: "Lawful possessor acting within specified statutory boundaries.",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1367"
  },
  {
    act: "Copyright Act, 1957",
    section: "Section 63",
    name: "Offence of Infringement of Copyright (Criminal Liability)",
    type: "criminal",
    quote: "Any person who knowingly infringes or abets the infringement of the copyright in a work, or any other right conferred by this Act... shall be punishable with imprisonment for a term which shall not be less than six months but which may extend to three years and with fine which shall not be less than fifty thousand rupees but which may extend to two lakh rupees.",
    explanation: "This section criminalizes copyright infringement committed knowingly. Police officers of the rank of Sub-Inspector or above have statutory power under Section 64 to seize infringing copies and equipment without warrant.",
    remedyType: "Criminal Offence (Cognizable & Non-Bailable as interpreted in apex jurisprudence)",
    penalty: "Imprisonment: Minimum 6 months up to 3 years; Fine: Minimum ₹50,000 up to ₹2,00,000.",
    mensRea: "'Knowingly' infringing or abetting infringement.",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1367"
  },
  {
    act: "Copyright Act, 1957",
    section: "Section 63B",
    name: "Knowing Use of Infringing Copy of Computer Programme",
    type: "criminal",
    quote: "Any person who knowingly makes use on a computer of an infringing copy of a computer programme shall be punishable with imprisonment for a term which shall not be less than seven days but which may extend to three years and with fine which shall not be less than fifty thousand rupees but which may extend to two lakh rupees.",
    explanation: "Tailored specifically for end-users who deliberately run pirated software on their computers. Even if the individual did not crack the software themselves, knowingly executing a pirated binary on a workstation triggers this penal provision.",
    remedyType: "Special Criminal Offence for Software End-Users",
    penalty: "Imprisonment: Minimum 7 days up to 3 years; Fine: Minimum ₹50,000 up to ₹2,00,000.",
    mensRea: "'Knowingly' making use of an infringing copy on a computer.",
    indiaCodeUrl: "https://www.indiacode.nic.in/handle/123456789/1367"
  }
];

const CASE_STUDIES_DATA = [
  {
    id: 1,
    title: "The Campus Torrent Distribution",
    tag: "Digital Piracy & IT Act",
    scenario: "Aditya, a mechanical engineering student, downloads a cracked multi-thousand-dollar 3D CAD modeling software suite from a peer-to-peer torrent network. To help his classmates complete their term assignments, he hosts the cracked files on an unauthenticated local area network (LAN) share on the college hostel Wi-Fi, along with a custom 'keygen' executable that bypasses vendor licensing.",
    questionPrompt: "From a legal perspective in India, which statutory provisions are directly implicated by Aditya's actions?",
    options: [
      {
        id: "a",
        text: "Only college hostel administrative disciplinary bylaws; copyright laws do not apply to non-profit student activities.",
        isCorrect: false
      },
      {
        id: "b",
        text: "Copyright Act, 1957 (Sections 51, 63, 63B) and Information Technology Act, 2000 (Section 43 & Section 66).",
        isCorrect: true
      },
      {
        id: "c",
        text: "Section 66D of the IT Act (Cheating by Personation) exclusively.",
        isCorrect: false
      },
      {
        id: "d",
        text: "No offence, because Section 52 of the Copyright Act allows unrestricted sharing for educational purposes.",
        isCorrect: false
      }
    ],
    explanation: "Correct Legal Assessment: Hosting and sharing cracked proprietary software constitutes criminal copyright infringement under Section 63 and Section 51 of the Copyright Act, 1957. Furthermore, running an infringing copy on a workstation is punishable under Section 63B (7 days to 3 years imprisonment and fine of ₹50,000 to ₹2,00,000). The distribution of keygens and circumventing access controls also violates Section 43/66 of the IT Act, 2000.",
    statutesInvolved: "Copyright Act 1957 (Sec 51, 63, 63B); IT Act 2000 (Sec 43, 66)",
    limitations: "Educational Limitation: Section 52(1)(i) exempts reproduction by a teacher or pupil in the course of instruction, but court precedents have held that entire cracked commercial software distributions with license bypasses exceed fair dealing boundaries."
  },
  {
    id: 2,
    title: "The Departing Developer's Backup",
    tag: "Data Theft & Trade Secrets",
    scenario: "Meera works as a senior backend engineer at a fintech startup in Bengaluru. Having accepted an offer with a direct market competitor, she connects an unencrypted personal USB thumb drive to her corporate laptop on her final week and extracts the startup's proprietary transaction-scoring algorithm, client contact databases, and internal architectural schematics, intending to use them in her new position.",
    questionPrompt: "Which statutory recourse does the employer have against Meera under Indian cyber jurisprudence?",
    options: [
      {
        id: "a",
        text: "Civil claim for compensation under Section 43(b) of IT Act, 2000 and criminal prosecution under Section 66 & 66B.",
        isCorrect: true
      },
      {
        id: "b",
        text: "Only internal human resources dispute resolution; software engineers own the intellectual rights to code they wrote.",
        isCorrect: false
      },
      {
        id: "c",
        text: "Prosecution under Section 66E for privacy violation.",
        isCorrect: false
      },
      {
        id: "d",
        text: "Motor Vehicles Act and Consumer Protection Act exclusively.",
        isCorrect: false
      }
    ],
    explanation: "Correct Legal Assessment: Under Section 43(b) of the IT Act, downloading, copying, or extracting any data or computer database without the owner's permission incurs civil compensation up to ₹5 Crore before the Adjudicating Officer. Because the act was committed dishonestly for wrongful commercial gain, it fulfills the mens rea requirement of Section 66 of the IT Act (punishable with imprisonment up to 3 years and fine up to ₹5 lakh) and Section 66B (dishonestly receiving stolen computer resources).",
    statutesInvolved: "IT Act 2000 (Sec 43(b), Sec 46, Sec 66, Sec 66B)",
    limitations: "Educational Limitation: Employment contract terms (Non-Disclosure Agreements) also govern this breach, and corporate trade secret suits often proceed concurrently in High Courts under common law breach of confidence."
  },
  {
    id: 3,
    title: "The Urgent KYC SMS Trap",
    tag: "Phishing & Financial Cybercrime",
    scenario: "Vikas receives an SMS with an urgent warning: 'DEAR USER, YOUR BANK DEBIT ACCOUNT IS SUSPENDED DUE TO PENDING KYC. CLICK HTTP://BANK-KYC-VERIFY-PORTAL.NET TO AVOID PERMANENT FREEZE.' Panicked, Vikas clicks the link, which opens a webpage perfectly replicating his bank's visual branding. He enters his customer ID, net-banking password, and card PIN.",
    questionPrompt: "What primary statutory offences have been committed by the operators of this phishing infrastructure?",
    options: [
      {
        id: "a",
        text: "IT Act Section 66D (Cheating by Personation) and Section 66C (Identity Theft).",
        isCorrect: true
      },
      {
        id: "b",
        text: "Only Copyright Act Section 51 for unauthorized use of the bank logo.",
        isCorrect: false
      },
      {
        id: "c",
        text: "Section 70 (Critical Information Infrastructure breach) by Vikas for clicking.",
        isCorrect: false
      },
      {
        id: "d",
        text: "No crime has occurred until money is proven to be physically withdrawn from a branch counter.",
        isCorrect: false
      }
    ],
    explanation: "Correct Legal Assessment: The fraudulent website operators deceive the public by personating an authorized banking institution, which directly violates Section 66D of the IT Act, 2000 (Cheating by personation by using computer resource, punishable with up to 3 years imprisonment and ₹1 lakh fine). Capturing and harvesting Vikas's login credentials and password also triggers Section 66C (Identity theft).",
    statutesInvolved: "IT Act 2000 (Sec 66C, Sec 66D); BNS / IPC (Cheating & Forgery)",
    limitations: "Educational Limitation: In actual criminal investigations, tracing the proceeds of crime requires coordination with telecom service providers, domain registrars, and the National Cyber Crime Reporting Portal (1930 / cybercrime.gov.in)."
  },
  {
    id: 4,
    title: "The Unsolicited College Portal Pentest",
    tag: "Hacking vs Ethical Testing",
    scenario: "Siddharth, a third-year computer science student, wants to demonstrate his cybersecurity prowess. Without obtaining any written consent or bug bounty authorization from the college administration, he launches an automated SQL injection and vulnerability scanner (like sqlmap) against the university's semester examination results portal over the weekend, extracting test database tables to 'prove vulnerabilities exist'.",
    questionPrompt: "How does Indian cyber law characterize Siddharth's actions?",
    options: [
      {
        id: "a",
        text: "He is completely exempt from liability because he had good intentions to help the college.",
        isCorrect: false
      },
      {
        id: "b",
        text: "His actions constitute unauthorized access under Section 43/66 of the IT Act; ethical testing strictly requires prior written authorization.",
        isCorrect: true
      },
      {
        id: "c",
        text: "Automated vulnerability scanners are designated as weaponized malware under Section 70 only.",
        isCorrect: false
      },
      {
        id: "d",
        text: "The activity is purely a matter for the telecom broadband provider to resolve.",
        isCorrect: false
      }
    ],
    explanation: "Correct Legal Assessment: In Indian and international cyber law, the foundational differentiator between ethical security research and criminal hacking is AUTHORIZATION AND SCOPE. Penetration testing without prior explicit written authorization constitutes unauthorized access under Section 43(a) and data extraction under Section 43(b). If it causes system instability or data dumping, it invokes criminal liability under Section 66.",
    statutesInvolved: "IT Act 2000 (Sec 43(a), 43(b), Sec 66); ACM Code of Ethics Rule 1.4 & 2.5",
    limitations: "Educational Limitation: Responsible security disclosure programs require students to strictly adhere to official Vulnerability Disclosure Programs (VDPs) like NCIIPC / CERT-In guidelines without unauthorized testing."
  },
  {
    id: 5,
    title: "The Professor's Cloned Profile",
    tag: "Identity Theft & Online Impersonation",
    scenario: "An anonymous student creates an Instagram and WhatsApp business account using the photograph, full academic name, and departmental designation of Dr. Sharma, the Head of Department. The account sends direct messages to first-year students asking them to contribute ₹1,500 each to a private UPI QR code to purchase 'mandatory laboratory evaluation manuals'.",
    questionPrompt: "What statutory charges apply to this impersonation and extortion scheme?",
    options: [
      {
        id: "a",
        text: "Section 66D of the IT Act (Cheating by Personation) and Section 66C (Identity Theft).",
        isCorrect: true
      },
      {
        id: "b",
        text: "Solely Copyright Act Section 63 for copying the profile photo.",
        isCorrect: false
      },
      {
        id: "c",
        text: "Section 43A corporate negligence.",
        isCorrect: false
      },
      {
        id: "d",
        text: "It is deemed harmless student satire and exempt from all legal statutes.",
        isCorrect: false
      }
    ],
    explanation: "Correct Legal Assessment: Using another person's likeness and identity to deceive students into transferring funds constitutes Cheating by Personation under Section 66D of the IT Act, 2000 (up to 3 years imprisonment and fine). Misappropriating personal identifying markers also triggers Section 66C (Identity theft), alongside general penal provisions for criminal cheating.",
    statutesInvolved: "IT Act 2000 (Sec 66C, Sec 66D); Indian Penal Code / Bharatiya Nyaya Sanhita",
    limitations: "Educational Limitation: The platform intermediary is also mandated under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 to take down the impersonating account within 24–36 hours of notification."
  }
];

const QUIZ_QUESTIONS = [
  {
    question: "Under Section 66 of the Information Technology Act, 2000, what is the maximum term of imprisonment for computer-related offences (hacking)?",
    options: [
      "Up to 1 year",
      "Up to 3 years, or with fine up to ₹5 lakh, or both",
      "Up to 7 years without option of fine",
      "Life imprisonment"
    ],
    correctIndex: 1,
    explanation: "Statutory Citation: Under Section 66 of the IT Act, 2000, if any person dishonestly or fraudulently does any act referred to in Section 43, they shall be punishable with imprisonment for a term which may extend to three years, or with fine which may extend to five lakh rupees, or with both."
  },
  {
    question: "What is the critical legal difference between Section 43 and Section 66 of the IT Act, 2000?",
    options: [
      "Section 43 applies to foreign nationals, while Section 66 applies only to Indian citizens.",
      "Section 43 provides for civil liability and compensation, whereas Section 66 penalizes acts done dishonestly or fraudulently with criminal imprisonment and fines.",
      "Section 43 regulates hardware maintenance, while Section 66 regulates software updates.",
      "There is no difference; both are purely administrative penalties."
    ],
    correctIndex: 1,
    explanation: "Legal Distinction: Section 43 is a civil remedy establishing financial compensation for damage to computers (adjudicated under Section 46). Section 66 requires criminal intent ('dishonestly' or 'fraudulently') and imposes penal imprisonment up to 3 years."
  },
  {
    question: "Under Section 63B of the Copyright Act, 1957, what is the penalty for knowingly using an infringing copy of a computer programme on a computer?",
    options: [
      "Only a verbal warning from the software distributor.",
      "Imprisonment of not less than 7 days up to 3 years, and fine of not less than ₹50,000 up to ₹2 lakh.",
      "A flat administrative penalty of ₹500.",
      "Mandatory permanent confiscation of the building where the computer is situated."
    ],
    correctIndex: 1,
    explanation: "Statutory Citation: Section 63B of the Copyright Act, 1957 provides that any person who knowingly makes use on a computer of an infringing copy of a computer programme shall be punished with imprisonment for not less than 7 days up to 3 years and fine not less than ₹50,000 up to ₹2,00,000."
  },
  {
    question: "Which statutory provision in the IT Act, 2000 specifically penalizes identity theft involving unauthorized use of electronic signatures, passwords, or unique identification features?",
    options: [
      "Section 66C",
      "Section 43A",
      "Section 67B",
      "Section 79"
    ],
    correctIndex: 0,
    explanation: "Statutory Citation: Section 66C of the IT Act, 2000 addresses identity theft, prescribing imprisonment for up to 3 years and a fine of up to ₹1 lakh for fraudulent use of another person's password, electronic signature, or biometric feature."
  },
  {
    question: "Which of the following activities is permitted as a statutory exemption (non-infringing act) under Section 52(1)(aa) of the Copyright Act, 1957?",
    options: [
      "Uploading cracked software to public torrent trackers for other students to download.",
      "Making a backup copy of a lawfully acquired computer programme purely as temporary protection against loss or damage.",
      "Reselling an OEM software license key to multiple third-party buyers.",
      "Distributing a decompiled commercial application online under a fictitious open-source name."
    ],
    correctIndex: 1,
    explanation: "Statutory Citation: Section 52(1)(aa) of the Copyright Act, 1957 specifically shields the lawful possessor of a copy of a computer programme who creates a backup copy purely as temporary protection against loss, destruction, or damage."
  },
  {
    question: "What fundamental element separates legal 'Ethical Hacking' (authorized penetration testing) from unlawful computer intrusion under Indian law?",
    options: [
      "The choice of operating system (e.g. using Kali Linux makes it automatically legal).",
      "Prior written authorization, defined scope of testing, and adherence to legal agreements from the system owner.",
      "Whether the penetration tester is below 25 years of age.",
      "Whether the security tester publicly posts the discovered passwords on social media."
    ],
    correctIndex: 1,
    explanation: "Core Legal Principle: Authorization is the bedrock of cybersecurity law. Without explicit, prior written consent from the authorized asset owner, testing or probing any system violates Section 43/66 of the IT Act, 2000, regardless of the tester's intentions."
  },
  {
    question: "Under Section 66D of the IT Act, 2000, what offence is defined as 'Cheating by personation by using computer resource'?",
    options: [
      "Playing video games with an avatar that has a fantasy name.",
      "Impersonating another person via email, websites, or messaging devices to cheat or defraud victims (e.g., phishing).",
      "Upgrading computer RAM without notifying the motherboard manufacturer.",
      "Purchasing computer components under an educational discount."
    ],
    correctIndex: 1,
    explanation: "Statutory Citation: Section 66D punishes whoever by means of any computer resource or communication device cheats by personating, with imprisonment up to 3 years and a fine up to ₹1,00,000."
  },
  {
    question: "What is the primary official portal in India where citizens can report cybercrime incidents directly to law enforcement agencies?",
    options: [
      "www.cybercrime.gov.in (and National Helpline 1930)",
      "www.socialmediahelp.com",
      "www.freeinternetsafety.net",
      "www.wikipedia.org"
    ],
    correctIndex: 0,
    explanation: "Official Resource: The Ministry of Home Affairs (MHA), Government of India operates the National Cyber Crime Reporting Portal at https://cybercrime.gov.in and the national citizen financial cyber fraud reporting helpline at 1930."
  },
  {
    question: "Under Section 70 of the Information Technology Act, 2000, what is the maximum penalty for securing or attempting to secure unauthorized access to a 'Protected System' (Critical Information Infrastructure)?",
    options: [
      "Community service for 1 week",
      "Imprisonment for a term which may extend to ten years and fine",
      "A written apology letter to the district magistrate",
      "A fine of ₹500 only"
    ],
    correctIndex: 1,
    explanation: "Statutory Citation: Section 70(3) of the IT Act, 2000 prescribes imprisonment for a term which may extend to 10 years and fine for securing or attempting unauthorized access to designated Critical Information Infrastructure."
  },
  {
    question: "Why does running cracked software (often bundled with keygens and patchers) pose a severe cybersecurity risk beyond copyright liability?",
    options: [
      "Cracked software binaries often contain trojans, spyware, infostealers, or ransomware droppers embedded to evade antivirus software.",
      "Computer monitors can physically explode from running pirated software.",
      "It causes the computer keyboard to permanently reverse its layout.",
      "Internet broadband speeds are legally reduced to zero by the electricity board."
    ],
    correctIndex: 0,
    explanation: "Technical Cybersecurity Reality: Cybersecurity research consistently shows that cracked software and keygen utilities from unauthorized sources frequently distribute malicious payloads, including credential stealers, keyloggers, and ransomware."
  },
  {
    question: "What is the Adjudicating Officer's statutory role under Section 46 of the Information Technology Act, 2000?",
    options: [
      "To inspect computer factories for physical manufacturing defects.",
      "To hold inquiries and adjudicate civil contraventions under Chapter IX of the IT Act (such as Section 43 claims for compensation).",
      "To sell software licenses on behalf of private companies.",
      "To manage college student admissions."
    ],
    correctIndex: 1,
    explanation: "Statutory Framework: Under Section 46 of the IT Act, the Central or State Government appoints an Adjudicating Officer (typically Secretary of IT) to adjudicate claims for compensation and penalties for civil contraventions under Section 43."
  },
  {
    question: "Which of the following practices is recommended for preserving digital evidence following a suspected cyber intrusion?",
    options: [
      "Immediately format all hard drives and reinstall the operating system.",
      "Preserve intact server access logs, firewall records, original email headers with timestamps, and avoid tampering with the victim system.",
      "Delete all logs to make the computer run faster.",
      "Reply aggressively to the cyber attacker to taunt them."
    ],
    correctIndex: 1,
    explanation: "Forensic Evidence Hygiene: Proper incident handling requires maintaining the forensic chain of custody: preserving unaltered server logs, network captures, original email headers (.eml), and cryptographic hash checksums for law enforcement examination."
  }
];

// --- APP STATE & INITIALIZATION ---

let currentFilter = "all";
let currentSearchTerm = "";
let currentLawTab = "all";

// Quiz State
let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnsweredState = [];

document.addEventListener("DOMContentLoaded", () => {
  renderCrimes();
  renderStatutes();
  renderCaseStudies();
  initQuiz();
  setupEventListeners();
  updateSearchCount();
});

// --- RENDER FUNCTIONS ---

function renderCrimes() {
  const container = document.getElementById("crimesGrid");
  if (!container) return;

  const filtered = CYBERCRIMES_DATA.filter(item => {
    const matchesFilter = (currentFilter === "all") || (item.category === currentFilter);
    const matchesSearch = !currentSearchTerm || 
      item.title.toLowerCase().includes(currentSearchTerm) ||
      item.shortDesc.toLowerCase().includes(currentSearchTerm) ||
      item.statuteRef.toLowerCase().includes(currentSearchTerm) ||
      item.scenario.toLowerCase().includes(currentSearchTerm);
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
        <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 0.5rem;">No cybercrime categories match your query "${escapeHtml(currentSearchTerm)}".</p>
        <button class="btn-secondary" onclick="resetSearchAndFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="crime-card" data-category="${item.category}">
      <div class="crime-header">
        <div class="crime-icon-box" aria-hidden="true">${item.icon}</div>
        <div class="crime-header-text">
          <span class="crime-tag">${item.typeTag}</span>
          <h3 class="crime-title">${highlightMatch(item.title, currentSearchTerm)}</h3>
        </div>
      </div>
      <p class="crime-description">${highlightMatch(item.shortDesc, currentSearchTerm)}</p>
      
      <div class="crime-example-box">
        <strong>Realistic Fictional Scenario</strong>
        ${highlightMatch(item.scenario, currentSearchTerm)}
      </div>

      <div class="crime-meta-grid">
        <div class="crime-meta-item">
          <span class="crime-meta-label">System & Human Impact</span>
          <span class="crime-meta-value">${item.impact}</span>
        </div>
        <div class="crime-meta-item">
          <span class="crime-meta-label">Preventive Hygiene</span>
          <span class="crime-meta-value">${item.prevention}</span>
        </div>
      </div>

      <div class="crime-statute-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        <span>${highlightMatch(item.statuteRef, currentSearchTerm)}</span>
      </div>
    </article>
  `).join("");
}

function renderStatutes() {
  const container = document.getElementById("statutesList");
  if (!container) return;

  const filtered = STATUTORY_PROVISIONS_DATA.filter(statute => {
    const matchesTab = (currentLawTab === "all") || 
      (currentLawTab === "itact" && statute.act.includes("IT Act")) ||
      (currentLawTab === "copyright" && statute.act.includes("Copyright")) ||
      (currentLawTab === "criminal" && statute.type === "criminal") ||
      (currentLawTab === "civil" && statute.type === "civil");

    const matchesSearch = !currentSearchTerm ||
      statute.section.toLowerCase().includes(currentSearchTerm) ||
      statute.name.toLowerCase().includes(currentSearchTerm) ||
      statute.quote.toLowerCase().includes(currentSearchTerm) ||
      statute.explanation.toLowerCase().includes(currentSearchTerm) ||
      statute.penalty.toLowerCase().includes(currentSearchTerm);

    return matchesTab && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
        <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 0.5rem;">No statutory provisions match your query.</p>
        <button class="btn-secondary" onclick="resetSearchAndFilters()">Reset Search</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="statute-card" id="statute-${item.section.replace(/\s+/g, '-').toLowerCase()}">
      <div class="statute-header">
        <div class="statute-title-group">
          <span class="statute-badge">${item.act} &bull; ${highlightMatch(item.section, currentSearchTerm)}</span>
          <h4 class="statute-name">${highlightMatch(item.name, currentSearchTerm)}</h4>
        </div>
        <span class="statute-type-tag ${item.type}">
          ${item.type === 'criminal' ? 'Criminal Offence (Penal)' : 'Civil Liability (Damages)'}
        </span>
      </div>

      <div class="statute-body">
        <div class="statute-text-block">
          <h5>Statutory Text Extract (Official India Code)</h5>
          <blockquote class="statute-quote">${highlightMatch(item.quote, currentSearchTerm)}</blockquote>
          <h5>Legal Meaning & Applicability</h5>
          <p class="statute-explanation">${highlightMatch(item.explanation, currentSearchTerm)}</p>
        </div>

        <div class="statute-penalties-box">
          <div>
            <div class="penalty-item">
              <div class="penalty-item-label">Nature of Liability / Forum</div>
              <div class="penalty-item-value">${item.remedyType}</div>
            </div>
            <div class="penalty-item">
              <div class="penalty-item-label">Prescribed Statutory Penalty / Compensation</div>
              <div class="penalty-item-value" style="color: var(--accent-cyan-light);">${item.penalty}</div>
            </div>
            <div class="penalty-item">
              <div class="penalty-item-label">Mental State (Mens Rea) Requirement</div>
              <div class="penalty-item-value" style="font-size: 0.88rem; color: var(--text-secondary);">${item.mensRea}</div>
            </div>
          </div>

          <a href="${item.indiaCodeUrl}" target="_blank" rel="noopener noreferrer" class="statute-source-link">
            <span>Verify on Official India Code Portal</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCaseStudies() {
  const container = document.getElementById("caseStudiesContainer");
  if (!container) return;

  container.innerHTML = CASE_STUDIES_DATA.map((cs, index) => `
    <article class="case-study-card" id="case-study-${cs.id}">
      <div class="case-study-header">
        <span class="case-number-badge">Case Scenario 0${cs.id} &bull; ${cs.tag}</span>
      </div>
      <h3 class="case-title">${cs.title}</h3>

      <div class="case-scenario-box">
        <strong>Fictional Scenario:</strong> ${cs.scenario}
      </div>

      <div class="case-question-prompt">
        ${cs.questionPrompt}
      </div>

      <div class="case-options-list" id="case-options-${cs.id}">
        ${cs.options.map(opt => `
          <button type="button" class="case-option-btn" onclick="selectCaseOption(${cs.id}, '${opt.id}')" data-option-id="${opt.id}">
            <span style="font-weight: 700; color: var(--accent-cyan-light);">${opt.id.toUpperCase()}.</span>
            <span>${opt.text}</span>
          </button>
        `).join("")}
      </div>

      <div class="case-actions-bar">
        <button type="button" class="btn-primary" id="btn-check-case-${cs.id}" onclick="evaluateCaseStudy(${cs.id})">
          Analyze & Check Legal Answer
        </button>
      </div>

      <div class="case-explanation-panel" id="case-explanation-${cs.id}">
        <div id="case-status-tag-${cs.id}"></div>
        <div class="analysis-text" id="case-analysis-text-${cs.id}"></div>
        <div class="analysis-statutes">
          <strong>Key Statutory References:</strong> ${cs.statutesInvolved}
        </div>
        <div class="analysis-limitation">
          <strong>Educational Limitation & Context:</strong> ${cs.limitations}
        </div>
      </div>
    </article>
  `).join("");
}

let selectedCaseAnswers = {};

window.selectCaseOption = function(caseId, optionId) {
  selectedCaseAnswers[caseId] = optionId;
  const optionsContainer = document.getElementById(`case-options-${caseId}`);
  if (!optionsContainer) return;

  const buttons = optionsContainer.querySelectorAll(".case-option-btn");
  buttons.forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.optionId === optionId);
  });
};

window.evaluateCaseStudy = function(caseId) {
  const chosenOptionId = selectedCaseAnswers[caseId];
  if (!chosenOptionId) {
    alert("Please select one of the legal analysis choices first.");
    return;
  }

  const caseData = CASE_STUDIES_DATA.find(c => c.id === caseId);
  if (!caseData) return;

  const selectedOpt = caseData.options.find(o => o.id === chosenOptionId);
  const correctOpt = caseData.options.find(o => o.isCorrect);
  const isCorrect = selectedOpt && selectedOpt.isCorrect;

  const optionsContainer = document.getElementById(`case-options-${caseId}`);
  const buttons = optionsContainer.querySelectorAll(".case-option-btn");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.optionId === correctOpt.id) {
      btn.classList.add("correct");
    } else if (btn.dataset.optionId === chosenOptionId && !isCorrect) {
      btn.classList.add("incorrect");
    }
  });

  const explanationPanel = document.getElementById(`case-explanation-${caseId}`);
  const statusTag = document.getElementById(`case-status-tag-${caseId}`);
  const analysisText = document.getElementById(`case-analysis-text-${caseId}`);
  const checkBtn = document.getElementById(`btn-check-case-${caseId}`);

  if (isCorrect) {
    statusTag.className = "analysis-status-tag correct";
    statusTag.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>Correct Legal Evaluation</span>
    `;
  } else {
    statusTag.className = "analysis-status-tag incorrect";
    statusTag.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      <span>Incorrect Assessment — Review Statutory Analysis</span>
    `;
  }

  analysisText.textContent = caseData.explanation;
  explanationPanel.classList.add("show");
  checkBtn.style.display = "none";

  const card = document.getElementById(`case-study-${caseId}`);
  if (card) card.classList.add("answered");
};

// --- QUIZ LOGIC ---

function initQuiz() {
  quizCurrentIndex = 0;
  quizScore = 0;
  quizAnsweredState = new Array(QUIZ_QUESTIONS.length).fill(null);
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[quizCurrentIndex];
  const qNum = quizCurrentIndex + 1;
  const total = QUIZ_QUESTIONS.length;

  // Update Progress Bar
  const progressBar = document.getElementById("quizProgressBar");
  if (progressBar) {
    const pct = ((qNum - 1) / total) * 100;
    progressBar.style.width = `${pct}%`;
  }

  // Update Headers
  const counterEl = document.getElementById("quizCounter");
  const scoreEl = document.getElementById("quizLiveScore");
  if (counterEl) counterEl.textContent = `Question ${qNum} of ${total}`;
  if (scoreEl) scoreEl.textContent = `Score: ${quizScore} / ${quizCurrentIndex}`;

  const questionEl = document.getElementById("quizQuestionText");
  const optionsEl = document.getElementById("quizOptionsGrid");
  const explanationEl = document.getElementById("quizExplanation");
  const nextBtn = document.getElementById("quizNextBtn");

  if (questionEl) questionEl.textContent = q.question;
  if (explanationEl) {
    explanationEl.classList.remove("show");
    explanationEl.innerHTML = "";
  }
  if (nextBtn) {
    nextBtn.style.display = "none";
    nextBtn.textContent = (qNum === total) ? "View Final Results" : "Next Question";
  }

  if (optionsEl) {
    optionsEl.innerHTML = q.options.map((opt, idx) => `
      <button type="button" class="quiz-option-button" onclick="selectQuizOption(${idx})" data-idx="${idx}">
        <span style="font-weight:700; color:var(--accent-cyan-light); min-width:1.5rem;">${String.fromCharCode(65 + idx)}.</span>
        <span>${escapeHtml(opt)}</span>
      </button>
    `).join("");
  }

  // Show active view, hide result view
  const activeView = document.getElementById("quizActiveView");
  const resultView = document.getElementById("quizResultView");
  if (activeView) activeView.style.display = "block";
  if (resultView) resultView.classList.remove("show");
}

window.selectQuizOption = function(selectedIndex) {
  if (quizAnsweredState[quizCurrentIndex] !== null) return; // Already answered

  const q = QUIZ_QUESTIONS[quizCurrentIndex];
  quizAnsweredState[quizCurrentIndex] = selectedIndex;

  const isCorrect = (selectedIndex === q.correctIndex);
  if (isCorrect) quizScore++;

  const optionsEl = document.getElementById("quizOptionsGrid");
  const buttons = optionsEl.querySelectorAll(".quiz-option-button");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex && !isCorrect) {
      btn.classList.add("wrong");
    }
  });

  const explanationEl = document.getElementById("quizExplanation");
  if (explanationEl) {
    explanationEl.innerHTML = `
      <div style="font-weight: 700; color: ${isCorrect ? '#34d399' : '#f87171'}; margin-bottom: 0.35rem;">
        ${isCorrect ? '✓ Correct Answer' : '✗ Incorrect Answer'}
      </div>
      <div>${q.explanation}</div>
    `;
    explanationEl.classList.add("show");
  }

  const nextBtn = document.getElementById("quizNextBtn");
  if (nextBtn) nextBtn.style.display = "inline-flex";

  const scoreEl = document.getElementById("quizLiveScore");
  if (scoreEl) scoreEl.textContent = `Score: ${quizScore} / ${quizCurrentIndex + 1}`;
};

window.nextQuizQuestion = function() {
  if (quizCurrentIndex < QUIZ_QUESTIONS.length - 1) {
    quizCurrentIndex++;
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
};

function showQuizResults() {
  const activeView = document.getElementById("quizActiveView");
  const resultView = document.getElementById("quizResultView");
  const progressBar = document.getElementById("quizProgressBar");

  if (progressBar) progressBar.style.width = "100%";
  if (activeView) activeView.style.display = "none";
  if (resultView) {
    resultView.classList.add("show");

    const total = QUIZ_QUESTIONS.length;
    const scoreNumEl = document.getElementById("quizFinalScore");
    const verdictEl = document.getElementById("quizVerdict");
    const feedbackEl = document.getElementById("quizFeedback");

    if (scoreNumEl) scoreNumEl.textContent = quizScore;

    const percentage = Math.round((quizScore / total) * 100);
    if (percentage >= 80) {
      verdictEl.textContent = "Excellent Legal & Cyber Hygiene Mastery!";
      verdictEl.style.color = "#34d399";
      feedbackEl.textContent = `Outstanding score (${percentage}%). You have demonstrated a thorough understanding of the Information Technology Act, 2000, the Copyright Act, 1957, civil compensation mechanisms, and professional cybersecurity ethics.`;
    } else if (percentage >= 50) {
      verdictEl.textContent = "Good Foundational Understanding";
      verdictEl.style.color = "#38bdf8";
      feedbackEl.textContent = `Satisfactory score (${percentage}%). You understand the essentials of Indian cyber statutory provisions, but consider reviewing Section 43 civil liability distinctions and Section 63B software piracy provisions.`;
    } else {
      verdictEl.textContent = "Needs Further Statutory Study";
      verdictEl.style.color = "#f87171";
      feedbackEl.textContent = `You scored ${percentage}%. Review the statutory definitions of Section 66, Section 66C, Section 66D, and Section 52 fair dealing exemptions in the modules above to reinforce your legal awareness.`;
    }
  }
}

window.restartQuiz = function() {
  initQuiz();
};

// --- SIMULATED INCIDENT REPORT GENERATOR ---

window.handleIncidentSubmit = function(e) {
  e.preventDefault();

  const incidentType = document.getElementById("simIncidentType").value;
  const incidentDate = document.getElementById("simIncidentDate").value;
  const targetEnv = document.getElementById("simTargetEnv").value;
  const description = document.getElementById("simDescription").value.trim();
  const ioc = document.getElementById("simIoC").value.trim();
  const actionTaken = document.getElementById("simActionTaken").value.trim();

  // Basic Validation
  if (!incidentType || !incidentDate || !targetEnv || !description || !actionTaken) {
    alert("Please fill in all mandatory fields marked with an asterisk (*).");
    return;
  }

  // Safety Sanitization: Prevent accidental real Aadhaar or card numbers
  const hasAadhaarPattern = /\b\d{4}\s?\d{4}\s?\d{4}\b/.test(description);
  const hasCreditCardPattern = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/.test(description);
  if (hasAadhaarPattern || hasCreditCardPattern) {
    alert("Warning: This is an educational simulator only. Please do NOT input actual Aadhaar numbers, real credit card details, or sensitive live credentials!");
    return;
  }

  // Generate Simulation Reference Code
  const simDocketId = "EDU-SIM-" + Math.floor(100000 + Math.random() * 900000);
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  // Map Applicable Statutes based on type
  let applicableStatutes = "IT Act, 2000 — Section 43 & Section 66";
  let triageCategory = "Medium Priority Educational Case";

  if (incidentType.includes("Piracy") || incidentType.includes("License")) {
    applicableStatutes = "Copyright Act, 1957 — Section 51, 63, 63B; IT Act Section 43(a)";
    triageCategory = "Intellectual Property & Licensing Infringement";
  } else if (incidentType.includes("Phishing") || incidentType.includes("Impersonation")) {
    applicableStatutes = "IT Act, 2000 — Section 66C (Identity Theft) & Section 66D (Cheating by Personation)";
    triageCategory = "Social Engineering & Credential Harvesting";
  } else if (incidentType.includes("Ransomware") || incidentType.includes("Destruction")) {
    applicableStatutes = "IT Act, 2000 — Section 43(c)/(d) & Section 66 (Computer Contaminant & System Disruption)";
    triageCategory = "Critical Cyber Intrusion / Malware Infection";
  } else if (incidentType.includes("Data Theft")) {
    applicableStatutes = "IT Act, 2000 — Section 43(b) (Data Extraction) & Section 66/66B; Section 43A";
    triageCategory = "Unauthorized Data Exfiltration & Privacy Breach";
  }

  const docketHtml = `
    <div class="report-docket">
      <div class="report-watermark">Educational Simulation</div>
      
      <div class="docket-header">
        <div>
          <div class="docket-title">FIRST INCIDENT TRIAGE DOCKET (ACADEMIC PREVIEW)</div>
          <div class="docket-ref">DOCKET ID: ${simDocketId} &bull; GENERATED: ${timestamp} IST</div>
        </div>
        <div style="font-size:0.85rem; font-weight:700; color:#38bdf8; background:rgba(56,189,248,0.1); padding:0.4rem 0.8rem; border-radius:4px; border:1px solid rgba(56,189,248,0.3);">
          ${triageCategory}
        </div>
      </div>

      <div class="docket-grid">
        <div>
          <div class="docket-field-label">Reported Incident Classification</div>
          <div class="docket-field-val">${escapeHtml(incidentType)}</div>
        </div>
        <div>
          <div class="docket-field-label">Approximate Date & Time of Occurrence</div>
          <div class="docket-field-val">${escapeHtml(incidentDate)}</div>
        </div>
        <div>
          <div class="docket-field-label">Impacted Operating Environment</div>
          <div class="docket-field-val">${escapeHtml(targetEnv)}</div>
        </div>
        <div>
          <div class="docket-field-label">Applicable Indian Statutory Reference</div>
          <div class="docket-field-val" style="color:var(--accent-cyan-light); font-weight:700;">${applicableStatutes}</div>
        </div>
      </div>

      <div class="docket-section">
        <div class="docket-section-title">Incident Summary & Narrative Observations</div>
        <div style="color:var(--text-secondary); line-height:1.6; white-space:pre-wrap;">${escapeHtml(description)}</div>
      </div>

      ${ioc ? `
      <div class="docket-section">
        <div class="docket-section-title">Suspected Indicators of Compromise (IoCs) & Signatures</div>
        <div style="color:var(--text-secondary); font-family:var(--font-mono); font-size:0.86rem; background:rgba(0,0,0,0.3); padding:0.75rem; border-radius:4px;">${escapeHtml(ioc)}</div>
      </div>
      ` : ''}

      <div class="docket-section">
        <div class="docket-section-title">Immediate Containment Action Documented</div>
        <div style="color:var(--text-secondary); line-height:1.6;">${escapeHtml(actionTaken)}</div>
      </div>

      <div class="docket-section">
        <div class="docket-section-title">Recommended Cyber Law & Forensic Next Steps</div>
        <ul style="margin-left:1.25rem; color:var(--text-secondary); font-size:0.88rem; line-height:1.6;">
          <li>Preserve unaltered volatile memory dumps, system event logs (Windows Event Logs / Linux syslog), and packet captures.</li>
          <li>For real criminal cybercrimes in India, lodge an official formal complaint through the National Cyber Crime Reporting Portal (<strong>https://cybercrime.gov.in</strong>) or dial National Helpline <strong>1930</strong>.</li>
          <li>Under Section 70B of the IT Act, report critical cybersecurity incidents to CERT-In (<strong>info@cert-in.org.in</strong>) within mandated reporting windows.</li>
        </ul>
      </div>

      <div class="docket-disclaimer">
        ⚠️ <strong>STATUTORY & EDUCATIONAL DISCLAIMER:</strong> This docket is a purely local client-side educational simulation generated for college micro-project demonstration. No data has been transmitted across the internet, logged to external servers, or filed with law enforcement. It does not constitute a First Information Report (FIR) or legal advice.
      </div>

      <div class="docket-actions">
        <button type="button" class="btn-secondary" onclick="window.print()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Print / Save PDF
        </button>
        <button type="button" class="btn-primary" onclick="resetIncidentForm()">
          Create Another Simulation
        </button>
      </div>
    </div>
  `;

  const previewArea = document.getElementById("reportPreviewArea");
  if (previewArea) {
    previewArea.innerHTML = docketHtml;
    previewArea.classList.add("show");
    previewArea.scrollIntoView({ behavior: "smooth" });
  }
};

window.resetIncidentForm = function() {
  document.getElementById("incidentForm").reset();
  const previewArea = document.getElementById("reportPreviewArea");
  if (previewArea) {
    previewArea.classList.remove("show");
    previewArea.innerHTML = "";
  }
};

// --- SEARCH & FILTER CONTROLLERS ---

function setupEventListeners() {
  // Live Search Input
  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value.trim().toLowerCase();
      renderCrimes();
      renderStatutes();
      updateSearchCount();
    });
  }

  // Category Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderCrimes();
      updateSearchCount();
    });
  });

  // Law Tabs
  const lawTabBtns = document.querySelectorAll(".law-tab-btn");
  lawTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      lawTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentLawTab = btn.dataset.lawTab;
      renderStatutes();
    });
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
}

function updateSearchCount() {
  const countEl = document.getElementById("searchResultCount");
  if (!countEl) return;

  const crimesCount = CYBERCRIMES_DATA.filter(item => {
    const matchesFilter = (currentFilter === "all") || (item.category === currentFilter);
    const matchesSearch = !currentSearchTerm || 
      item.title.toLowerCase().includes(currentSearchTerm) ||
      item.shortDesc.toLowerCase().includes(currentSearchTerm) ||
      item.statuteRef.toLowerCase().includes(currentSearchTerm);
    return matchesFilter && matchesSearch;
  }).length;

  const statutesCount = STATUTORY_PROVISIONS_DATA.filter(item => {
    return !currentSearchTerm ||
      item.section.toLowerCase().includes(currentSearchTerm) ||
      item.name.toLowerCase().includes(currentSearchTerm) ||
      item.quote.toLowerCase().includes(currentSearchTerm);
  }).length;

  if (currentSearchTerm) {
    countEl.textContent = `Found ${crimesCount} crime module(s) and ${statutesCount} statutory section(s) matching "${currentSearchTerm}"`;
  } else {
    countEl.textContent = `Showing all 7 crime categories and 10 statutory provisions`;
  }
}

window.resetSearchAndFilters = function() {
  currentSearchTerm = "";
  currentFilter = "all";
  currentLawTab = "all";

  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) searchInput.value = "";

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(b => {
    b.classList.toggle("active", b.dataset.filter === "all");
  });

  const lawTabBtns = document.querySelectorAll(".law-tab-btn");
  lawTabBtns.forEach(b => {
    b.classList.toggle("active", b.dataset.lawTab === "all");
  });

  renderCrimes();
  renderStatutes();
  updateSearchCount();
};

// Helper: Escape HTML strings
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper: Highlight matching search terms
function highlightMatch(text, term) {
  if (!term || !text) return escapeHtml(text);
  const escapedText = escapeHtml(text);
  const regex = new RegExp(`(${term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
  return escapedText.replace(regex, `<mark style="background-color:rgba(34,211,238,0.3); color:#ffffff; padding:0 2px; border-radius:2px;">$1</mark>`);
}
