"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { pluginsData } from "@/data/plugins"
import { themesData } from "@/data/themes"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Star, Download, SearchIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type SearchResult = {
  id: string
  name: string
  category: string
  description: string
  rating: number
  downloads: string
  megapack?: string
  price: string
  image: string
  type: "plugin" | "theme"
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<SearchResult[]>([])
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([])
  const [activeFilters, setActiveFilters] = useState<{
    categories: string[]
    megapacks: string[]
    ratings: number[]
    types: ("plugin" | "theme")[]
  }>({
    categories: [],
    megapacks: [],
    ratings: [],
    types: [],
  })

  // Get all unique categories from plugins and themes
  const allCategories = [
    ...new Set([...pluginsData.map((plugin) => plugin.category), ...themesData.map((theme) => theme.category)]),
  ].sort()

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const performSearch = (searchTerm: string) => {
    const term = searchTerm.toLowerCase()

    // Search in plugins
    const pluginResults = pluginsData
      .map((plugin) => ({
        ...plugin,
        type: "plugin" as const,
      }))
      .filter(
        (plugin) =>
          plugin.name.toLowerCase().includes(term) ||
          plugin.description.toLowerCase().includes(term) ||
          plugin.category.toLowerCase().includes(term),
      )

    // Search in themes
    const themeResults = themesData
      .map((theme) => ({
        ...theme,
        type: "theme" as const,
      }))
      .filter(
        (theme) =>
          theme.name.toLowerCase().includes(term) ||
          theme.description.toLowerCase().includes(term) ||
          theme.category.toLowerCase().includes(term),
      )

    // Combine results
    const combinedResults = [...pluginResults, ...themeResults]
    setResults(combinedResults)
    setFilteredResults(combinedResults)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(searchQuery)
  }

  const handleFilterChange = (filterType: keyof typeof activeFilters, value: string | number) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev }

      if (filterType === "ratings") {
        // Handle ratings as numbers
        if (newFilters.ratings.includes(value as number)) {
          newFilters.ratings = newFilters.ratings.filter((r) => r !== value)
        } else {
          newFilters.ratings = [...newFilters.ratings, value as number]
        }
      } else if (filterType === "types") {
        // Handle types
        if (newFilters.types.includes(value as "plugin" | "theme")) {
          newFilters.types = newFilters.types.filter((t) => t !== value)
        } else {
          newFilters.types = [...newFilters.types, value as "plugin" | "theme"]
        }
      } else {
        // Handle categories and megapacks
        if (newFilters[filterType].includes(value as string)) {
          newFilters[filterType] = newFilters[filterType].filter((item) => item !== value)
        } else {
          newFilters[filterType] = [...newFilters[filterType], value as string]
        }
      }

      return newFilters
    })
  }

  // Apply filters whenever activeFilters changes
  useEffect(() => {
    let filtered = [...results]

    // Filter by type
    if (activeFilters.types.length > 0) {
      filtered = filtered.filter((item) => activeFilters.types.includes(item.type))
    }

    // Filter by category
    if (activeFilters.categories.length > 0) {
      filtered = filtered.filter((item) => activeFilters.categories.includes(item.category))
    }

    // Filter by megapack
    if (activeFilters.megapacks.length > 0) {
      filtered = filtered.filter((item) => item.megapack && activeFilters.megapacks.includes(item.megapack))
    }

    // Filter by rating
    if (activeFilters.ratings.length > 0) {
      filtered = filtered.filter((item) => activeFilters.ratings.includes(item.rating))
    }

    setFilteredResults(filtered)
  }, [activeFilters, results])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          <p className="text-gray-600">
            {filteredResults.length} results found for "{query}"
          </p>
        </div>

        <div className="w-full md:w-auto">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="search"
              placeholder="Search again..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64"
            />
            <Button type="submit">
              <SearchIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg border p-4 mb-6">
            <h3 className="font-semibold mb-3">Type</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="type-plugin"
                  checked={activeFilters.types.includes("plugin")}
                  onCheckedChange={() => handleFilterChange("types", "plugin")}
                />
                <Label htmlFor="type-plugin" className="text-sm font-normal cursor-pointer">
                  Plugins
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="type-theme"
                  checked={activeFilters.types.includes("theme")}
                  onCheckedChange={() => handleFilterChange("types", "theme")}
                />
                <Label htmlFor="type-theme" className="text-sm font-normal cursor-pointer">
                  Themes
                </Label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4 mb-6">
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {allCategories.map((category) => (
                <div className="flex items-center space-x-2" key={category}>
                  <Checkbox
                    id={`category-${category}`}
                    checked={activeFilters.categories.includes(category)}
                    onCheckedChange={() => handleFilterChange("categories", category)}
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
                  checked={activeFilters.megapacks.includes("English")}
                  onCheckedChange={() => handleFilterChange("megapacks", "English")}
                />
                <Label htmlFor="english-megapack" className="text-sm font-normal cursor-pointer">
                  English Megapack
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="world-megapack"
                  checked={activeFilters.megapacks.includes("World")}
                  onCheckedChange={() => handleFilterChange("megapacks", "World")}
                />
                <Label htmlFor="world-megapack" className="text-sm font-normal cursor-pointer">
                  World Megapack
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
                    checked={activeFilters.ratings.includes(rating)}
                    onCheckedChange={() => handleFilterChange("ratings", rating)}
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
          {filteredResults.length === 0 ? (
            <div className="bg-white rounded-lg border p-8 text-center">
              <h3 className="text-lg font-bold mb-2">No results found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((item) => (
                <Card key={`${item.type}-${item.id}`} className="overflow-hidden">
                  <div className="relative h-40 bg-gray-100">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    <Badge className="absolute top-2 right-2 bg-purple-600">
                      {item.megapack ? `${item.megapack} Megapack` : item.type === "plugin" ? "Plugin" : "Theme"}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>{item.category}</CardDescription>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {item.downloads}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    <div className="flex items-center mt-2">
                      {Array(item.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      {Array(5 - item.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gray-300" />
                        ))}
                      <span className="text-xs text-gray-500 ml-2">(120+ reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center pt-2">
                    <div className="text-sm font-medium text-gray-700">{item.price}</div>
                    <Link href={`/${item.type}s/${item.id}`}>
                      <Button size="sm">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
