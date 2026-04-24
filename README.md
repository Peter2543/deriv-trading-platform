# Deriv Trading Platform Website

A modern, responsive trading platform interface built with vanilla HTML, CSS, and JavaScript. This website replicates the design and functionality of the Deriv trading platform for digits betting and over/under trading.

## Features

### ✨ Core Features
- **Responsive Design**: Fully mobile-optimized with touch-friendly interface
- **Digits Betting**: Select and predict the last digit (0-9) of price movements
- **Over/Under Trading**: Trade on whether price will go up or down
- **Real-time Payouts**: Dynamic payout calculations based on selected digits
- **Interactive UI**: Smooth animations and transitions
- **Keyboard Support**: Full keyboard navigation (0-9 for digit selection, Enter to trade)
- **AI Assistant**: Floating AI helper button for extended functionality

### 🎨 UI Components
- Status bar and browser navigation
- Top navigation with deposit button
- Main navigation menu with quick access to all trading tools
- Asset header with live price information
- Digit grid with prediction percentages
- Number pad for quick input
- Over/Under action buttons with payout info
- Notification system

### 📱 Responsive Breakpoints
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (480px - 767px)
- Small Mobile (<480px)

## Installation

### Option 1: Direct File Usage
1. Download all files (index.html, styles.css, script.js)
2. Place them in the same directory
3. Open `index.html` in your web browser

### Option 2: Local Server (Python)
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Option 3: Local Server (Node.js - http-server)
```bash
npm install -g http-server
http-server
```

## File Structure

```
deriv-trading-platform/
├── index.html       # HTML structure
├── styles.css       # Styling and animations
├── script.js        # JavaScript functionality
└── README.md        # Documentation
```

## How to Use

### Trading
1. **Select a Digit**: Click any digit box (0-9) in the digits grid
2. **Enter Value**: Use the number pad or keyboard (0-9)
3. **Choose Direction**: Click "Over" or "Under" button
4. **Place Trade**: Confirm your selection

### Navigation
- Click navigation items to switch between different trading tools
- Use the Deposit button to fund your account
- Click the AI Assistant for help
- Scroll horizontally on the main nav for more options

### Keyboard Shortcuts
- **0-9**: Select digit
- **Enter**: Place trade
- Click any digit box for instant selection

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #004B87;
    --teal: #1ebea5;
    --red: #c23b3b;
    --dark-bg: #0a0e27;
}
```

### Modifying Payout Values
Update the payout amounts in `script.js`:
```javascript
const baseOverPayout = 22.62;
const baseUnderPayout = 18.45;
```

### Adding New Assets
Add new items to the asset header dropdown and navigation menu in `index.html`.

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile latest

## Performance

- **No External Dependencies**: Pure HTML, CSS, and JavaScript
- **Fast Load Time**: Optimized CSS and minimal JavaScript
- **Smooth Animations**: Hardware-accelerated transitions
- **Mobile Optimized**: Lazy loading and responsive images

## Features Explained

### Digit Betting
Users predict the last digit of the asset's price movement. Each digit has an associated probability displayed as a percentage.

### Over/Under Trading
Traditional binary options where users predict if the asset will go UP (Over) or DOWN (Under) within the specified timeframe.

### Payouts
Payouts are calculated dynamically based on:
- Selected digit probability
- Trade direction (Over/Under)
- Stake amount
- Market conditions

## Accessibility

- Keyboard navigation support
- Clear visual feedback for interactions
- High contrast colors for readability
- Touch-friendly button sizes (minimum 44x44px)
- Semantic HTML structure

## Future Enhancements

- [ ] Live price chart integration
- [ ] Real backend API connection
- [ ] User authentication
- [ ] Trading history
- [ ] Account balance updates
- [ ] Multiple language support
- [ ] Dark/Light mode toggle
- [ ] Advanced charting tools
- [ ] Mobile app version

## License

MIT License - Feel free to use and modify for your projects.

## Support

For issues or questions, please refer to the documentation or check the code comments for detailed explanations.

---

**Created**: 2026-04-24
**Version**: 1.0.0
**Status**: Production Ready