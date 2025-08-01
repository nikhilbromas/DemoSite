# Deployment Guide for Prolio Architecture Website

This guide will help you deploy the Prolio architecture website to GitHub Pages and other hosting platforms.

## 🚀 GitHub Pages Deployment (Recommended)

### Option 1: Automatic Deployment with GitHub Actions

1. **Fork or Upload to GitHub:**
   ```bash
   # If starting from scratch
   git init
   git add .
   git commit -m "Initial commit: Prolio architecture website"
   git branch -M main
   git remote add origin https://github.com/yourusername/prolio-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **"GitHub Actions"**
   - The workflow in `.github/workflows/deploy.yml` will automatically deploy your site

3. **Your site will be available at:**
   ```
   https://yourusername.github.io/prolio-website/
   ```

### Option 2: Manual GitHub Pages Deployment

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **"Deploy from a branch"**
   - Choose **"main"** branch and **"/ (root)"** folder
   - Click **Save**

2. **Your site will be live at:**
   ```
   https://yourusername.github.io/prolio-website/
   ```

## 🔧 Pre-Deployment Customization

### 1. Update URLs in Files

Replace `yourusername` with your actual GitHub username in:
- `index.html` (meta tags)
- `404.html` (links)
- `sitemap.xml` (URLs)
- `robots.txt` (sitemap URL)

**Find and replace:**
```
yourusername → your-github-username
```

### 2. Customize Content

Update the following content in `index.html`:
- Company contact information
- Portfolio project descriptions
- Service offerings
- Team member information
- Social media links

### 3. Add Real Images

Replace placeholder icons and add real project images:
- Create an `images/` directory
- Add portfolio project images
- Add team photos
- Add company logo
- Update image sources in HTML

## 📱 PWA Features

The website includes Progressive Web App features:
- **Offline functionality** via Service Worker
- **App-like experience** on mobile devices
- **Install prompt** for users
- **Push notifications** (ready for implementation)

### Testing PWA Features

1. Open Chrome DevTools
2. Go to **Application** tab
3. Check **Service Workers** and **Manifest**
4. Use **Lighthouse** to audit PWA score

## 🌐 Alternative Hosting Platforms

### Netlify

1. **Drag and Drop:**
   - Zip your project files
   - Go to [netlify.com](https://netlify.com)
   - Drag the zip file to deploy

2. **Git Integration:**
   - Connect your GitHub repository
   - Set build command: `# none needed`
   - Set publish directory: `/`

### Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts** to configure deployment

### Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize:**
   ```bash
   firebase init hosting
   ```

3. **Deploy:**
   ```bash
   firebase deploy
   ```

## 🔍 SEO Optimization

### Update meta tags in `index.html`:
- Replace placeholder URLs with your actual domain
- Update Open Graph images
- Customize meta descriptions
- Add structured data if needed

### Submit to Search Engines:
- Google Search Console
- Bing Webmaster Tools
- Submit sitemap.xml

## 📊 Performance Optimization

### Before Going Live:

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images (use tools like TinyPNG)
   - Add proper alt text

2. **Minimize Dependencies:**
   - Consider self-hosting fonts
   - Minimize external CDN calls
   - Use Tailwind's purge feature for production

3. **Test Performance:**
   - Use Google PageSpeed Insights
   - Test on mobile devices
   - Check loading times

## 🛠 Local Development

### Testing Locally:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# VS Code Live Server
# Install "Live Server" extension
# Right-click index.html → "Open with Live Server"
```

### Testing PWA Features:
- Use HTTPS (required for Service Workers)
- Test on mobile devices
- Use Chrome DevTools PWA audit

## 🔐 Security Considerations

### Before deployment:
- Remove any sensitive information
- Update contact form to use proper backend
- Configure Content Security Policy headers
- Set up proper error handling

## 📝 Domain Setup (Optional)

### Using Custom Domain:

1. **Purchase domain** from registrar
2. **Configure DNS:**
   - Add CNAME record pointing to `yourusername.github.io`
   - Or use A records pointing to GitHub Pages IPs

3. **Update GitHub Pages settings:**
   - Add your custom domain
   - Enable "Enforce HTTPS"

4. **Update URLs** in all files to use your domain

## ✅ Post-Deployment Checklist

- [ ] All links work correctly
- [ ] Contact form functions properly
- [ ] Mobile responsiveness verified
- [ ] PWA features working
- [ ] SEO meta tags updated
- [ ] Performance optimized
- [ ] Analytics setup (Google Analytics, etc.)
- [ ] Social media links updated
- [ ] Error pages working (404.html)
- [ ] Service Worker caching properly

## 🐛 Troubleshooting

### Common Issues:

1. **404 Errors:**
   - Check file paths
   - Verify GitHub Pages is enabled
   - Wait 10-15 minutes for deployment

2. **Service Worker Issues:**
   - Clear browser cache
   - Check HTTPS requirement
   - Verify service worker registration

3. **Styling Issues:**
   - Check CDN links
   - Verify Tailwind CSS loading
   - Clear browser cache

4. **Mobile Issues:**
   - Test on actual devices
   - Check viewport meta tag
   - Verify touch interactions

## 📞 Support

For deployment issues:
- Check GitHub Pages documentation
- Review browser console for errors
- Test in incognito mode
- Verify all external dependencies are loading

---

**Ready to deploy? Start with GitHub Pages and customize from there!** 🚀