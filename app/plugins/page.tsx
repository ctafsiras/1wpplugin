"use client"

import type React from "react"

import Image from "next/image"
import { Search, Grid3X3, List, Star, Download } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { pluginsData } from "@/data/plugins"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"

export default function PluginsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [sortBy, setSortBy] = useState("popular")
  const [activeTab, setActiveTab] = useState("all")

  // Filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMegapacks, setSelectedMegapacks] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])
  const [selectedPriceTypes, setSelectedPriceTypes] = useState<string[]>([])

  // Get all unique categories
  const categories = [...new Set(pluginsData.map((plugin) => plugin.category))].sort()

  // Apply filters and get filtered plugins
  const getFilteredPlugins = () => {
    let filtered = [...pluginsData]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (plugin) =>
          plugin.name.toLowerCase().includes(query) ||
          plugin.description.toLowerCase().includes(query) ||
          plugin.category.toLowerCase().includes(query),
      )
    }

    // Filter by tab
    if (activeTab === "megapacks") {
      filtered = filtered.filter((plugin) => plugin.megapack)
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((plugin) => selectedCategories.includes(plugin.category))
    }

    // Filter by megapacks
    if (selectedMegapacks.length > 0) {
      filtered = filtered.filter((plugin) => plugin.megapack && selectedMegapacks.includes(plugin.megapack))
    }

    // Filter by ratings
    if (selectedRatings.length > 0) {
      filtered = filtered.filter((plugin) => selectedRatings.includes(plugin.rating))
    }

    // Sort plugins
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => {
          const aDownloads = Number.parseInt(a.downloads.replace(/\D/g, ""))
          const bDownloads = Number.parseInt(b.downloads.replace(/\D/g, ""))
          return bDownloads - aDownloads
        })
        break
      case "newest":
        // For demo purposes, we'll just reverse the array
        filtered.reverse()
        break
      case "price-low":
        // All plugins have the same price in this demo
        break
      case "price-high":
        // All plugins have the same price in this demo
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
    }

    return filtered
  }

  const filteredPlugins = getFilteredPlugins()
  const totalPages = Math.ceil(filteredPlugins.length / itemsPerPage)
  const currentPlugins = filteredPlugins.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle category checkbox change
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
    setCurrentPage(1) // Reset to first page when filter changes
  }

  // Handle megapack checkbox change
  const handleMegapackChange = (megapack: string, checked: boolean) => {
    if (checked) {
      setSelectedMegapacks([...selectedMegapacks, megapack])
    } else {
      setSelectedMegapacks(selectedMegapacks.filter((m) => m !== megapack))
    }
    setCurrentPage(1)
  }

  // Handle rating checkbox change
  const handleRatingChange = (rating: number, checked: boolean) => {
    if (checked) {
      setSelectedRatings([...selectedRatings, rating])
    } else {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating))
    }
    setCurrentPage(1)
  }

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
    // Update URL with search query
    const params = new URLSearchParams(searchParams.toString())
    if (searchQuery) {
      params.set("q", searchQuery)
    } else {
      params.delete("q")
    }
    router.push(`/plugins?${params.toString()}`)
  }

  // Initialize from URL params
  useEffect(() => {
    const query = searchParams.get("q")
    const category = searchParams.get("category")

    if (query) {
      setSearchQuery(query)
    }

    if (category) {
      setSelectedCategories([category])
    }
  }, [searchParams])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">WordPress Plugins</h1>
          <p className="text-gray-600">
            Browse our collection of premium English Megapack and World Megapack WordPress plugins
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All Plugins</TabsTrigger>
              <TabsTrigger value="megapacks">Megapacks</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg border p-4 mb-6">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search plugins..."
                className="pl-8 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="sr-only">
                Search
              </Button>
            </form>
          </div>

          <div className="bg-white rounded-lg border p-4 mb-6">
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {categories.map((category) => (
                <div className="flex items-center space-x-2" key={category}>
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4 mb-6">
            <h3 className="font-semibold mb-3">Megapack Type</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="english-megapack"
                  checked={selectedMegapacks.includes("English")}
                  onCheckedChange={(checked) => handleMegapackChange("English", !!checked)}
                />
                <Label htmlFor="english-megapack" className="text-sm font-normal cursor-pointer">
                  English Megapack
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="world-megapack"
                  checked={selectedMegapacks.includes("World")}
                  onCheckedChange={(checked) => handleMegapackChange("World", !!checked)}
                />
                <Label htmlFor="world-megapack" className="text-sm font-normal cursor-pointer">
                  World Megapack
                </Label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4 mb-6">
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="free" />
                <Label htmlFor="free" className="text-sm font-normal cursor-pointer">
                  Free
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="premium" checked />
                <Label htmlFor="premium" className="text-sm font-normal cursor-pointer">
                  Premium
                </Label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-3">Rating</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div className="flex items-center space-x-2" key={rating}>
                  <Checkbox
                    id={`rating-${rating}`}
                    checked={selectedRatings.includes(rating)}
                    onCheckedChange={(checked) => handleRatingChange(rating, !!checked)}
                  />
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
            <div className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, filteredPlugins.length)} of {filteredPlugins.length} plugins
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm whitespace-nowrap">Sort by:</span>
                <Select
                  defaultValue={sortBy}
                  value={sortBy}
                  onValueChange={(value) => {
                    setSortBy(value)
                    setCurrentPage(1)
                  }}
                >
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
                <Select
                  defaultValue={itemsPerPage.toString()}
                  value={itemsPerPage.toString()}
                  onValueChange={(value) => {
                    setItemsPerPage(Number.parseInt(value))
                    setCurrentPage(1)
                  }}
                >
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Show" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                    <SelectItem value="96">96</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" value={activeTab}>
            <TabsContent value="all" className="mt-0">
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPlugins.map((plugin) => (
                    <Card key={plugin.id} className="overflow-hidden">
                      <div className="relative h-40 bg-gray-100">
                        <Image
                          src={plugin.image || "/placeholder.svg"}
                          alt={plugin.name}
                          fill
                          className="object-cover"
                        />
                        {plugin.megapack && (
                          <Badge className="absolute top-2 right-2 bg-purple-600">{plugin.megapack} Megapack</Badge>
                        )}
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{plugin.name}</CardTitle>
                            <CardDescription>{plugin.category}</CardDescription>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {plugin.downloads}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-600 line-clamp-2">{plugin.description}</p>
                        <div className="flex items-center mt-2">
                          {Array(plugin.rating)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          {Array(5 - plugin.rating)
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" />
                            ))}
                          <span className="text-xs text-gray-500 ml-2">(120+ reviews)</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-2">
                        <div className="text-sm font-medium text-gray-700">{plugin.price}</div>
                        <Link href={`/plugins/${plugin.id}`}>
                          <Button size="sm">View Details</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {currentPlugins.map((plugin) => (
                    <div key={plugin.id} className="bg-white rounded-lg border overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative h-48 md:h-auto md:w-64 bg-gray-100 flex-shrink-0">
                          <Image
                            src={plugin.image || "/placeholder.svg"}
                            alt={plugin.name}
                            fill
                            className="object-cover"
                          />
                          {plugin.megapack && (
                            <Badge className="absolute top-2 right-2 bg-purple-600">{plugin.megapack} Megapack</Badge>
                          )}
                        </div>
                        <div className="p-6 flex-1">
                          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                            <div>
                              <h3 className="text-xl font-bold">{plugin.name}</h3>
                              <p className="text-gray-500">{plugin.category}</p>
                              <div className="flex items-center mt-2">
                                {Array(plugin.rating)
                                  .fill(0)
                                  .map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                {Array(5 - plugin.rating)
                                  .fill(0)
                                  .map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-gray-300" />
                                  ))}
                                <span className="text-xs text-gray-500 ml-2">(120+ reviews)</span>
                              </div>
                            </div>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              {plugin.downloads}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{plugin.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-gray-700">{plugin.price}</div>
                            <Link href={`/plugins/${plugin.id}`}>
                              <Button>View Details</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
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
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNumber = i + 1
                      return (
                        <Button
                          key={pageNumber}
                          variant="outline"
                          size="sm"
                          className={
                            currentPage === pageNumber ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
                          }
                          onClick={() => setCurrentPage(pageNumber)}
                        >
                          {pageNumber}
                        </Button>
                      )
                    })}
                    {totalPages > 5 && <span className="mx-2">...</span>}
                    {totalPages > 5 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(totalPages)}
                        className={
                          currentPage === totalPages ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
                        }
                      >
                        {totalPages}
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
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
              )}
            </TabsContent>

            <TabsContent value="megapacks" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg border overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">English Megapack</h3>
                    <p className="text-gray-600 mb-4">
                      Access all our premium WordPress plugins with English language support. Perfect for
                      English-speaking markets.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>100+ Premium Plugins</span>
                      </li>
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>English Documentation</span>
                      </li>
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Regular Updates</span>
                      </li>
                    </ul>
                    <Link href="/pricing">
                      <Button className="w-full">View Pricing</Button>
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg border overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">World Megapack</h3>
                    <p className="text-gray-600 mb-4">
                      Access all our premium WordPress plugins with multilingual support for over 20 languages.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>100+ Premium Plugins</span>
                      </li>
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>20+ Languages Support</span>
                      </li>
                      <li className="flex items-center">
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
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Multilingual Documentation</span>
                      </li>
                    </ul>
                    <Link href="/pricing">
                      <Button className="w-full">View Pricing</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-bold mb-4">Megapack Plugins</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredPlugins
                    .filter((plugin) => plugin.megapack)
                    .slice(0, 6)
                    .map((plugin) => (
                      <Card key={plugin.id} className="overflow-hidden">
                        <div className="relative h-40 bg-gray-100">
                          <Image
                            src={plugin.image || "/placeholder.svg"}
                            alt={plugin.name}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-2 right-2 bg-purple-600">{plugin.megapack} Megapack</Badge>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{plugin.name}</CardTitle>
                          <CardDescription>{plugin.category}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-gray-600 line-clamp-2">{plugin.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center pt-2">
                          <div className="text-sm font-medium text-gray-700">{plugin.price}</div>
                          <Link href={`/plugins/${plugin.id}`}>
                            <Button size="sm">View Details</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
