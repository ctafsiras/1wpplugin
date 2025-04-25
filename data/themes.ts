// Generate 100 theme items for demo purposes
export const themesData = Array.from({ length: 100 }, (_, index) => {
  // Create varied data
  const categories = [
    "Business",
    "E-commerce",
    "Blog",
    "Portfolio",
    "Magazine",
    "Education",
    "Travel",
    "Restaurant",
    "Real Estate",
    "Health",
    "Fashion",
    "Photography",
    "Wedding",
    "Agency",
    "Nonprofit",
    "Sports",
    "Technology",
    "Entertainment",
    "News",
    "Directory",
  ]

  const ratings = [3, 4, 5]
  const downloads = ["5K+", "10K+", "25K+", "50K+", "100K+"]

  // Generate theme name based on category
  const category = categories[index % categories.length]
  const themeNames = {
    Business: ["Business Pro", "Corporate Plus", "Enterprise", "Company", "Professional"],
    "E-commerce": ["ShopMaster", "StorePress", "MarketPlace", "ShopZone", "E-Store"],
    Blog: ["BlogMaster", "Writer", "Journalist", "Blogger Pro", "Content"],
    Portfolio: ["Portfolio Elite", "Showcase", "Creative Pro", "Designer", "Artisan"],
    Magazine: ["Magazine Pro", "News Portal", "Editorial", "Press", "Gazette"],
    Education: ["Edu Academy", "Learning Center", "University", "School", "Course Hub"],
    Travel: ["Travel Explorer", "Adventure", "Destination", "Wanderlust", "Journey"],
    Restaurant: ["Restaurant Deluxe", "Bistro", "Cuisine", "Cafe", "Food Blog"],
    "Real Estate": ["Real Estate Pro", "Property Listing", "Realtor", "Home Finder", "Estate Agent"],
    Health: ["Health & Wellness", "Medical", "Fitness", "Spa", "Clinic"],
    Fashion: ["Fashion Pro", "Style", "Boutique", "Elegance", "Trendy"],
    Photography: ["Photography Pro", "Gallery", "Lens", "Shutter", "Portfolio Plus"],
    Wedding: ["Wedding Planner", "Celebration", "Matrimony", "Bride & Groom", "Event"],
    Agency: ["Agency Pro", "Digital Studio", "Creative Agency", "Marketing Firm", "Consultancy"],
    Nonprofit: ["Nonprofit Pro", "Charity", "Foundation", "Donation", "Volunteer"],
    Sports: ["Sports Club", "Fitness Center", "Team", "Athlete", "Gym"],
    Technology: ["Tech Pro", "Digital", "Innovation", "Startup", "App Showcase"],
    Entertainment: ["Entertainment Pro", "Cinema", "Music", "Events", "Festival"],
    News: ["News Portal", "Daily Press", "Bulletin", "Newsroom", "Reporter"],
    Directory: ["Directory Pro", "Listing", "Classified", "Business Directory", "Places"],
  }

  // Get a name based on category
  const nameOptions = themeNames[category as keyof typeof themeNames] || ["Theme"]
  const name = nameOptions[index % nameOptions.length] + " " + (index + 1)

  // Generate descriptions based on category
  const descriptions = {
    Business: "Professional business theme with modern design and powerful features for corporate websites.",
    "E-commerce": "Feature-rich WooCommerce theme designed for online stores with multiple layout options.",
    Blog: "Clean and elegant blog theme with multiple post formats and customization options.",
    Portfolio: "Showcase your work with this premium portfolio theme featuring beautiful galleries and project pages.",
    Magazine: "Modern magazine theme with flexible layouts and advanced post display options.",
    Education: "Perfect for educational institutions with course management and event calendar features.",
    Travel: "Showcase travel destinations and experiences with this visually stunning theme.",
    Restaurant: "Elegant theme for restaurants with menu management, reservation system, and gallery.",
    "Real Estate": "Feature-rich theme for real estate agencies with property listings and agent profiles.",
    Health: "Clean and professional theme for medical practices, clinics, and wellness centers.",
    Fashion: "Stylish theme for fashion blogs, boutiques, and clothing stores with product showcases.",
    Photography: "Beautiful theme for photographers with gallery layouts, portfolio options, and image protection.",
    Wedding: "Elegant theme for wedding planners and couples with event countdown and RSVP features.",
    Agency: "Dynamic theme for creative agencies with portfolio showcase and service presentation.",
    Nonprofit: "Impactful theme for nonprofits with donation integration, event management, and volunteer sections.",
    Sports: "Energetic theme for sports clubs and fitness centers with team profiles and event calendars.",
    Technology: "Modern theme for tech companies and startups with product showcases and feature highlights.",
    Entertainment: "Vibrant theme for entertainment venues with event listings, ticket sales, and media galleries.",
    News: "Professional news theme with breaking news ticker, featured stories, and category sections.",
    Directory: "Comprehensive directory theme with listing management, maps integration, and search filters.",
  }

  return {
    id: `theme-${index + 1}`,
    name,
    category,
    description: descriptions[category as keyof typeof descriptions] || "A premium WordPress theme.",
    rating: ratings[index % ratings.length],
    downloads: downloads[index % downloads.length],
    price: "Included in Enterprise Plan",
    image: "/wordpress-theme-showcase.png",
  }
})
