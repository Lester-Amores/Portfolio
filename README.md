# Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and experience.

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file with includes
├── assets/
│   ├── css/
│   │   └── styles.css      # All CSS styles
│   ├── js/
│   │   └── javascript.js   # JavaScript functionality
│   ├── images/            # All images and assets
│   └── resume/            # Resume and documents
├── sections/              # HTML sections (modular components)
│   ├── about.html
│   ├── skills.html
│   ├── experience.html
│   ├── education.html
│   ├── portfolio.html
│   └── contact.html
├── components/            # Reusable components
│   └── header.html        # Navigation header component
└── README.md             # This file
```

## 🚀 Features

- **Modular Architecture**: Separated sections for easy maintenance
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Interactive Portfolio**: Tabs for personal and work projects
- **Dynamic Navigation**: Smooth scrolling and mobile menu
- **Contact Form**: Integrated contact form with Google Sheets
- **Modern Animations**: CSS animations and hover effects

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome
- **Responsive**: CSS Grid & Flexbox
- **Animations**: CSS transitions and keyframes

## 📝 Sections

1. **Header**: Hero section with navigation and introduction
2. **About**: Personal introduction and background
3. **Skills**: Technical skills organized by category
4. **Experience**: Professional work experience timeline
5. **Education**: Academic background and qualifications
6. **Portfolio**: Project showcase with personal/work tabs
7. **Contact**: Contact information and form

## 🔧 Development

### Local Development
```bash
# Serve the website locally
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### File Organization
- Each section is in its own file for easy editing
- CSS is organized in a single file for consistency
- JavaScript handles interactions and includes

## 🎨 Customization

1. **Content**: Edit individual section files in `/sections/`
2. **Styling**: Modify `assets/css/styles.css`
3. **Images**: Replace/add images in `assets/images/`
4. **Scripts**: Update `assets/js/javascript.js` for new functionality

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The website is static and can be deployed to any web server or hosting platform.
