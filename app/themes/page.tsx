import Image from "next/image"
import { Search, Grid3X3, List, Star, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ThemesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">WordPress Themes</h1>
          <p className="text-gray-600">Browse our collection of premium WordPress themes for any type of website</p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg border p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search themes..." className="pl-8 bg-white" />
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4 mb-6">
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {[
                "Business",
                "E-commerce",
                "Blog",
                "Portfolio",
                "Magazine",
                "Education",
                "Travel",
                "Restaurant",
                "Real Estate",
              ].map((category) => (
                <div className="flex items-center space-x-2" key={category}>
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4 mb-6">
            <h3 className="font-semibold mb-3">Features</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="responsive" />
                <Label htmlFor="responsive" className="text-sm font-normal cursor-pointer">
                  Responsive Design
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="woocommerce" />
                <Label htmlFor="woocommerce" className="text-sm font-normal cursor-pointer">
                  WooCommerce Ready
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="rtl" />
                <Label htmlFor="rtl" className="text-sm font-normal cursor-pointer">
                  RTL Support
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="multilingual" />
                <Label htmlFor="multilingual" className="text-sm font-normal cursor-pointer">
                  Multilingual Ready
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="page-builder" />
                <Label htmlFor="page-builder" className="text-sm font-normal cursor-pointer">
                  Page Builder Compatible
                </Label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-3">Rating</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div className="flex items-center space-x-2" key={rating}>
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="text-sm font-normal cursor-pointer flex items-center">
                    {Array(rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    {Array(5 - rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    <span className="ml-1">& Up</span>
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg border p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">Showing 1-9 of 48 themes</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm whitespace-nowrap">Sort by:</span>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm whitespace-nowrap">Show:</span>
                <Select defaultValue="9">
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Show" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="18">18</SelectItem>
                    <SelectItem value="36">36</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Theme Cards */}
            {[
              {
                name: "Business Pro",
                category: "Business",
                description:
                  "Professional business theme with modern design and powerful features for corporate websites.",
                rating: 5,
                downloads: "25K+",
                price: "Included in Enterprise Plan",
                image: "/wordpress-theme-showcase.png",
              },
              {
                name: "ShopMaster",
                category: "E-commerce",
                description: "Feature-rich WooCommerce theme designed for online stores with multiple layout options.",
                rating: 5,
                downloads: "32K+",
                price: "Included in Enterprise Plan",
                image: "/wordpress-theme-showcase.png",
              },
              {
                name: "BlogMaster",
                category: "Blog",
                description: "Clean and elegant blog theme with multiple post formats and customization options.",
                rating: 4,
                downloads: "18K+",
                price: "Included in Enterprise Plan",
                image: "/wordpress-theme-showcase.png",
              },
              {
                name: "Portfolio Elite",
                category: "Portfolio",
                description:
                  "Showcase your work with this premium portfolio theme featuring beautiful galleries and project pages.",
                rating: 5,
                downloads: "15K+",
                price: "Included in Enterprise Plan",
                image: "/wordpress-theme-showcase.png",
              },
              {
                name: "Edu Academy",
                category: "Education",
                description: "Perfect for educational institutions with course management and event calendar features.",
                rating: 4,
                downloads: "12K+",
                price: "Included in Enterprise Plan",
                image: "/wordpress-theme-showcase.png",
              },
              {
                name: "Magazine Pro",
                category: "Magazine",
                description: "Modern magazine theme with flexible layouts and advanced post display options.",
                rating: 5,
                downloads: "20K+",
                price: "Included in Enterprise Plan",
                image: "/wordpress-theme-showcase.png",
              },
              {
                name: "Travel Explorer",
                category: "Travel",
                description: "Showcase travel destinations and experiences with this visually stunning theme.",
                rating: 4,
                downloads: "14K+",
                price: "Included in Enterprise Plan",
                image: "/wordpress-theme-showcase.png",
              },
              {
                name: "Restaurant Deluxe",
                category: "Restaurant",
                description: "Elegant theme for restaurants with menu management, reservation system, and gallery.",
                rating: 5,
                downloads: "16K+",
                price: "Included in Enterprise Plan",
                image: "/wordpress-theme-showcase.png",
              },
              {
                name: "Real Estate Pro",
                category: "Real Estate",
                description: "Feature-rich theme for real estate agencies with property listings and agent profiles.",
                rating: 5,
                downloads: "19K+",
                price: "Included in Enterprise Plan",
                image: "/wordpress-theme-showcase.png",
              },
            ].map((theme, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                  <Image src={theme.image || "/placeholder.svg"} alt={theme.name} fill className="object-cover" />
                  <Badge className="absolute top-2 right-2 bg-purple-600">Premium</Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{theme.name}</CardTitle>
                      <CardDescription>{theme.category}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {theme.downloads}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-600 line-clamp-2">{theme.description}</p>
                  <div className="flex items-center mt-2">
                    {Array(theme.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    {Array(5 - theme.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    <span className="text-xs text-gray-500 ml-2">(80+ reviews)</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="text-sm font-medium text-gray-700">{theme.price}</div>
                  <Button size="sm">View Demo</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
