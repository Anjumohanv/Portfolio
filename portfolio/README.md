# Anju Mohan V - Portfolio Website

A modern, responsive portfolio website for Anju Mohan V, Full Stack Python Developer.

## Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Scroll animations and interactive effects
- **Project Showcase**: Filterable project gallery with technology tags
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Focused**: Optimized for fast loading and smooth experience

## Technologies Used

- **HTML5**: Semantic markup and modern features
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript**: ES6+ with modern APIs
- **Font Awesome**: Icons and social media links
- **Google Fonts**: Poppins font family

## Sections Included

1. **Home**: Introduction with animated typing effect
2. **About**: Professional summary and education timeline
3. **Skills**: Technical and soft skills with progress bars
4. **Projects**: Filterable project showcase
5. **Experience**: Professional experience timeline
6. **Contact**: Contact information and functional form

## File Structure

```
portfolio/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── animations.js
├── assets/
│   ├── images/
│   │   └── profile-placeholder.html
│   └── icons/
├── projects/
│   ├── ott-platform/
│   ├── medical-store/
│   ├── water-intake/
│   └── calculator/
└── README.md
```

## Getting Started

### Local Development

1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using Live Server extension in VS Code
# Right-click index.html > Open with Live Server
```

### Customization

#### Update Personal Information
- Open `index.html`
- Replace placeholder text with your actual information
- Update contact details, social links, and project information

#### Replace Images
- Replace placeholder images in `assets/images/` folder
- Update image paths in HTML if needed
- Optimize images for web (recommended size: 800px width for best performance)

#### Customize Colors
- Modify CSS custom properties in `css/style.css`
- Change `--primary-color`, `--accent-color`, etc.
- Dark mode colors are defined in `[data-theme="dark"]` section

#### Add/Remove Sections
- Add new sections in `index.html`
- Style them in `css/style.css`
- Add responsive styles in `css/responsive.css`

## Deployment

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your portfolio files to the repository
3. Go to Settings > Pages
4. Select your branch and `/root` folder
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Netlify will automatically deploy your site
4. Get a custom domain or use the provided subdomain

### Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your Git repository or upload files
3. Vercel will automatically deploy
4. Custom domains available

### Traditional Hosting
1. Upload all files to your web hosting provider
2. Ensure all files are in the correct directory structure
3. Point your domain to the hosting location

## Performance Optimization

The website includes several performance optimizations:

- **Minified CSS/JS**: Ready for production use
- **Lazy Loading**: Images load as they come into view
- **Efficient Animations**: Using CSS transforms and opacity
- **Responsive Images**: Proper sizing for different devices
- **Caching**: Browser caching headers recommended

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Features

- Semantic HTML structure
- Proper meta tags and descriptions
- Open Graph and Twitter Card support
- Schema.org markup ready
- Mobile-friendly design
- Fast loading times

## Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliant
- Focus indicators

## Customization Tips

### Adding New Projects
1. Add project HTML in the projects section
2. Include proper data-category attribute for filtering
3. Add project images to the assets folder
4. Update project links and descriptions

### Modifying Animations
- Edit animation durations in CSS
- Modify JavaScript animation functions
- Add new animation classes in `animations.js`

### Changing Fonts
- Update Google Fonts link in HTML head
- Modify `--font-primary` variable in CSS
- Adjust font sizes in responsive.css

## Troubleshooting

### Issues with Local Development
- Ensure all files are in correct folders
- Check browser console for errors
- Use a local server instead of file:// protocol

### Mobile Responsiveness Issues
- Test on actual devices when possible
- Check Chrome DevTools device emulator
- Verify viewport meta tag is present

### Animation Performance
- Reduce number of animated elements if needed
- Check for browser compatibility
- Test on lower-end devices

## License

This portfolio template is free to use and modify for personal and commercial projects.

## Author

**Anju Mohan V**
- Email: anjulechu199@gmail.com
- Phone: +91 9605835491
- LinkedIn: linkedin.com/in/anju-mohan-v-ab2a53279

---

Feel free to customize this template to match your personal style and professional needs!