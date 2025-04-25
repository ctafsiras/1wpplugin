#!/bin/bash
# WordPress Marketplace Theme Export Script

# Create a production build of the Next.js app
echo "Building Next.js application..."
npm run build

# Create the export
echo "Exporting Next.js application..."
npm run export

# Create WordPress theme directory structure
echo "Creating WordPress theme structure..."
mkdir -p wordpress-marketplace-theme/static

# Copy Next.js static export to the theme's static directory
echo "Copying static files..."
cp -r out/* wordpress-marketplace-theme/static/

# Copy WordPress theme files
echo "Copying WordPress theme files..."
cp index.php wordpress-marketplace-theme/
cp functions.php wordpress-marketplace-theme/
cp header.php wordpress-marketplace-theme/
cp footer.php wordpress-marketplace-theme/
cp style.css wordpress-marketplace-theme/
cp page.php wordpress-marketplace-theme/
cp 404.php wordpress-marketplace-theme/
cp screenshot.png wordpress-marketplace-theme/
cp readme.txt wordpress-marketplace-theme/

# Create the theme ZIP file
echo "Creating theme ZIP file..."
cd wordpress-marketplace-theme
zip -r ../wordpress-marketplace-theme.zip .
cd ..

echo "Export complete! The theme is ready in wordpress-marketplace-theme.zip"
