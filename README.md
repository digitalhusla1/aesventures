# Alpha Eco Star Ventures Website

A modern, responsive business website for Alpha Eco Star Ventures, showcasing comprehensive business solutions and services.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Built-in dark mode with theme persistence
- **Modern UI**: Clean and professional design with smooth animations
- **Optimized Performance**: Minimized assets and optimized loading
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- JavaScript (ES6+)
- Inter Font (Google Fonts)
- CSS-only dark mode implementation
- Local Storage for theme persistence

## 📂 Project Structure

```
AES Ventures/
├── assets/
│   ├── css/
│   │   ├── components/
│   │   │   ├── buttons.css
│   │   │   ├── cards.css
│   │   │   ├── darkmode.css
│   │   │   ├── footer.css
│   │   │   ├── forms.css
│   │   │   ├── header.css
│   │   │   ├── hero.css
│   │   │   └── social.css
│   │   └── style.css
│   ├── js/
│   │   ├── dark-mode.js
│   │   └── template-loader.js
│   └── templates/
│       ├── footer.html
│       ├── header.html
│       └── social-icons.html
├── img/
│   ├── logo01.png
│   └── favicin01.png
├── index.html
├── about.html
├── services.html
├── contact.html
├── privacy.html
├── disclaimer.html
├── help.html
└── terms.html
```

## 🚀 Core Features

1. **Import & Export Services**
   - Product sourcing and supplier verification
   - Trade documentation and compliance
   - Transportation and freight coordination

2. **Logistics & Supply Chain Management**
   - Local and international shipping
   - Inventory monitoring
   - Real-time tracking

3. **Digital Marketing & Brand Promotion**
   - Social media management
   - SEO optimization
   - Content creation
   - Performance analytics

4. **Web & Software Development**
   - Custom websites
   - Mobile applications
   - Business automation
   - System integration

5. **Business Networking**
   - Strategic partnerships
   - Growth support
   - Brand development

## 💻 Development

### Prerequisites

- Modern web browser
- Text editor (VS Code recommended)
- Basic understanding of HTML, CSS, and JavaScript

### Local Development

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Open the project in your code editor

3. Run a local server (e.g., using Live Server in VS Code)

### Making Changes

- CSS components are modular and found in `assets/css/components/`
- Shared HTML components are in `assets/templates/`
- JavaScript functionality is separated into modules
- Dark mode toggle is CSS-based with JS for persistence

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for tablets and desktop
- Fluid typography and spacing
- Flexible grid layouts

## 🎨 Theme Customization

Colors and other design tokens are defined as CSS custom properties in `style.css`:

```css
:root {
  --accent: #0066ff;
  --blue-600: #1a56db;
  --max-width: 1200px;
  --border-radius: 8px;
  /* ... other variables */
}
```

## 🔒 Security

- HTTPS enforced
- Content Security Policy implemented
- No sensitive data exposed
- Cross-Origin Resource Sharing (CORS) configured

## 📄 License

All rights reserved © 2025 Alpha-Ecostar Ventures

## 📞 Contact

- Email: alphaecostar@gmail.com
- Phone: +233 544 61 58 01
- Location: Lake road, Kumasi, 00233 Ghana, West Africa

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 🚀 Deployment

The website is deployed using GitHub Pages and can also be deployed on Netlify:

- GitHub Pages: Automated deployment via GitHub Actions
- Netlify: Continuous deployment from main branch

## ✅ Todo

- [ ] Add mobile navigation (hamburger menu)
- [ ] Complete manual browser testing
- [ ] Run Codacy analysis
- [ ] Standardize footer across all pages