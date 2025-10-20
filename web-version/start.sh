#!/bin/bash

# Generative Tangible Design - Web Version Startup Script

echo "🎨 Starting Generative Tangible Design - Web Version"
echo "=================================================="

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo "🚀 Starting local server on http://localhost:8000"
    echo "📱 Open your browser and navigate to: http://localhost:8000"
    echo "⌨️  Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python found"
    echo "🚀 Starting local server on http://localhost:8000"
    echo "📱 Open your browser and navigate to: http://localhost:8000"
    echo "⌨️  Press Ctrl+C to stop the server"
    echo ""
    python -m http.server 8000
else
    echo "❌ Python not found. Please install Python 3 to run the local server."
    echo "Alternatively, you can open index.html directly in your browser."
    exit 1
fi
