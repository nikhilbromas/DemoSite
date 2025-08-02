 # Prolio - Modern Architecture Firm Website

A modern, responsive, and visually stunning static website for Prolio architecture firm, built with HTML, Tailwind CSS, and JavaScript.

## 🌟 Features

- **Modern Design**: Clean, minimalist design with professional typography
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading with optimized assets
- **Interactive Geometric Elements**: Animated triangles, stars, circles, and diamonds
- **Advanced Hover Effects**: Geometric overlays and dynamic shape animations
- **Smart Cursor Interactions**: Mouse-following effects and cursor-responsive elements
- **Scroll-Triggered Animations**: Dynamic shapes appear during fast scrolling
- **Enhanced Portfolio Gallery**: Geometric overlays with pulsing animations on hover
- **Service Card Animations**: Rotating conic gradients and floating corner shapes
- **Contact Form**: Functional contact form with geometric button effects
- **SEO Friendly**: Semantic HTML structure and meta tags
- **GitHub Pages Ready**: Deploy-ready static website

## 📱 Sections

1. **Home** - Hero section with compelling call-to-action
2. **About Us** - Company information and statistics
3. **Our Services** - Comprehensive service offerings
4. **Portfolio** - Image gallery showcasing projects
5. **Testimonials** - Client feedback and reviews
6. **Contact** - Contact form and business information

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/prolio-website.git
cd prolio-website
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

3. Navigate to `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. Fork this repository
2. Go to repository Settings → Pages
3. Select source: "Deploy from a branch"
4. Choose branch: `main` and folder: `/ (root)`
5. Click Save
6. Your site will be available at `https://yourusername.github.io/prolio-website`

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

## 📁 Project Structure

```
prolio-website/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── style.css           # Custom CSS (if needed)
├── images/             # Image assets
├── README.md           # Project documentation
├── robots.txt          # Search engine guidelines
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment
```

## ✨ Key Features Breakdown

### Design Elements
- **Color Scheme**: Professional blue and gray palette
- **Typography**: Inter font for clean, modern readability
- **Layout**: CSS Grid and Flexbox for responsive design
- **Animations**: Smooth transitions and scroll-triggered animations

### Interactive Geometric Elements
- **Floating Background Shapes**: Animated triangles, stars, circles, and diamonds throughout all sections
- **Dynamic Animation Timing**: Randomized delays and durations for natural movement
- **Mouse Interaction**: Shapes respond to hover with rotation and scaling effects
- **Scroll-Based Triggers**: Temporary shapes appear during fast scrolling for dynamic feedback

### Advanced Hover Effects
- **Portfolio Overlays**: Geometric overlays with pulsing circle animations and cursor-following gradients
- **Service Card Effects**: Rotating conic gradient borders with floating corner elements
- **Button Animations**: Geometric sweep effects on call-to-action buttons
- **Navigation Links**: Radial gradient expansion effects on hover

### Enhanced User Experience
- **Cursor Trail Effects**: Portfolio items respond to mouse position with dynamic gradients
- **Progressive Animations**: Elements animate based on scroll visibility ratio
- **Micro-interactions**: Subtle shape animations triggered by section visibility
- **Performance Optimized**: Reduced motion support and mobile-friendly effects

### Interactive Components
- **Navigation**: Smooth scrolling with active section highlighting and geometric hover effects
- **Mobile Menu**: Responsive hamburger menu with animated transitions
- **Portfolio**: Enhanced hover effects with geometric overlays and animated shapes
- **Contact Form**: Client-side validation with geometric button animations
- **Scroll Animations**: Progressive element reveals with accompanying shape triggers

### Performance Optimizations
- **Lazy Loading**: Images load as needed
- **Minified Assets**: Optimized CSS and JavaScript
- **Semantic HTML**: Proper structure for accessibility and SEO
- **Fast CDN**: Tailwind CSS and Font Awesome from CDN

## 🎨 Customization

### Colors
The website uses a custom color palette defined in the Tailwind config:
- `prolio-dark`: #1a1a1a (Dark text)
- `prolio-gray`: #f8f9fa (Light backgrounds)
- `prolio-accent`: #2563eb (Brand blue)

### Content
Update the following files to customize content:
- `index.html` - All text content and structure
- `script.js` - Interactive behavior
- `images/` - Replace with your own images

### Styling
- Modify Tailwind classes in HTML for layout changes
- Add custom CSS in `<style>` tags or separate CSS file
- Update the Tailwind config for color/font changes

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Professional styling
- Success/error notifications
- Form data collection (ready for backend integration)

To connect to a backend service:
1. Update the form action in `script.js`
2. Add your preferred form handling service (Formspree, Netlify Forms, etc.)
3. Configure email notifications

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🚀 Performance Tips

1. **Images**: Optimize images before adding (WebP format recommended)
2. **Fonts**: Consider using system fonts for faster loading
3. **JavaScript**: Minify in production
4. **CSS**: Use Tailwind's purge feature for smaller bundles

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions:
- Create an issue in this repository
- Email: your-email@domain.com

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Inter font family
- [Unsplash](https://unsplash.com/) for placeholder images inspiration

---

Built with ❤️ for modern architecture firms.