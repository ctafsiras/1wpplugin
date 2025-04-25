import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">Documentation</h1>
        <p className="text-gray-600 text-center mb-8">
          Comprehensive guides and documentation for all our products and services
        </p>

        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="plugins">Plugins</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome to 1wpplugin.com</CardTitle>
                  <CardDescription>Everything you need to know to get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Creating Your Account</h3>
                    <p className="text-gray-600">
                      To get started with 1wpplugin.com, you'll need to create an account. Click on the "Register"
                      button in the top right corner of the page and fill out the registration form. Once you've created
                      your account, you can log in and access your dashboard.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Choosing a Membership Plan</h3>
                    <p className="text-gray-600">
                      We offer several membership plans to suit different needs and budgets. Visit our{" "}
                      <Link href="/pricing" className="text-blue-600 hover:underline">
                        Pricing page
                      </Link>{" "}
                      to compare plans and choose the one that's right for you. After selecting a plan, you'll be guided
                      through the checkout process.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Downloading Plugins and Themes</h3>
                    <p className="text-gray-600">
                      Once you've purchased a membership, you can access all available plugins and themes through your
                      account dashboard. Simply browse the catalog, find the plugin or theme you want, and click the
                      "Download" button. You can then install it on your WordPress site.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Installing Plugins and Themes</h3>
                    <p className="text-gray-600">
                      To install a plugin or theme, log in to your WordPress admin panel. For plugins, go to Plugins
                      {" >"} Add New {" >"} Upload Plugin, then select the ZIP file you downloaded and click "Install
                      Now". For themes, go to Appearance {" >"} Themes {" >"} Add New {" >"} Upload Theme, select the
                      ZIP file, and click "Install Now".
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Getting Support</h3>
                    <p className="text-gray-600">
                      If you need help with any of our products or services, you can contact our support team through
                      your account dashboard, email, or live chat. We offer 12x7x365 support to ensure you get the help
                      you need when you need it.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="plugins">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>WordPress Plugins Documentation</CardTitle>
                  <CardDescription>Guides for our most popular plugins</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">WP SEO Pro</h3>
                    <p className="text-gray-600">
                      WP SEO Pro is our comprehensive SEO solution for WordPress. It includes features like keyword
                      optimization, content analysis, XML sitemaps, and more.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">WooCommerce Booster</h3>
                    <p className="text-gray-600">
                      WooCommerce Booster enhances your WooCommerce store with advanced features, checkout options, and
                      marketing tools.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Form Builder Pro</h3>
                    <p className="text-gray-600">
                      Form Builder Pro allows you to create advanced forms with conditional logic, payment integration,
                      and file uploads.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Page Builder Elite</h3>
                    <p className="text-gray-600">
                      Page Builder Elite is a drag-and-drop page builder with premium templates and advanced design
                      options.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Security Shield</h3>
                    <p className="text-gray-600">
                      Security Shield provides complete WordPress security with firewall, malware scanning, and login
                      protection.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="themes">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>WordPress Themes Documentation</CardTitle>
                  <CardDescription>Guides for our most popular themes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Business Pro</h3>
                    <p className="text-gray-600">
                      Business Pro is a professional business theme with modern design and powerful features for
                      corporate websites.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">ShopMaster</h3>
                    <p className="text-gray-600">
                      ShopMaster is a feature-rich WooCommerce theme designed for online stores with multiple layout
                      options.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">BlogMaster</h3>
                    <p className="text-gray-600">
                      BlogMaster is a clean and elegant blog theme with multiple post formats and customization options.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Portfolio Elite</h3>
                    <p className="text-gray-600">
                      Portfolio Elite helps you showcase your work with beautiful galleries and project pages.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Magazine Pro</h3>
                    <p className="text-gray-600">
                      Magazine Pro is a modern magazine theme with flexible layouts and advanced post display options.{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        View full documentation
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="account">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Management</CardTitle>
                  <CardDescription>Managing your 1wpplugin.com account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Account Dashboard</h3>
                    <p className="text-gray-600">
                      Your account dashboard is the central hub for managing your 1wpplugin.com membership. Here, you
                      can download plugins and themes, manage your licenses, view invoices, and access support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Managing Licenses</h3>
                    <p className="text-gray-600">
                      You can view and manage all your licenses from the Licenses tab in your dashboard. This includes
                      activating licenses on new sites, deactivating them from old sites, and viewing license details.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Billing and Invoices</h3>
                    <p className="text-gray-600">
                      The Invoices tab in your dashboard shows all your past invoices. You can view and download PDF
                      copies of these invoices for your records.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Profile Settings</h3>
                    <p className="text-gray-600">
                      You can update your profile information, change your password, and manage notification settings
                      from the Account Settings section of your dashboard.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Support Tickets</h3>
                    <p className="text-gray-600">
                      If you need help, you can create and track support tickets from your dashboard. Our support team
                      will respond to your tickets as quickly as possible.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
