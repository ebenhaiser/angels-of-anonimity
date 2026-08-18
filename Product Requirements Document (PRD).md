# Product Requirements Document (PRD)
## Angels of Anonymity — IT & Multimedia Team Website

**Version:** 1.0  
**Date:** 18 August 2026  
**Product Type:** Static Company Profile Website  
**Team:** Angels of Anonymity

---

# 1. Product Overview

**Angels of Anonymity** adalah tim yang bergerak di bidang **Information Technology dan Multimedia**, dibentuk oleh tiga anggota:

1. **Ebenhaiser Caprisiano**
2. **Omega Patria**
3. **Gilbert Ngilly**

Website ini berfungsi sebagai **digital company profile / team portfolio** untuk memperkenalkan Angels of Anonymity, menampilkan kemampuan dan pengalaman tim, dokumentasi kompetisi yang pernah diikuti, serta menunjukkan hasil karya/proyek.

Website **bukan platform freelance**, marketplace, atau sistem pemesanan jasa. Website hanya berfungsi sebagai **company/team profile dan portfolio showcase**.

Tujuan utamanya adalah membuat Angels of Anonymity terlihat:

> **Professional. Modern. Technical. Creative. Memorable.**

---

# 2. Product Vision

Membangun website yang memberikan kesan bahwa Angels of Anonymity merupakan tim IT & Multimedia yang:

- kompeten secara teknis,
- kreatif dalam menghasilkan karya,
- berpengalaman mengikuti kompetisi,
- mampu bekerja sebagai sebuah tim,
- memiliki identitas visual yang kuat,
- dan memiliki dokumentasi perjalanan yang jelas.

Website harus terasa seperti **digital identity sebuah tech team**, bukan template company profile biasa.

---

# 3. Design Direction

## 3.1 Overall Style

Konsep visual:

**Modern + Minimal + Futuristic + Interactive**

Karakter visual:

- clean
- banyak whitespace
- typography kuat
- subtle gradient
- glassmorphism secukupnya
- smooth animation
- micro-interactions
- modern cards
- responsive layout
- tidak terlalu ramai

Website harus terlihat keren ketika pertama kali dibuka, tetapi tetap profesional.

---

# 4. Core Design Principle

### "Simple at first glance, interesting when explored."

User harus melihat halaman sebagai website yang simple.

Namun ketika user:

- scroll,
- hover card,
- membuka project,
- melihat member,
- berpindah section,

akan muncul animasi dan interaksi kecil yang membuat website terasa hidup.

Animasi **tidak boleh mengganggu usability**.

---

# 5. Target Audience

Website ditujukan kepada:

### Primary Audience

- calon client
- perusahaan
- komunitas IT
- penyelenggara kompetisi
- recruiter
- partner/project collaborator

### Secondary Audience

- teman/komunitas
- calon anggota tim
- peserta kompetisi lain
- orang yang ingin melihat portfolio tim

---

# 6. Website Goals

Website harus mampu menjawab pertanyaan berikut dalam waktu singkat:

### "Siapa kalian?"

→ Angels of Anonymity

### "Kalian bergerak di bidang apa?"

→ IT & Multimedia

### "Siapa anggotanya?"

→ Ebenhaiser, Omega, Gilbert

### "Apa yang pernah kalian kerjakan?"

→ Portfolio / Projects

### "Apa pengalaman kalian?"

→ Experience

### "Pernah ikut kompetisi?"

→ Competition

### "Bagaimana cara melihat karya kalian?"

→ Projects / Gallery

### "Bagaimana cara menghubungi kalian?"

→ Contact / Social Links

---

# 7. Information Architecture

Struktur utama website:

```text
Home
│
├── About
│
├── Team
│
├── Expertise
│
├── Projects
│
├── Experience
│
├── Competitions
│
└── Contact
```

Website dapat menggunakan **single-page architecture** dengan navigation yang melakukan smooth scrolling ke masing-masing section.

---

# 8. Navigation

Navbar:

```text
[AOA Logo]

Home
About
Team
Expertise
Projects
Experience
Competition
Contact
```

Pada desktop:

- navbar sticky
- transparent saat berada di hero
- berubah menjadi semi-transparent / glass saat scrolling
- smooth scroll

Pada mobile:

```text
[AOA]              [☰]
```

Menu dibuka dengan animated mobile navigation.

---

# 9. Hero Section

Hero adalah bagian paling penting.

## Content

Headline:

> **ANGELS OF ANONYMITY**

Subheadline:

> **IT & Multimedia Team**

Short description:

> Building technology, creating experiences, and turning ideas into reality.

CTA:

```text
Explore Our Work →
Meet The Team
```

---

# 10. Hero Visual

Hero harus memiliki visual yang menarik tetapi tidak berat.

Possible visual:

- animated gradient
- floating particles
- abstract geometric shapes
- grid background
- glowing lines
- animated logo
- cursor interaction

Contoh konsep:

```text
             ✦
      ╱             ╲

       ANGELS
          OF
      ANONYMITY

     IT & MULTIMEDIA

        ↓ Explore
```

Background dapat menggunakan:

- animated grid
- subtle noise
- floating particles
- gradient blobs

Animasi harus subtle.

---

# 11. Intro / About Section

Judul:

> **Who We Are**

Deskripsi singkat mengenai Angels of Anonymity.

Contoh:

> Angels of Anonymity is an independent IT & Multimedia team focused on technology, digital creativity, and problem solving.

Kemudian tampilkan beberapa highlight:

```text
01
Technology

02
Creativity

03
Problem Solving
```

Setiap item dapat memiliki hover animation.

---

# 12. Team Section

Judul:

> **Meet The Team**

Menampilkan tiga anggota.

## Member 1

**Ebenhaiser Caprisiano**

Role:

> IT / Software Development / Creative Technology

## Member 2

**Omega Patria**

Role:

> IT / Technology

## Member 3

**Gilbert Ngilly**

Role:

> IT / Multimedia

Role final sebaiknya dibuat melalui konfigurasi JavaScript agar dapat diubah tanpa mengedit HTML.

---

# 13. Team Card Interaction

Setiap member menggunakan card.

Default:

```text
[Photo / Avatar]

Ebenhaiser Caprisiano
IT / Software Development
```

Hover:

- card sedikit naik
- image zoom sangat kecil
- border glow
- informasi tambahan muncul
- social link muncul

Contoh:

```text
Ebenhaiser Caprisiano

Software Developer
Creative Technologist

[GitHub] [LinkedIn]
```

Mobile menggunakan tap interaction.

---

# 14. Expertise Section

Judul:

> **What We Do**

Kategori utama:

### Software Development

- Web Development
- Application Development
- Backend Development
- Database
- API
- Automation

### IT & Technology

- System Development
- IT Solutions
- Data
- AI / Machine Learning
- Technical Research

### Multimedia

- Graphic Design
- Video
- Motion
- Creative Content
- Digital Media

Kategori dibuat dalam bentuk interactive cards.

---

# 15. Expertise Animation

Ketika user melakukan hover:

```text
Software Development
        ↓
Web
Backend
Database
API
Automation
```

Detail dapat muncul menggunakan:

- fade
- slide
- icon animation
- subtle background effect

Jangan menggunakan animasi berlebihan.

---

# 16. Projects Section

Judul:

> **Selected Works**

Menampilkan proyek-proyek yang pernah dibuat.

Setiap project memiliki:

```text
Project Image

Project Name
Category

Short Description

[View Project →]
```

Contoh kategori:

```text
Web
Software
AI
Multimedia
Creative
Research
```

---

# 17. Project Filtering

User dapat melakukan filter:

```text
All
Web
Software
AI
Multimedia
Other
```

Filter menggunakan JavaScript.

Tidak diperlukan backend.

---

# 18. Project Detail Interaction

Ketika user memilih project:

### Option A — Modal

Project dibuka menggunakan modal animated.

Isi:

```text
Project Name

Category
Year

Description

Technology:
HTML
CSS
JavaScript
PHP
Laravel
Python
etc.

Role:
...

[External Link]
```

### Option B — Dedicated Page

Jika project memiliki dokumentasi lengkap, dapat diarahkan ke halaman detail.

Untuk versi awal, **modal lebih direkomendasikan** karena website tetap ringan.

---

# 19. Experience Section

Judul:

> **Our Journey**

Berfungsi sebagai timeline pengalaman tim.

Format:

```text
2026
│
├── Project / Event
│
2025
│
├── Project / Event
│
2024
│
└── Project / Event
```

Setiap timeline item:

```text
YEAR

Title
Organization / Event

Description
```

Animasi saat scroll:

- timeline line grows
- item fade-in
- card slide-in

---

# 20. Competition Section

Judul:

> **Competition & Challenges**

Section khusus untuk kompetisi yang pernah diikuti Angels of Anonymity.

Setiap competition card:

```text
[Competition Image]

Competition Name

Year
Category

Result / Achievement

Short Description
```

Contoh status:

```text
Participant
Finalist
Top 10
Winner
Completed
```

---

# 21. Competition Gallery

Jika tersedia dokumentasi:

```text
Competition
├── Photo
├── Certificate
├── Team Photo
├── Event Photo
└── Documentation
```

Gallery dapat menggunakan:

- image modal
- lightbox
- carousel

---

# 22. Statistics / Achievement Strip

Section kecil untuk memberikan visual impact.

Contoh:

```text
03
Team Members

XX
Projects

XX
Competitions

XX
Years Experience
```

Semua angka **berasal dari JS configuration**, bukan hardcoded di HTML.

Angka dapat menggunakan count-up animation ketika masuk viewport.

---

# 23. Philosophy / Quote Section

Optional section untuk memperkuat identity.

Contoh:

> **"Different minds. One direction."**

atau:

> **"We build. We create. We compete."**

Visual:

- fullscreen-ish section
- typography besar
- animated background
- minimal content

---

# 24. Contact Section

Judul:

> **Let's Build Something.**

Description:

> Have an idea, project, or challenge? Let's talk.

Contact bukan berupa form backend.

Karena website static, gunakan external links:

```text
Email
GitHub
LinkedIn
Instagram
YouTube
WhatsApp
```

Jika ingin contact form, versi awal dapat menggunakan external form service.

---

# 25. Footer

Footer:

```text
ANGELS OF ANONYMITY

IT & MULTIMEDIA TEAM

Technology • Creativity • Problem Solving

[Social Links]

© 2026 Angels of Anonymity
All Rights Reserved.
```

Tambahkan:

> Built with curiosity & caffeine.

Opsional, untuk sedikit personality 😄

---

# 26. Interaction Requirements

Website harus memiliki micro-interactions.

## Required

### Smooth Scroll

Navigasi antar section smooth.

### Scroll Reveal

Element muncul ketika memasuki viewport.

### Hover Interaction

Card:

- translate
- scale
- glow
- image movement

### Cursor Interaction

Desktop dapat menggunakan custom cursor ringan.

Contoh:

```text
Normal cursor
      ↓
Hover project
      ↓
Cursor berubah menjadi:
"VIEW"
```

Custom cursor harus otomatis disabled pada mobile/touch device.

---

# 27. Background Interaction

Background dapat menggunakan:

### Animated Grid

Grid bergerak sangat perlahan.

### Particle

Particle bergerak mengikuti mouse secara subtle.

### Gradient Blob

Gradient bergerak perlahan.

### Mouse Parallax

Element background bergerak berdasarkan posisi mouse.

Semua efek harus:

- low CPU
- low GPU
- tidak mengganggu text
- tidak menyebabkan lag

---

# 28. Page Transition

Jika menggunakan single-page:

- section transition menggunakan fade/slide.

Jika nanti menggunakan multi-page:

- gunakan page transition sederhana.

Tidak diperlukan animasi berat.

---

# 29. Loading Animation

Saat website pertama kali dibuka:

```text
AOA

ANGELS OF ANONYMITY
```

Kemudian:

```text
[Loading animation]
        ↓
Website reveal
```

Durasi ideal:

**500–1200 ms**

Jangan membuat user menunggu terlalu lama.

---

# 30. Easter Egg

Optional.

Karena nama tim adalah **Angels of Anonymity**, website dapat memiliki hidden interaction.

Contoh:

Menekan:

```text
A → O → A
```

atau klik logo beberapa kali dapat menghasilkan:

```text
"Anonymous mode activated."
```

Namun fitur ini hanya bonus dan tidak boleh mengganggu fungsi utama website.

---

# 31. Technical Architecture

Website bersifat:

> **100% Static Frontend**

Recommended stack:

```text
HTML5
CSS3
JavaScript ES6+
```

Optional libraries:

```text
GSAP
Lenis
AOS / Intersection Observer
Lucide Icons
```

Namun penggunaan library harus dipertimbangkan agar website tetap lightweight.

---

# 32. Recommended JavaScript Architecture

Data dan konfigurasi **HARUS dipisahkan dari presentation layer**.

Recommended structure:

```text
/angels-of-anonymity
│
├── index.html
│
├── /assets
│   ├── /images
│   ├── /icons
│   └── /fonts
│
├── /css
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
└── /js
    ├── config.js
    ├── data.js
    ├── app.js
    ├── animations.js
    └── components.js
```

---

# 33. config.js

Berisi konfigurasi global.

Contoh struktur:

```javascript
const SITE_CONFIG = {
    siteName: "Angels of Anonymity",
    tagline: "IT & Multimedia Team",
    year: 2026,

    social: {
        github: "",
        linkedin: "",
        instagram: "",
        youtube: ""
    }
};
```

Tujuannya supaya informasi umum website bisa diubah tanpa menyentuh HTML.

---

# 34. data.js

Semua content utama disimpan di data.js.

Contoh:

```javascript
const TEAM = [
    {
        name: "Ebenhaiser Caprisiano",
        role: "IT / Software Development",
        image: "assets/images/eben.jpg",
        bio: "...",
        socials: {
            github: "",
            linkedin: ""
        }
    }
];
```

Projects:

```javascript
const PROJECTS = [
    {
        title: "Project Name",
        category: "Web",
        year: 2026,
        image: "assets/images/project-01.jpg",
        description: "...",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        link: ""
    }
];
```

Competitions:

```javascript
const COMPETITIONS = [
    {
        title: "Competition Name",
        year: 2026,
        category: "IT",
        result: "Finalist",
        image: "assets/images/competition-01.jpg",
        description: "..."
    }
];
```

Experience:

```javascript
const EXPERIENCES = [
    {
        year: 2026,
        title: "Experience Title",
        organization: "Organization",
        description: "..."
    }
];
```

---

# 35. Separation of Concerns

HTML:

> Structure

CSS:

> Visual / Layout

JavaScript:

> Behavior / Interaction

data.js:

> Content

config.js:

> Global Configuration

Contoh:

```text
HTML
  ↓
Component Container
  ↓
JavaScript
  ↓
data.js
  ↓
Render Content
```

Dengan demikian, menambahkan project baru cukup:

```javascript
PROJECTS.push(...)
```

tanpa perlu mengubah HTML secara manual.

---

# 36. Dynamic Rendering

Section berikut sebaiknya dirender menggunakan JavaScript:

- Team
- Expertise
- Projects
- Experience
- Competitions
- Statistics
- Social Links

HTML hanya menyediakan container.

Contoh:

```html
<section id="projects">
    <div id="project-container"></div>
</section>
```

JavaScript:

```text
PROJECTS
   ↓
filter
   ↓
render
   ↓
project cards
```

---

# 37. Responsive Design

Website wajib mendukung:

### Desktop

```text
1440px+
```

### Laptop

```text
1024px – 1439px
```

### Tablet

```text
768px – 1023px
```

### Mobile

```text
320px – 767px
```

Priority:

> Mobile-first responsive behavior.

---

# 38. Mobile Interaction

Pada mobile:

- custom cursor disabled
- hover interaction diganti tap
- navbar menjadi hamburger
- cards menjadi single column
- animations dikurangi
- parallax dikurangi
- particle count dikurangi

Tujuannya:

> **Visual tetap keren tanpa membuat HP panas.**

---

# 39. Performance Requirements

Target:

### Lighthouse

```text
Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 90+
```

Website harus:

- lazy-load images
- menggunakan WebP/AVIF jika memungkinkan
- menghindari video background besar
- menghindari JS bundle berlebihan
- menghindari animasi layout-heavy
- menggunakan `transform` dan `opacity` untuk animasi

---

# 40. Accessibility

Website harus memperhatikan:

- semantic HTML
- alt text untuk image
- keyboard navigation
- focus state
- contrast ratio
- accessible button
- reduced-motion support

Jika user mengaktifkan:

```css
prefers-reduced-motion
```

animasi harus dikurangi.

---

# 41. SEO

Basic SEO:

```html
<title>Angels of Anonymity — IT & Multimedia Team</title>
```

Meta description:

> Angels of Anonymity is an IT & Multimedia team focused on technology, creativity, and digital innovation.

Tambahkan:

- Open Graph metadata
- favicon
- semantic headings
- robots.txt
- sitemap.xml

---

# 42. Visual Identity

Recommended visual identity:

### Primary

Dark / near-black background.

### Accent

Gunakan satu accent utama yang kuat.

Contoh:

```text
Electric Blue
Purple
Cyan
```

atau kombinasi gradient:

```text
Blue → Violet
```

Tetapi jangan menggunakan terlalu banyak warna.

---

# 43. Typography

Recommended:

### Heading

Modern geometric sans-serif.

Contoh:

- Space Grotesk
- Sora
- Plus Jakarta Sans
- Inter

### Body

Inter / Plus Jakarta Sans.

Typography hierarchy harus kuat:

```text
H1
72–120px desktop

H2
48–64px

H3
24–32px

Body
16–18px
```

Mobile disesuaikan secara responsive.

---

# 44. Animation Principles

Animasi dibagi menjadi tiga level.

### Level 1 — Micro

Durasi:

```text
150–300ms
```

Untuk:

- hover
- button
- icon

### Level 2 — UI

Durasi:

```text
300–600ms
```

Untuk:

- card
- modal
- navigation

### Level 3 — Ambient

Durasi:

```text
3–20 seconds
```

Untuk:

- gradient
- particle
- background
- floating object

---

# 45. Important Animation Rule

**Jangan semua elemen dianimasikan.**

Visual hierarchy:

```text
Hero
★★★★★

Section transition
★★★

Cards
★★

Buttons
★

Background
★★
```

Hero menjadi pusat perhatian.

---

# 46. Content Management

Untuk menambahkan project baru:

```text
1. Upload image
2. Edit data.js
3. Add project object
4. Deploy
```

Untuk menambahkan member:

```text
1. Upload image
2. Edit TEAM array
3. Deploy
```

Untuk mengubah social media:

```text
Edit config.js
```

Tidak perlu mengedit HTML.

---

# 47. Deployment

Karena website static, deployment dapat menggunakan:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

Recommended:

> GitHub repository + Cloudflare Pages / Vercel

Flow:

```text
Developer
    ↓
Git
    ↓
GitHub
    ↓
Deployment
    ↓
Website
```

---

# 48. Repository Structure

Recommended:

```text
angels-of-anonymity-web/
│
├── index.html
│
├── README.md
│
├── assets/
│   ├── images/
│   │   ├── team/
│   │   ├── projects/
│   │   ├── competitions/
│   │   └── gallery/
│   │
│   └── icons/
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
└── js/
    ├── config.js
    ├── data.js
    ├── app.js
    ├── components.js
    └── animations.js
```

---

# 49. MVP Scope

Versi pertama website wajib memiliki:

- [ ] Hero
- [ ] About
- [ ] Team
- [ ] Expertise
- [ ] Projects
- [ ] Experience
- [ ] Competitions
- [ ] Contact
- [ ] Footer
- [ ] Responsive design
- [ ] Smooth scrolling
- [ ] Scroll animations
- [ ] Hover interactions
- [ ] Dynamic rendering dari JS
- [ ] Separate config.js
- [ ] Separate data.js
- [ ] Basic SEO
- [ ] Performance optimization

---

# 50. Phase 2

Fitur yang dapat ditambahkan kemudian:

- [ ] Project detail page
- [ ] Advanced gallery
- [ ] Competition certificates
- [ ] Dark/light mode
- [ ] Interactive timeline
- [ ] Advanced WebGL animation
- [ ] 3D logo
- [ ] Blog / Journal
- [ ] Case studies
- [ ] Client testimonials

---

# 51. Phase 3 — Experimental

Jika ingin website benar-benar menjadi signature Angels of Anonymity:

- interactive 3D environment
- WebGL hero
- interactive constellation
- animated digital identity
- experimental cursor
- hidden easter eggs
- interactive project showcase

Namun fitur-fitur ini **bukan prioritas MVP**.

---

# 52. User Experience Flow

Pengunjung pertama:

```text
OPEN WEBSITE
     ↓
Animated Intro
     ↓
Hero
     ↓
"Who are Angels of Anonymity?"
     ↓
Team
     ↓
Expertise
     ↓
Projects
     ↓
Experience
     ↓
Competitions
     ↓
Contact
```

Dalam sekitar **10–20 detik pertama**, user harus sudah memahami:

> siapa Angels of Anonymity, apa yang mereka lakukan, dan kenapa mereka menarik.

---

# 53. Success Criteria

Website dianggap berhasil jika:

### Branding

User dapat mengingat nama:

> Angels of Anonymity

### Clarity

User memahami bahwa tim bergerak di:

> IT + Multimedia

### Portfolio

User dapat melihat:

> Projects + Experience + Competitions

### Team

User dapat mengenali:

> Ebenhaiser Caprisiano  
> Omega Patria  
> Gilbert Ngilly

### Interaction

Website terasa:

> modern, smooth, interactive.

### Technical

Website:

> fast, responsive, maintainable.

---

# 54. Non-Goals

Versi MVP **tidak membutuhkan**:

- authentication
- database
- admin dashboard
- CMS
- payment system
- booking system
- freelance marketplace
- user registration
- backend API
- online transaction

Karena tujuan website adalah:

> **Static digital identity & portfolio.**

---

# 55. Recommended Final Experience

Bayangan experience-nya kira-kira begini:

```text
┌──────────────────────────────────────────────┐
│ AOA                         WORK  TEAM  ... │
│                                              │
│              ANGELS                         │
│                 OF                           │
│             ANONYMITY                        │
│                                              │
│       IT & MULTIMEDIA TEAM                  │
│                                              │
│          [ EXPLORE OUR WORK ]               │
│                                              │
│       ✦ subtle animated background ✦        │
└──────────────────────────────────────────────┘

                ↓ SCROLL


WHO WE ARE
──────────────────────────────────────────────

Technology      Creativity      Problem Solving


MEET THE TEAM
──────────────────────────────────────────────

[ Eben ]       [ Omega ]       [ Gilbert ]


WHAT WE DO
──────────────────────────────────────────────

Software       IT & Tech       Multimedia


SELECTED WORKS
──────────────────────────────────────────────

[ Project ] [ Project ] [ Project ]


OUR JOURNEY
──────────────────────────────────────────────

2026 ─────── Experience
     │
2025 ─────── Competition
     │
2024 ─────── Project


COMPETITION & CHALLENGES
──────────────────────────────────────────────

[ Competition ] [ Competition ]


                LET'S
             BUILD SOMETHING.

               [ CONTACT ]
```

---

# 56. Final Product Statement

**Angels of Anonymity website bukan sekadar website portfolio.**

Website harus menjadi **digital identity** dari tim.

Kesan yang ingin ditinggalkan setelah seseorang mengunjungi website:

> **"Oh, ini bukan sekadar tiga orang yang bisa ngoding. Mereka punya identitas sebagai sebuah team."**

Visual harus **simple**, tetapi interaction membuatnya terasa **alive**.

Teknologi harus **modern**, tetapi architecture tetap **sederhana dan gampang dirawat**.

Dan yang paling penting:

> **Content dapat berkembang tanpa harus bongkar-bongkar HTML.**

Dengan pemisahan `config.js`, `data.js`, dan rendering JavaScript, website bisa terus berkembang seiring bertambahnya project, kompetisi, pengalaman, maupun anggota tim.