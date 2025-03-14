#!/bin/bash

# Enable strict mode for better error handling
set -e

echo "🔧 Compiling TypeScript..."
npx tsc

echo "🎨 Compiling SCSS..."
npx sass src/scss/style.scss src/scss/style.css
echo "🚀 Starting Live Server..."
