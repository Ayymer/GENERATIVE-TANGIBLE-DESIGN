# Generative Tangible Design - Web Version

A p5.js (JavaScript) version of the Processing generative art project, designed to run in modern web browsers.

## 🚀 Quick Start

### Option 1: Simple HTTP Server (Recommended)
```bash
# Navigate to the web-version directory
cd web-version

# Start a local server (Python 3)
python3 -m http.server 8000

# Or using Node.js (if you have it installed)
npx http-server -p 8000

# Open your browser to:
# http://localhost:8000
```

### Option 2: Direct File Opening
Simply open `index.html` in your web browser (some features may be limited due to CORS restrictions).

## 🎨 Features

- **Interactive Controls**: Keyboard shortcuts for different generative effects
- **HSB Color Mode**: Creative color space manipulation
- **Image Processing**: Real-time manipulation of alpha masks and textures
- **Generative Patterns**: Tiled pattern generation based on image brightness
- **Modern Web Interface**: Clean, responsive design with control documentation

## ⌨️ Controls

- **SPACE**: Clear canvas (black background)
- **E, R, T, Y**: Reserved for future effects
- **U**: Generate tiled pattern based on alpha mask
- **C**: Save current frame as PNG

## 🛠️ Development

### File Structure
```
web-version/
├── index.html          # Main HTML file with p5.js setup
├── sketch.js           # Main p5.js sketch (converted from Processing)
├── assets/             # All images and textures
│   ├── alpha-*.jpg     # Alpha masks
│   ├── pattern-*.png   # Pattern tiles
│   └── [other assets]  # Various textures and images
├── package.json        # Project configuration
└── README.md          # This file
```

### Converting from Processing to p5.js

Key differences from Processing:
- `PImage` → `p5.Image`
- `void setup()` → `function setup()`
- `void draw()` → `function draw()`
- `loadImage()` → `loadImage()` (same function)
- `keyPressed` → `keyPressed()` function
- `saveFrame()` → `saveCanvas()`

### Adding New Features

1. **New Keyboard Controls**: Add to the `keyPressed()` function
2. **New Visual Effects**: Add functions and call them from `draw()`
3. **Mouse Interaction**: Use `mousePressed()`, `mouseDragged()`, etc.
4. **New Assets**: Add to `assets/` folder and load in `preload()`

## 🌐 Browser Compatibility

- **Chrome**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support
- **Edge**: ✅ Full support

## 📱 Mobile Support

The sketch is designed for desktop interaction with keyboard controls. For mobile support, consider adding touch controls.

## 🔧 Troubleshooting

### Images Not Loading
- Make sure you're running a local server (not opening file directly)
- Check that all assets are in the `assets/` folder
- Verify file paths in the code

### Performance Issues
- Reduce the number of tiles in `generateTiledPattern()`
- Optimize image sizes
- Use `noLoop()` to stop continuous drawing when not needed

## 🎯 Next Steps

- [ ] Implement remaining keyboard controls (E, R, T, Y)
- [ ] Add mouse interaction features
- [ ] Create more pattern variations
- [ ] Add animation capabilities
- [ ] Implement color palette controls
- [ ] Add export options (SVG, different formats)
