"use client";

import { CardFooter } from "@/components/ui/card";

import { CardContent } from "@/components/ui/card";

import { CardDescription } from "@/components/ui/card";

import { CardTitle } from "@/components/ui/card";

import { CardHeader } from "@/components/ui/card";

import { Card } from "@/components/ui/card";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { pluginsData } from "@/data/plugins";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Download,
  Check,
  AlertTriangle,
  FileText,
  Code,
  Settings,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export default function PluginDetailPage() {
  const params = useParams();
  const [plugin, setPlugin] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const foundPlugin = pluginsData.find((p) => p.id === params.id);
      setPlugin(foundPlugin);
      setLoading(false);
    }
  }, [params.id]);

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
    );
  }

  if (!plugin) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Plugin Not Found</h1>
        <p className="text-gray-600 mb-8">
          The plugin you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/plugins">
          <Button>Browse All Plugins</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Link href="/plugins" className="text-blue-600 hover:underline">
            Plugins
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            href={`/plugins?category=${plugin.category}`}
            className="text-blue-600 hover:underline"
          >
            {plugin.category}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{plugin.name}</span>
        </div>
        <h1 className="text-3xl font-bold">{plugin.name}</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="relative h-96 w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
            <Image
              src={plugin.image || "/placeholder.svg"}
              alt={plugin.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative h-24 bg-gray-100 rounded-lg overflow-hidden"
              >
                <Image
                  src={plugin.image || "/placeholder.svg"}
                  alt={`${plugin.name} screenshot ${i}`}
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
              {Array(plugin.rating)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              {Array(5 - plugin.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
            </div>
            <span className="text-gray-600">(120+ reviews)</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              {plugin.downloads} Downloads
            </Badge>
            {plugin.megapack && (
              <Badge className="bg-purple-600">
                {plugin.megapack} Megapack
              </Badge>
            )}
            <Badge variant="outline">{plugin.category}</Badge>
            <Badge variant="outline">WordPress 6.0+</Badge>
            <Badge variant="outline">PHP 7.4+</Badge>
          </div>

          <p className="text-gray-700 mb-6">{plugin.description}</p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Plugin Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Version</p>
                <p>4.2.1</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <p>April 15, 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Requires WordPress</p>
                <p>6.0 or higher</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Requires PHP</p>
                <p>7.4 or higher</p>
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
              This plugin is included in our membership plans.{" "}
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
            <h2>About {plugin.name}</h2>
            <p>
              {plugin.name} is a premium WordPress plugin designed to help you{" "}
              {plugin.category.toLowerCase() === "seo"
                ? "improve your website's search engine rankings and visibility"
                : plugin.category.toLowerCase() === "woocommerce"
                ? "enhance your online store with advanced features and optimizations"
                : `optimize your WordPress site's ${plugin.category.toLowerCase()} capabilities`}
              .
            </p>
            <p>
              With its comprehensive set of features and user-friendly
              interface, {plugin.name} makes it easy to
              {plugin.category.toLowerCase() === "seo"
                ? " optimize your content, improve your meta tags, and track your rankings"
                : plugin.category.toLowerCase() === "woocommerce"
                ? " customize your product pages, streamline your checkout process, and boost your sales"
                : ` manage your ${plugin.category.toLowerCase()} needs without requiring technical expertise`}
              .
            </p>
            <p>
              Whether you're a beginner or an experienced WordPress user,{" "}
              {plugin.name} provides the tools you need to
              {plugin.category.toLowerCase() === "seo"
                ? " achieve better search engine rankings and drive more organic traffic to your website."
                : plugin.category.toLowerCase() === "woocommerce"
                ? " create a professional and high-converting online store that stands out from the competition."
                : ` take your ${plugin.category.toLowerCase()} to the next level and achieve better results.`}
            </p>
            <h3>Why Choose {plugin.name}?</h3>
            <ul>
              <li>Easy to use with an intuitive interface</li>
              <li>
                Comprehensive features for all your {plugin.category} needs
              </li>
              <li>Regular updates with new features and improvements</li>
              <li>Compatible with the latest WordPress version</li>
              <li>Works seamlessly with other popular plugins</li>
              <li>Excellent customer support</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-0">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Feature 1</h3>
                  <p className="text-gray-600">
                    Comprehensive {plugin.category} tools to help you optimize
                    your WordPress site.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Feature 2</h3>
                  <p className="text-gray-600">
                    User-friendly interface with drag-and-drop functionality for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Feature 3</h3>
                  <p className="text-gray-600">
                    Advanced analytics and reporting to track your performance
                    and results.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Feature 4</h3>
                  <p className="text-gray-600">
                    Integration with popular third-party services and tools for
                    extended functionality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Feature 5</h3>
                  <p className="text-gray-600">
                    Responsive design that works perfectly on all devices and
                    screen sizes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Check className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Feature 6</h3>
                  <p className="text-gray-600">
                    Regular updates with new features, improvements, and
                    security patches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="installation" className="mt-0">
          <div className="prose max-w-none">
            <h2>Installation Instructions</h2>
            <p>
              Follow these simple steps to install and activate {plugin.name} on
              your WordPress site:
            </p>

            <h3>Method 1: Install via WordPress Dashboard</h3>
            <ol>
              <li>Log in to your WordPress admin panel.</li>
              <li>
                Navigate to <strong>Plugins → Add New</strong>.
              </li>
              <li>
                Click the <strong>Upload Plugin</strong> button at the top of
                the page.
              </li>
              <li>
                Click <strong>Choose File</strong> and select the {plugin.name}
                .zip file you downloaded.
              </li>
              <li>
                Click <strong>Install Now</strong>.
              </li>
              <li>
                After installation, click <strong>Activate Plugin</strong>.
              </li>
            </ol>

            <h3>Method 2: Install via FTP</h3>
            <ol>
              <li>Unzip the {plugin.name}.zip file you downloaded.</li>
              <li>Connect to your server using an FTP client.</li>
              <li>
                Upload the plugin folder to the `/wp-content/plugins/` directory
                on your server.
              </li>
              <li>Log in to your WordPress admin panel.</li>
              <li>
                Navigate to <strong>Plugins</strong> and activate {plugin.name}.
              </li>
            </ol>

            <h3>After Installation</h3>
            <ol>
              <li>
                After activating the plugin, you'll find a new menu item in your
                WordPress dashboard.
              </li>
              <li>
                Navigate to the plugin settings page to configure it according
                to your needs.
              </li>
              <li>
                Review the documentation for detailed instructions on how to use
                all features.
              </li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Important Note
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Make sure your server meets the minimum requirements
                      before installing:
                      <ul>
                        <li>WordPress 6.0 or higher</li>
                        <li>PHP 7.4 or higher</li>
                        <li>MySQL 5.6 or higher</li>
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
                Is {plugin.name} compatible with my theme?
              </h3>
              <p className="text-gray-600">
                Yes, {plugin.name} is designed to be compatible with all
                standard WordPress themes. It has been tested with popular
                themes like Astra, GeneratePress, Divi, and many others to
                ensure smooth integration.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">
                Can I use {plugin.name} on multiple websites?
              </h3>
              <p className="text-gray-600">
                Yes, depending on your membership plan. Our Basic plan allows
                usage on 3 websites, the Megapack No Stop plan allows usage on
                10 websites, and the VPN Premium plan allows usage on unlimited
                websites.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">
                Does {plugin.name} slow down my website?
              </h3>
              <p className="text-gray-600">
                No, {plugin.name} is optimized for performance and has minimal
                impact on your website's loading speed. We've implemented
                efficient code practices and caching mechanisms to ensure
                optimal performance.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">
                How often is {plugin.name} updated?
              </h3>
              <p className="text-gray-600">
                We release major updates approximately every 3 months, with
                minor updates and bug fixes released as needed. All updates are
                included in your membership plan for the duration of your
                subscription.
              </p>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold mb-2">
                What kind of support do you offer?
              </h3>
              <p className="text-gray-600">
                We offer different levels of support based on your membership
                plan. Basic plans include standard support via email, while
                Professional and VPN Premium plans include priority and 12x7x365
                VIP support respectively.
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
                Version 4.2.1{" "}
                <span className="text-sm text-gray-500">(April 15, 2025)</span>
              </h3>
              <ul>
                <li>Fixed compatibility issue with WordPress 6.4</li>
                <li>Improved performance for large websites</li>
                <li>Added new translation files for Portuguese and Italian</li>
                <li>Fixed minor UI bugs in the dashboard</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Version 4.2.0{" "}
                <span className="text-sm text-gray-500">(March 1, 2025)</span>
              </h3>
              <ul>
                <li>Added new feature: Advanced reporting dashboard</li>
                <li>Improved integration with popular page builders</li>
                <li>Enhanced mobile responsiveness</li>
                <li>Added new templates and presets</li>
                <li>Updated third-party libraries to latest versions</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Version 4.1.2{" "}
                <span className="text-sm text-gray-500">
                  (January 10, 2025)
                </span>
              </h3>
              <ul>
                <li>Security enhancements and vulnerability fixes</li>
                <li>Improved compatibility with WooCommerce 8.0</li>
                <li>Fixed issue with custom post types</li>
                <li>Performance optimizations for database queries</li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Version 4.1.0{" "}
                <span className="text-sm text-gray-500">
                  (December 5, 2024)
                </span>
              </h3>
              <ul>
                <li>Added integration with Google Analytics 4</li>
                <li>New user interface with improved accessibility</li>
                <li>Added support for custom taxonomies</li>
                <li>Enhanced import/export functionality</li>
                <li>Fixed several bugs reported by users</li>
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
                    Our comprehensive documentation covers everything you need
                    to know about installing, configuring, and using{" "}
                    {plugin.name}.
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
                    Access our developer documentation, hooks reference, and
                    code examples to extend and customize {plugin.name}.
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
                    Our support team is available to help you with any technical
                    issues or questions you may have about {plugin.name}.
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
                  <h3 className="font-semibold mb-2">Tutorials & Guides</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to get the most out of {plugin.name} with our
                    step-by-step tutorials and guides.
                  </p>
                  <Button variant="outline">View Tutorials</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-purple-50 rounded-lg border border-purple-200 p-6">
            <h3 className="text-xl font-bold mb-4 text-center">
              Need Custom Development?
            </h3>
            <p className="text-center text-gray-700 mb-6">
              Our team of WordPress experts can help you customize {plugin.name}{" "}
              to meet your specific needs.
            </p>
            <div className="flex justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Request Custom Development
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Related Plugins</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pluginsData
            .filter((p) => p.category === plugin.category && p.id !== plugin.id)
            .slice(0, 4)
            .map((relatedPlugin) => (
              <Card key={relatedPlugin.id} className="overflow-hidden">
                <div className="relative h-40 bg-gray-100">
                  <Image
                    src={relatedPlugin.image || "/placeholder.svg"}
                    alt={relatedPlugin.name}
                    fill
                    className="object-cover"
                  />
                  {relatedPlugin.megapack && (
                    <Badge className="absolute top-2 right-2 bg-purple-600">
                      {relatedPlugin.megapack} Megapack
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    {relatedPlugin.name}
                  </CardTitle>
                  <CardDescription>{relatedPlugin.category}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedPlugin.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2">
                  <div className="text-sm font-medium text-gray-700">
                    {relatedPlugin.price}
                  </div>
                  <Link href={`/plugins/${relatedPlugin.id}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
