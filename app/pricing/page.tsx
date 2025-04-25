import { CardFooter } from "@/components/ui/card"
import { Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Membership Plans & Pricing | 1WP.store",
  description:
    "Choose from our range of WordPress plugin and theme membership plans with options for English Support, World Support, and VPN services.",
  keywords:
    "WordPress pricing, plugin membership, theme pricing, WordPress VPN, English Support pack, World Support pack",
}

export default function PricingPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Membership Plans & Pricing</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get access to our premium collection of WordPress plugins and themes with English Support and World Support
          packs at competitive prices.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">English Support Pack</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>6 Months</CardTitle>
              <div className="text-3xl font-bold">
                €54.99<span className="text-sm font-normal text-gray-500">/6 months</span>
              </div>
              <CardDescription>Perfect for individual developers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to English Support plugins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Use on 3 websites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>6 months of updates</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                  <span className="text-gray-500">No Private no block Server</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                  <span className="text-gray-500">VPN service</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>12 Months</CardTitle>
              <div className="text-3xl font-bold">
                €79.99<span className="text-sm font-normal text-gray-500">/12 months</span>
              </div>
              <CardDescription>Extended support period</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to English Support plugins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Use on 3 websites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>12 months of updates</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                  <span className="text-gray-500">No Private no block Server</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                  <span className="text-gray-500">VPN service</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="py-1 px-3 bg-blue-600 text-white text-xs font-bold rounded-full w-fit mb-2">PREMIUM</div>
              <CardTitle>12M+ Private Server + VPN</CardTitle>
              <div className="text-3xl font-bold">
                €99.99<span className="text-sm font-normal text-gray-500">/12 months</span>
              </div>
              <CardDescription>Complete package with VPN</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to English Support plugins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Use on unlimited websites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>12 months of updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Private no block Server</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>VPN service included</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">World Support Pack</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>1 Month</CardTitle>
              <div className="text-3xl font-bold">
                €14.99<span className="text-sm font-normal text-gray-500">/month</span>
              </div>
              <CardDescription>Try before you commit</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to World Support plugins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Multilingual support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Use on 1 website</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                  <span className="text-gray-500">No Private no block Server</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <div className="py-1 px-3 bg-purple-600 text-white text-xs font-bold rounded-full w-fit mb-2">
                POPULAR
              </div>
              <CardTitle>6 Months</CardTitle>
              <div className="text-3xl font-bold">
                €69.99<span className="text-sm font-normal text-gray-500">/6 months</span>
              </div>
              <CardDescription>Our most popular option</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to World Support plugins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Multilingual support (20+ languages)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Use on 5 websites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>6 months of updates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>12 Months</CardTitle>
              <div className="text-3xl font-bold">
                €99.99<span className="text-sm font-normal text-gray-500">/12 months</span>
              </div>
              <CardDescription>Best value for long term</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Access to World Support plugins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Multilingual support (20+ languages)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Use on 10 websites</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>12 months of updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Add-ons</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>No Private no block Server Addon</CardTitle>
              <div className="text-3xl font-bold">
                €19.99<span className="text-sm font-normal text-gray-500">/one-time</span>
              </div>
              <CardDescription>Add to any package</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>No blocking or stopping of plugins</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Private server access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Compatible with all packages</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/register" className="w-full">
                <Button className="w-full">Add to Your Package</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">What's Included in Each Package</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left">Features</th>
                <th className="py-4 px-6 text-center">
                  English Support
                  <br />6 Months
                </th>
                <th className="py-4 px-6 text-center">
                  English Support
                  <br />
                  12 Months
                </th>
                <th className="py-4 px-6 text-center">
                  World Support
                  <br />6 Months
                </th>
                <th className="py-4 px-6 text-center">
                  World Support
                  <br />
                  12 Months
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Price</td>
                <td className="py-4 px-6 text-center">€54.99</td>
                <td className="py-4 px-6 text-center">€79.99</td>
                <td className="py-4 px-6 text-center">€69.99</td>
                <td className="py-4 px-6 text-center">€99.99</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">English Support Plugins</td>
                <td className="py-4 px-6 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Multilingual Support</td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Number of Websites</td>
                <td className="py-4 px-6 text-center">3</td>
                <td className="py-4 px-6 text-center">3</td>
                <td className="py-4 px-6 text-center">5</td>
                <td className="py-4 px-6 text-center">10</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">No Private no block Server</td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">VPN Service</td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

        <div className="grid gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">What are English Support and World Support packs?</h3>
            <p className="text-gray-600">
              English Support pack includes all our premium WordPress plugins with English language support. World
              Support pack extends this with multilingual support for over 20 languages, making it perfect for
              international websites.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">What is the "No Private no block Server Addon"?</h3>
            <p className="text-gray-600">
              Our No Private no block Server Addon ensures that your plugins will continue to function without any
              interruptions or blocking. This means you'll never experience any downtime or functionality limitations
              with your plugins.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">What does the VPN service include?</h3>
            <p className="text-gray-600">
              Our premium VPN service provides secure, encrypted internet access from multiple global locations. This
              helps protect your online privacy, secure your connection when using public Wi-Fi, and access
              geo-restricted content.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">
              We accept all major credit cards (Visa, MasterCard, American Express, Discover) and cryptocurrency
              payments including Bitcoin and Ethereum.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join thousands of satisfied customers who trust 1WP.store for their WordPress plugin and theme needs.
        </p>
        <Link href="/register">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Choose Your Plan
          </Button>
        </Link>
      </div>
    </div>
  )
}
