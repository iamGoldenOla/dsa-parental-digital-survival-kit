#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Check if out directory exists
    if [ -d "out" ]; then
        echo "📁 Found out directory"
        
        # Create a temporary branch for deployment
        echo "🌿 Creating deployment branch..."
        git checkout -b temp-deploy
        
        # Remove everything except out directory
        find . -mindepth 1 -maxdepth 1 ! -name 'out' ! -name '.git' -exec rm -rf {} +
        
        # Move contents of out to root
        mv out/* .
        rmdir out
        
        # Add all files
        git add .
        
        # Commit changes
        git commit -m "Deploy to GitHub Pages"
        
        # Push to gh-pages branch
        echo "📤 Pushing to gh-pages branch..."
        git push origin temp-deploy:gh-pages --force
        
        # Clean up
        git checkout main
        git branch -D temp-deploy
        
        echo "✅ Deployment completed!"
        echo "🌐 Your site should be available at: https://iamGoldenOla.github.io/dsa-parental-digital-survival-kit/"
    else
        echo "❌ out directory not found. Build may have failed."
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi 