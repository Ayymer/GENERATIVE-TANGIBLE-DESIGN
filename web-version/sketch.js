// Generative Tangible Design - p5.js Version
// Converted from Processing to JavaScript

// Global variables
let img01; // mask 1 (letter A)
let pattern1; // texture 1
let myfont; // our font

// Interface variables
let interfaceVisible = true;
let animationMode = false;

// Preload function - loads assets before setup
function preload() {
    // Load images
    pattern1 = loadImage('assets/pattern-07-1.png');
    img01 = loadImage('assets/alpha-01.jpg');
}

function setup() {
    // Create canvas with 1000x1000 size
    let canvas = createCanvas(1000, 1000);
    canvas.parent('sketch-container');
    
    // Set initial background color
    background(0);
    
    // Set color mode to HSB (Hue, Saturation, Brightness, Alpha)
    colorMode(HSB, 360, 100, 100, 100);
    
    // Resize the alpha mask image to canvas size
    if (img01) {
        img01.resize(1000, 1000);
    }
    
    console.log('🎨 Generative Tangible Design - p5.js version loaded!');
    console.log('Press U to generate tiled pattern, SPACE to clear canvas');
}

function draw() {
    // Handle keyboard input for different effects
    
    if (keyIsPressed && key === ' ') {
        // Spacebar functionality (handled in keyPressed for better responsiveness)
    }
    
    if (keyIsPressed && key === 'e') {
        // E key functionality - not yet implemented
    }
    
    if (keyIsPressed && key === 'r') {
        // R key functionality - not yet implemented
    }
    
    if (keyIsPressed && key === 't') {
        // T key functionality - not yet implemented
    }
    
    if (keyIsPressed && key === 'y') {
        // Y key functionality - TEXT WITH ALPHA - not yet implemented
    }
    
    if (keyIsPressed && key === 'u') {
        // U key - Generate tiled pattern based on alpha mask
        generateTiledPattern();
    }
}

function keyPressed() {
    // Handle key press events (more responsive than keyIsPressed in draw)
    
    if (key === ' ') {
        // SPACE BAR - Clear everything with black background
        background(0, 100, 0); // Black in HSB
        console.log('Canvas cleared');
    }
    
    if (key === 'c') {
        // C key - Save current frame as PNG
        saveCanvas('generative-art-capture', 'png');
        console.log('Frame saved as PNG');
    }
}

function keyReleased() {
    // Handle key release events if needed
    // Currently not used but kept for compatibility with original Processing code
}

function generateTiledPattern() {
    // Generate tiled pattern based on alpha mask
    // This is the main generative art function
    
    background(0, 100, 0); // Black background in HSB
    
    let tiles = 50; // Number of tiles
    let tileSize = width / tiles; // Responsive size based on canvas width
    
    // Create grid pattern
    for (let x = 0; x < tiles; x++) {
        for (let y = 0; y < tiles; y++) {
            
            // Calculate tile position
            let tile_posX = x * tileSize;
            let tile_posY = y * tileSize;
            
            // Get color from alpha mask at this position
            if (img01) {
                let c = img01.get(tile_posX, tile_posY);
                
                // Convert brightness to size for each tile
                let size = map(brightness(c), 0, 100, tileSize, 0);
                
                // Randomly select pattern (currently only pattern1 is available)
                let pattern_select = round(random(1, 3));
                
                if (pattern_select === 1 && pattern1) {
                    // Draw the pattern tile
                    image(pattern1, tile_posX, tile_posY, size, size);
                }
            }
        }
    }
}

// Additional utility functions for future enhancements
function toggleInterface() {
    interfaceVisible = !interfaceVisible;
}

function toggleAnimation() {
    animationMode = !animationMode;
}

// Window resize handler
function windowResized() {
    // Handle window resize if needed
    // For now, we keep the canvas at fixed 1000x1000
}

// Mouse interaction handlers (for future enhancements)
function mousePressed() {
    // Handle mouse press events
}

function mouseReleased() {
    // Handle mouse release events
}

function mouseDragged() {
    // Handle mouse drag events
}
