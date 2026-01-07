# Physical Performance Dashboard

This is an HTML, CSS, and JavaScript implementation of the Physical Performance Dashboard design from Figma.

## Project Structure

```
DEV/
├── index.html              # Main HTML entry point
├── css/
│   └── styles.css         # All styling matching the Figma design
├── js/
│   └── script.js          # JavaScript for interactive elements and chart rendering
├── assets/
│   └── images/
│       ├── logo.svg       # OPN FC logo
│       ├── club-logo.svg  # Club crest/logo
│       ├── user-avatar.png # User profile image
│       ├── player-image.png # Player profile image
│       └── icons/         # Sidebar navigation icons
│           ├── home-2.svg
│           ├── chart.svg
│           ├── book.svg
│           ├── players.svg
│           ├── calendar-2.svg
│           ├── document.svg
│           ├── message-text.svg
│           ├── medical.svg
│           ├── document-text.svg
│           ├── backoffice.svg
│           ├── arrow-down.svg
│           ├── arrow-down-2.svg
│           └── arrow-right.svg
└── README.md              # Project documentation
```

## Features

1. **Sidebar Navigation**
   - Menu items with icons
   - User profile section
   - Footer with copyright

2. **Main Content Area**
   - Top bar with back button and page title
   - Player navigation tabs (Dashboard, Schedule, Load Management, etc.)
   - Share button
   - Player profile card with image and details
   - Statistics cards showing various metrics
   - Statistics chart with interactive visualization

3. **Interactive Elements**
   - Navigation tabs that switch active state
   - Chart visualization using HTML5 Canvas
   - Responsive design

## Design Specifications

- **Colors:**
  - Brand Midnight: `#001915`
  - Brand Muted Teal: `#3A6860`
  - Brand Aqua Pop: `#68E0C9`
  - Background: `#F8F8FC`
  - White: `#FFFFFF`
  - Text: `#0C0C0D`

- **Typography:**
  - Primary font: SUSE
  - Fallback: System fonts

- **Layout:**
  - Sidebar: 320px width
  - Main content: Flexible width (max 1600px)
  - Border radius: 20px for main container, 8px-12px for cards

## Usage

Simply open `index.html` in a web browser to view the dashboard.

## Browser Support

Modern browsers that support:
- CSS Grid and Flexbox
- HTML5 Canvas
- ES6 JavaScript

## Notes

- The chart uses HTML5 Canvas for rendering
- Images are downloaded from Figma and stored in the `assets/images/` directory
- The design is responsive and adapts to different screen sizes
- This project follows a conventional front-end structure with separate directories for CSS, JavaScript, and assets
