import Image from "next/image"
import { Server, Shield, Zap, Clock, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HostingPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">WordPress Hosting</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Premium managed WordPress hosting with free SSL, daily backups, and optimized performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Managed WordPress Hosting Designed for Speed and Security</h2>
          <p className="text-gray-600 mb-6">
            Our WordPress hosting is specifically optimized for running WordPress websites with our English Megapack and
            World Megapack plugins. We handle all the technical aspects so you can focus on creating amazing content.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <Server className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Optimized WordPress Environment</h3>
                <p className="text-gray-600">
                  Pre-configured server environment specifically tuned for WordPress performance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Advanced Security</h3>
                <p className="text-gray-600">Firewall protection, malware scanning, and automatic security updates.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <Zap className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Lightning-Fast Performance</h3>
                <p className="text-gray-600">
                  SSD storage, server-level caching, and global CDN for blazing fast load times.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Daily Backups</h3>
                <p className="text-gray-600">Automated daily backups with one-click restore functionality.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full">
          <Image src="/wordpress-hosting-infrastructure.png" alt="WordPress Hosting" fill className="object-contain" />
        </div>
      </div>

      <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="monthly">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <div className="text-3xl font-bold">
                  $9.99<span className="text-sm font-normal text-gray-500">/month</span>
                </div>
                <CardDescription>Perfect for small websites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>1 WordPress Website</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>10GB SSD Storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>50,000 Monthly Visitors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Free SSL Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Daily Backups</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                    <span className="text-gray-500">Staging Environment</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <div className="py-1 px-3 bg-purple-600 text-white text-xs font-bold rounded-full w-fit mb-2">
                  MOST POPULAR
                </div>
                <CardTitle>Professional</CardTitle>
                <div className="text-3xl font-bold">
                  $19.99<span className="text-sm font-normal text-gray-500">/month</span>
                </div>
                <CardDescription>Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>5 WordPress Websites</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>25GB SSD Storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>200,000 Monthly Visitors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Free SSL Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Daily Backups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Staging Environment</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Business</CardTitle>
                <div className="text-3xl font-bold">
                  $39.99<span className="text-sm font-normal text-gray-500">/month</span>
                </div>
                <CardDescription>For high-traffic websites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>20 WordPress Websites</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>100GB SSD Storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>1 Million Monthly Visitors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Free SSL Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Daily Backups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Staging Environment</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="annual">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <div className="text-3xl font-bold">
                  $95.90<span className="text-sm font-normal text-gray-500">/year</span>
                </div>
                <CardDescription>
                  <span className="line-through text-gray-400">$119.88</span> Save $23.98
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>1 WordPress Website</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>10GB SSD Storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>50,000 Monthly Visitors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Free SSL Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Daily Backups</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                    <span className="text-gray-500">Staging Environment</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <div className="py-1 px-3 bg-purple-600 text-white text-xs font-bold rounded-full w-fit mb-2">
                  MOST POPULAR
                </div>
                <CardTitle>Professional</CardTitle>
                <div className="text-3xl font-bold">
                  $191.90<span className="text-sm font-normal text-gray-500">/year</span>
                </div>
                <CardDescription>
                  <span className="line-through text-gray-400">$239.88</span> Save $47.98
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>5 WordPress Websites</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>25GB SSD Storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>200,000 Monthly Visitors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Free SSL Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Daily Backups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Staging Environment</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Business</CardTitle>
                <div className="text-3xl font-bold">
                  $383.90<span className="text-sm font-normal text-gray-500">/year</span>
                </div>
                <CardDescription>
                  <span className="line-through text-gray-400">$479.88</span> Save $95.98
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>20 WordPress Websites</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>100GB SSD Storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>1 Million Monthly Visitors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Free SSL Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Daily Backups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Staging Environment</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">All Hosting Plans Include</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-gray-600">
              Free SSL certificates, malware scanning, and firewall protection to keep your website secure.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Performance</h3>
            <p className="text-gray-600">
              SSD storage, server-level caching, and global CDN for lightning-fast page load times.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Reliability</h3>
            <p className="text-gray-600">99.9% uptime guarantee, daily backups, and expert WordPress support.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

        <div className="grid gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">What is managed WordPress hosting?</h3>
            <p className="text-gray-600">
              Managed WordPress hosting is a specialized hosting service that is specifically optimized for WordPress
              websites. We handle all the technical aspects of running WordPress, including updates, security, backups,
              and performance optimization, so you can focus on creating content and growing your business.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Can I migrate my existing WordPress site?</h3>
            <p className="text-gray-600">
              Yes, we offer free migration services for all hosting plans. Our team will handle the entire migration
              process to ensure your website is transferred smoothly without any downtime or data loss.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Do you include a free domain name?</h3>
            <p className="text-gray-600">
              Yes, all annual hosting plans include a free domain name for the first year. You can choose from a wide
              range of domain extensions including .com, .org, .net, and many more.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">What kind of support do you offer?</h3>
            <p className="text-gray-600">
              We provide 12x7x365 expert WordPress support via live chat, email, and ticket system. Our support team
              consists of WordPress specialists who can help with any hosting-related issues, WordPress questions, and
              general website management.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Can I upgrade my hosting plan later?</h3>
            <p className="text-gray-600">
              Yes, you can easily upgrade your hosting plan as your website grows. The upgrade process is seamless and
              doesn't cause any downtime. We'll simply prorate the remaining balance of your current plan toward your
              new plan.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Choose the perfect hosting plan for your WordPress website and get online today.
        </p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          View Hosting Plans
        </Button>
      </div>
    </div>
  )
}
