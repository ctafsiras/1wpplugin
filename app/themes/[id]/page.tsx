"use client"

import { CardFooter } from "@/components/ui/card"

import { CardContent } from "@/components/ui/card"

import { CardDescription } from "@/components/ui/card"

import { CardTitle } from "@/components/ui/card"

import { CardHeader } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { themesData } from "@/data/themes"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Download,
  AlertTriangle,
  FileText,
  Code,
  Settings,
  HelpCircle,
  Layout,
  Smartphone,
  Monitor,
} from "lucide-react"
import Link from "next/link"

export default function ThemeDetailPage() {
  const params = useParams()
  const [theme, setTheme] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundTheme = themesData.find((t) => t.id === params.id)
      setTheme(foundTheme)
      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3 mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!theme) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Theme Not Found</h1>
        <p className="text-gray-600 mb-8">The theme you're looking for doesn't exist or has been removed.</p>
        <Link href="/themes">
          <Button>Browse All Themes</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Link href="/themes" className="text-blue-600 hover:underline">
            Themes
          </Link>
          <span className="text-gray-400">/</span>
          <Link href={`/themes?category=${theme.category}`} className="text-blue-600 hover:underline">
            {theme.category}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{theme.name}</span>
        </div>
        <h1 className="text-3xl font-bold">{theme.name}</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="relative h-96 w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
            <Image src={theme.image || "/placeholder.svg"} alt={theme.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative h-24 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={theme.image || "/placeholder.svg"}
                  alt={`${theme.name} screenshot ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex">
              {Array(theme.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              {Array(5 - theme.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
            </div>
            <span className="text-gray-600">(80+ reviews)</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              {theme.downloads} Downloads
            </Badge>
            <Badge className="bg-purple-600">Premium</Badge>
            <Badge variant="outline">{theme.category}</Badge>
            <Badge variant="outline">WordPress 6.0+</Badge>
            <Badge variant="outline">Responsive</Badge>
          </div>

          <p className="text-gray-700 mb-6">{theme.description}</p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Theme Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Version</p>
                <p>2.1.0</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <p>April 10, 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Requires WordPress</p>
                <p>6.0 or higher</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Compatible With</p>
                <p>WooCommerce, Elementor, WPML</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Languages</p>
                <p>English, Spanish, French, German</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">License</p>
                <p>GPL v2 or later</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <Button size="lg" variant="outline">
              Live Demo
            </Button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              This theme is included in our Enterprise Plan.{" "}
              <Link href="/pricing" className="text-blue-600 hover:underline">
                View pricing
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full justify-start mb-8">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="changelog">Changelog</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-0">
          <div className="prose max-w-none">
            <h2>About {theme.name}</h2>
            <p>
              {theme.name} is a premium WordPress theme designed specifically for {theme.category.toLowerCase()}{" "}
              websites. With its modern design, powerful features, and user-friendly interface, it provides everything
              you need to create a professional {theme.category.toLowerCase()} website without any coding knowledge.
            </p>
            <p>
              Whether you're creating a new website or redesigning an existing one, {theme.name} offers the flexibility
              and customization options you need to achieve the perfect look and feel for your{" "}
              {theme.category.toLowerCase()} brand.
            </p>
            <p>
              Built with the latest web technologies and best practices, {theme.name} ensures fast loading times, mobile
              responsiveness, and SEO optimization out of the box, helping you provide the best possible user experience
              for your visitors.
            </p>
            <h3>Why Choose {theme.name}?</h3>
            <ul>
              <li>Modern and professional design specifically for {theme.category.toLowerCase()} websites</li>
              <li>Fully responsive layout that looks great on all devices</li>
              <li>Customizable options to match your brand identity</li>
              <li>Built-in SEO optimization for better search engine rankings</li>
              <li>Regular updates with new features and improvements</li>
              <li>Excellent customer support</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-0">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Layout className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Multiple Layout Options</h3>
                  <p className="text-gray-600">
                    Choose from various pre-designed layouts for your homepage, blog, and other pages.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Fully Responsive</h3>
                  <p className="text-gray-600">
                    Looks perfect on all devices, from desktop computers to mobile phones.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Monitor className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Customization Options</h3>
                  <p className="text-gray-600">
                    Easily customize colors, fonts, layouts, and more through the WordPress Customizer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
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
                    className="h-5 w-5 text-purple-600"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Page Builder Compatible</h3>
                  <p className="text-gray-600">
                    Works seamlessly with popular page builders like Elementor, Beaver Builder, and Divi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
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
                    className="h-5 w-5 text-purple-600"
                  >
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Color Options</h3>
                  <p className="text-gray-600">
                    Choose from unlimited color options to match your brand identity perfectly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
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
                    className="h-5 w-5 text-purple-600"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Typography Options</h3>
                  <p className="text-gray-600">
                    Access to Google Fonts library with hundreds of font options to choose from.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
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
                    className="h-5 w-5 text-purple-600"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Social Media Integration</h3>
                  <p className="text-gray-600">
                    Easily connect your social media accounts and display them on your website.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
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
                    className="h-5 w-5 text-purple-600"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">SEO Optimized</h3>
                  <p className="text-gray-600">
                    Built with SEO best practices to help your website rank higher in search engines.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
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
                    className="h-5 w-5 text-purple-600"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">WooCommerce Ready</h3>
                  <p className="text-gray-600">
                    Fully compatible with WooCommerce for creating an online store with your website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="installation" className="mt-0">
          <div className="prose max-w-none">
            <h2>Installation Instructions</h2>
            <p>Follow these simple steps to install and activate {theme.name} on your WordPress site:</p>

            <h3>Method 1: Install via WordPress Dashboard</h3>
            <ol>
              <li>Log in to your WordPress admin panel.</li>
              <li>
                Navigate to <strong>Appearance → Themes</strong>.
              </li>
              <li>
                Click the <strong>Add New</strong> button at the top of the page.
              </li>
              <li>
                Click the <strong>Upload Theme</strong> button.
              </li>
              <li>
                Click <strong>Choose File</strong> and select the {theme.name}.zip file you downloaded.
              </li>
              <li>
                Click <strong>Install Now</strong>.
              </li>
              <li>
                After installation, click <strong>Activate</strong> to activate the theme.
              </li>
            </ol>

            <h3>Method 2: Install via FTP</h3>
            <ol>
              <li>Unzip the {theme.name}.zip file you downloaded.</li>
              <li>Connect to your server using an FTP client.</li>
              <li>Upload the theme folder to the `/wp-content/themes/` directory on your server.</li>
              <li>Log in to your WordPress admin panel.</li>
              <li>
                Navigate to <strong>Appearance → Themes</strong>.
              </li>
              <li>
                Find {theme.name} and click <strong>Activate</strong>.
              </li>
            </ol>

            <h3>After Installation</h3>
            <ol>
              <li>
                After activating the theme, you'll see a notice recommending required and optional plugins. Install and
                activate these plugins for full theme functionality.
              </li>
              <li>
                Navigate to <strong>Appearance → Customize</strong> to configure the theme according to your
                preferences.
              </li>
              <li>
                Import demo content (optional) by going to{" "}
                <strong>Appearance → {theme.name} Options → Demo Import</strong>.
              </li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Make sure your server meets the minimum requirements before installing:
                      <ul>
                        <li>WordPress 6.0 or higher</li>
                        <li>PHP 7.4 or higher</li>
                        <li>MySQL 5.6 or higher</li>
                        <li>Memory limit of at least 128 MB</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-0">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">
                Is {theme.name} compatible with the latest version of WordPress?
              </h3>
              <p className="text-gray-600">
                Yes, {theme.name} is regularly updated to ensure compatibility with the latest version of WordPress. We
                test each update thoroughly to ensure smooth operation.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">Can I use {theme.name} with page builders like Elementor?</h3>
              <p className="text-gray-600">
                Yes, {theme.name} is fully compatible with popular page builders including Elementor, Beaver Builder,
                and Divi. This allows you to create custom layouts with drag-and-drop ease.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">Is {theme.name} translation ready?</h3>
              <p className="text-gray-600">
                Yes, {theme.name} is fully translation ready and compatible with popular translation plugins like WPML
                and Polylang. It includes .pot files to make translation easy.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">Does {theme.name} support WooCommerce?</h3>
              <p className="text-gray-600">
                Yes, {theme.name} is fully compatible with WooCommerce. It includes custom styling for WooCommerce
                elements to ensure your online store looks great and functions perfectly.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">Can I use {theme.name} on multiple websites?</h3>
              <p className="text-gray-600">
                Yes, depending on your membership plan. Our Enterprise Plan allows you to use {theme.name} on unlimited
                websites. Please refer to our pricing page for more details.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">Do you offer customization services for {theme.name}?</h3>
              <p className="text-gray-600">
                Yes, we offer customization services to help you tailor {theme.name} to your specific needs. Please
                contact our support team for more information and pricing.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="changelog" className="mt-0">
          <div className="prose max-w-none">
            <h2>Changelog</h2>

            <div className="mb-8">
              <h3 className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Version 2.1.0 <span className="text-sm text-gray-500">(April 10, 2025)</span>
              </h3>
              <ul>
                <li>Added compatibility with WordPress 6.4</li>
                <li>Updated WooCommerce templates to the latest version</li>
                <li>Added new homepage layout option</li>
                <li>Improved mobile responsiveness</li>
                <li>Fixed minor styling issues in the blog layout</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Version 2.0.0 <span className="text-sm text-gray-500">(February 5, 2025)</span>
              </h3>
              <ul>
                <li>Major update with new design options</li>
                <li>Added Elementor compatibility</li>
                <li>Improved customizer options</li>
                <li>Added new header and footer layouts</li>
                <li>Enhanced typography options</li>
                <li>Improved performance and loading speed</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Version 1.5.2 <span className="text-sm text-gray-500">(December 12, 2024)</span>
              </h3>
              <ul>
                <li>Fixed compatibility issues with PHP 8.1</li>
                <li>Updated language files</li>
                <li>Fixed sidebar widget styling</li>
                <li>Improved accessibility</li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Version 1.5.0 <span className="text-sm text-gray-500">(October 20, 2024)</span>
              </h3>
              <ul>
                <li>Added dark mode option</li>
                <li>Improved WooCommerce integration</li>
                <li>Added new blog layouts</li>
                <li>Enhanced mobile menu</li>
                <li>Fixed various minor bugs</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="support" className="mt-0">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <HelpCircle className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Documentation</h3>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive documentation covers everything you need to know about installing, configuring,
                    and using {theme.name}.
                  </p>
                  <Button variant="outline">View Documentation</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Code className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Developer Resources</h3>
                  <p className="text-gray-600 mb-4">
                    Access our developer documentation, hooks reference, and code examples to extend and customize{" "}
                    {theme.name}.
                  </p>
                  <Button variant="outline">Developer Docs</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Settings className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Support</h3>
                  <p className="text-gray-600 mb-4">
                    Our support team is available to help you with any technical issues or questions you may have about{" "}
                    {theme.name}.
                  </p>
                  <Button variant="outline">Contact Support</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Video Tutorials</h3>
                  <p className="text-gray-600 mb-4">
                    Watch our step-by-step video tutorials to learn how to set up and customize {theme.name}.
                  </p>
                  <Button variant="outline">Watch Tutorials</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-purple-50 rounded-lg border border-purple-200 p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Need Custom Design?</h3>
            <p className="text-center text-gray-700 mb-6">
              Our team of WordPress experts can help you customize {theme.name} to match your brand identity perfectly.
            </p>
            <div className="flex justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">Request Custom Design</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Related Themes</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {themesData
            .filter((t) => t.category === theme.category && t.id !== theme.id)
            .slice(0, 4)
            .map((relatedTheme) => (
              <Card key={relatedTheme.id} className="overflow-hidden">
                <div className="relative h-40 bg-gray-100">
                  <Image
                    src={relatedTheme.image || "/placeholder.svg"}
                    alt={relatedTheme.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-purple-600">Premium</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{relatedTheme.name}</CardTitle>
                  <CardDescription>{relatedTheme.category}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-600 line-clamp-2">{relatedTheme.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="text-sm font-medium text-gray-700">{relatedTheme.price}</div>
                  <Link href={`/themes/${relatedTheme.id}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
