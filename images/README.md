# Images Directory

This directory should contain all image assets for the Prolio architecture website.

## Recommended Image Structure

```
images/
├── portfolio/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── ...
├── team/
│   ├── architect-1.jpg
│   ├── architect-2.jpg
│   └── ...
├── logos/
│   ├── prolio-logo.svg
│   ├── prolio-logo-white.svg
│   └── favicon.ico
├── hero/
│   ├── hero-bg.jpg
│   └── hero-bg-mobile.jpg
└── og-image.jpg (for social media sharing)
```

## Image Optimization Guidelines

### File Formats:
- **WebP**: Use for modern browsers (best compression)
- **JPEG**: Use for photographs
- **PNG**: Use for graphics with transparency
- **SVG**: Use for logos and icons

### Sizes:
- **Hero images**: 1920x1080px (16:9 ratio)
- **Portfolio images**: 800x600px (4:3 ratio)
- **Team photos**: 400x400px (1:1 ratio)
- **Logo**: SVG or PNG at multiple sizes

### Compression:
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Target file sizes under 500KB for large images
- Use responsive images with different sizes

## Implementation Examples

### Portfolio Images:
```html
<img src="images/portfolio/modern-office.jpg" 
     alt="Modern office complex with sustainable design" 
     class="w-full h-64 object-cover rounded-lg">
```

### Responsive Images:
```html
<picture>
  <source media="(max-width: 768px)" srcset="images/hero/hero-mobile.webp">
  <source media="(min-width: 769px)" srcset="images/hero/hero-desktop.webp">
  <img src="images/hero/hero-desktop.jpg" alt="Modern architecture" class="w-full h-full object-cover">
</picture>
```

### Logo Implementation:
```html
<img src="images/logos/prolio-logo.svg" 
     alt="Prolio Architecture Firm" 
     class="h-8 w-auto">
```

## Current Status

Currently using:
- SVG icons from Font Awesome
- CSS gradient backgrounds
- Placeholder colored rectangles
- Data URI encoded SVG icons for PWA

## To Add Real Images:

1. Replace gradient backgrounds with actual architectural photos
2. Add real portfolio project images
3. Include team member photos
4. Add company logo and branding assets
5. Create proper social media sharing images

## Image Attribution

When using stock photos, ensure proper licensing and attribution:
- Unsplash (free, no attribution required but recommended)
- Pexels (free, no attribution required)
- Adobe Stock (paid, commercial license)
- Custom photography (recommended for authenticity)

---

**Note**: All placeholder content should be replaced with actual project images and company branding before deployment.