const fs = require("fs");
const path = require("path");

// List of main HTML files to update
const htmlFiles = [
  "about.html",
  "blog.html",
  "contact.html",
  "toolkit.html",
  "services.html",
  "resources.html",
];

// Favicon HTML to insert
const faviconHTML = `    <!-- Favicon -->
    <link rel="icon" href="images/dsa_logo.webp" type="image/webp">
    <link rel="icon" href="images/dsa_logo.webp" type="image/x-icon">
    <link rel="apple-touch-icon" href="images/dsa_logo.webp">`;

htmlFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");

    // Check if favicon already exists
    if (!content.includes("favicon")) {
      // Find the position to insert favicon (after CSS links)
      const cssIndex = content.indexOf("<!-- Font Awesome for icons -->");

      if (cssIndex !== -1) {
        // Insert favicon before Font Awesome
        content =
          content.slice(0, cssIndex) +
          faviconHTML +
          "\n    " +
          content.slice(cssIndex);
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ Added favicon to ${file}`);
      } else {
        console.log(`⚠️  Could not find insertion point in ${file}`);
      }
    } else {
      console.log(`ℹ️  Favicon already exists in ${file}`);
    }
  } else {
    console.log(`❌ File not found: ${file}`);
  }
});

console.log("🎉 Favicon addition complete!");
