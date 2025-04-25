// Generate 100 plugin items for demo purposes
export const pluginsData = Array.from({ length: 100 }, (_, index) => {
  // Create varied data
  const categories = [
    "SEO",
    "WooCommerce",
    "Forms",
    "Page Builders",
    "Security",
    "Backup",
    "Performance",
    "Social Media",
    "Email Marketing",
    "Analytics",
    "Media",
    "Membership",
    "LMS",
    "Booking",
    "Events",
    "Maps",
    "Multilingual",
    "Caching",
    "Gutenberg",
    "Elementor",
  ]

  const megapacks = ["English", "World", null]
  const ratings = [3, 4, 5]
  const downloads = ["5K+", "10K+", "25K+", "50K+", "100K+"]

  // Generate plugin name based on category
  const category = categories[index % categories.length]
  const pluginNames = {
    SEO: ["WP SEO Pro", "SEO Master", "Rank Optimizer", "Meta Manager", "SEO Toolkit"],
    WooCommerce: ["WooCommerce Booster", "Shop Enhancer", "Cart Optimizer", "Product Showcase", "WC Extensions Pack"],
    Forms: ["Form Builder Pro", "Contact Form Master", "Advanced Forms", "Form Creator", "Smart Forms"],
    "Page Builders": [
      "Page Builder Elite",
      "Visual Composer Pro",
      "Drag & Drop Builder",
      "Layout Master",
      "Page Creator",
    ],
    Security: ["Security Shield", "WP Firewall", "Malware Scanner", "Login Protector", "Security Suite"],
    Backup: ["Backup Guardian", "Auto Backup", "Site Saver", "Backup Master", "Cloud Backup"],
    Performance: ["Speed Optimizer", "Cache Master", "Performance Booster", "Loading Accelerator", "WP Rocket Plus"],
    "Social Media": ["Social Media Master", "Share Buttons Pro", "Social Feed", "Social Connect", "Auto Poster"],
    "Email Marketing": [
      "Email Marketing Suite",
      "Newsletter Pro",
      "Subscriber Manager",
      "Email Automation",
      "List Builder",
    ],
    Analytics: ["Analytics Dashboard", "Stats Tracker", "Visitor Insights", "Conversion Monitor", "Traffic Analyzer"],
    Media: ["Media Manager Pro", "Gallery Master", "Image Optimizer", "Video Player Plus", "Media Library Enhancer"],
    Membership: ["Membership Pro", "User Access Manager", "Content Locker", "Subscription Manager", "Member Directory"],
    LMS: ["Learning Management Pro", "Course Builder", "Quiz Master", "Student Manager", "E-Learning Suite"],
    Booking: [
      "Booking Calendar Pro",
      "Appointment Manager",
      "Reservation System",
      "Schedule Master",
      "Booking Form Builder",
    ],
    Events: ["Events Calendar Pro", "Event Manager", "Ticket Seller", "Event Registration", "Event Organizer"],
    Maps: ["Maps Pro", "Location Manager", "Store Locator", "Interactive Maps", "Google Maps Integration"],
    Multilingual: ["Multilingual Pro", "Language Switcher", "Translation Manager", "WPML Extension", "Polylang Addon"],
    Caching: ["Cache Pro", "Speed Cache", "Browser Cache Manager", "Database Optimizer", "Minify Master"],
    Gutenberg: [
      "Gutenberg Blocks Pro",
      "Block Editor Enhancer",
      "Custom Blocks",
      "Gutenberg Templates",
      "Block Library",
    ],
    Elementor: ["Elementor Addons Pro", "Widget Pack", "Template Library", "Elementor Extensions", "Design Toolkit"],
  }

  // Get a name based on category
  const nameOptions = pluginNames[category as keyof typeof pluginNames] || ["Plugin"]
  const name = nameOptions[index % nameOptions.length] + " " + (index + 1)

  // Generate descriptions based on category
  const descriptions = {
    SEO: "Advanced SEO toolkit with keyword optimization, content analysis, and more.",
    WooCommerce: "Enhance your WooCommerce store with advanced features, checkout options, and marketing tools.",
    Forms: "Create advanced forms with conditional logic, payment integration, and file uploads.",
    "Page Builders": "Drag and drop page builder with premium templates and advanced design options.",
    Security: "Complete WordPress security solution with firewall, malware scanning, and login protection.",
    Backup: "Automated backups with cloud storage integration and one-click restore functionality.",
    Performance: "Boost your WordPress site speed with caching, minification, and image optimization.",
    "Social Media": "Integrate all social media platforms with sharing buttons, feeds, and analytics.",
    "Email Marketing": "Complete email marketing solution with newsletter management and automation.",
    Analytics: "Comprehensive analytics dashboard with visitor tracking and conversion monitoring.",
    Media: "Advanced media management with gallery options, image optimization, and video embedding.",
    Membership: "Create membership sites with content restriction, user roles, and payment integration.",
    LMS: "Build online courses with lessons, quizzes, certificates, and student management.",
    Booking: "Appointment booking system with calendar, payment options, and email notifications.",
    Events: "Event management with calendar, registration, ticketing, and attendee management.",
    Maps: "Interactive maps with custom markers, directions, and location filtering.",
    Multilingual: "Create multilingual websites with translation management and language switching.",
    Caching: "Speed up your website with advanced caching, minification, and optimization.",
    Gutenberg: "Extend the Gutenberg editor with custom blocks, templates, and styling options.",
    Elementor: "Add premium widgets, templates, and features to the Elementor page builder.",
  }

  return {
    id: `plugin-${index + 1}`,
    name,
    category,
    description: descriptions[category as keyof typeof descriptions] || "A premium WordPress plugin.",
    rating: ratings[index % ratings.length],
    downloads: downloads[index % downloads.length],
    megapack: megapacks[index % megapacks.length],
    price: "Included in Membership",
    image: "/wordpress-plugin-images.png",
  }
})
