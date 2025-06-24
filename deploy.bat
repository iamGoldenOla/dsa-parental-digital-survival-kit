@echo off
echo 🚀 Starting deployment to GitHub Pages...

echo 📦 Building the project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    
    if exist "out" (
        echo 📁 Found out directory
        
        echo 🌿 Creating deployment branch...
        git checkout -b temp-deploy
        
        echo 📤 Pushing to gh-pages branch...
        git push origin temp-deploy:gh-pages --force
        
        echo 🔄 Cleaning up...
        git checkout main
        git branch -D temp-deploy
        
        echo ✅ Deployment completed!
        echo 🌐 Your site should be available at: https://iamGoldenOla.github.io/dsa-parental-digital-survival-kit/
    ) else (
        echo ❌ out directory not found. Build may have failed.
        exit /b 1
    )
) else (
    echo ❌ Build failed!
    exit /b 1
) 