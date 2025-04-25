import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Package, CreditCard, Settings, Clock, ShieldCheck } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
          <p className="text-gray-600">Welcome back, John Doe</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Download className="mr-2 h-4 w-4" /> Download All
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Membership</CardTitle>
            <CardDescription>VPN Premium</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€149.99</div>
            <p className="text-sm text-gray-500">Valid until: Dec 31, 2025</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <CardDescription>Total downloads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-sm text-gray-500">+5 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Sites</CardTitle>
            <CardDescription>Sites using your licenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-sm text-gray-500">Out of unlimited</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
            <CardDescription>Active tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-gray-500">1 awaiting response</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="plugins" className="w-full">
        <TabsList className="grid grid-cols-4 max-w-md mb-8">
          <TabsTrigger value="plugins">Plugins</TabsTrigger>
          <TabsTrigger value="themes">Themes</TabsTrigger>
          <TabsTrigger value="licenses">Licenses</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="plugins" className="space-y-4">
          <div className="bg-white rounded-lg border p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Package className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="text-lg font-bold">WP SEO Pro</h3>
                  <p className="text-sm text-gray-500">Version 4.2.1</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Package className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="text-lg font-bold">WooCommerce Booster</h3>
                  <p className="text-sm text-gray-500">Version 3.8.5</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Package className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="text-lg font-bold">Form Builder Pro</h3>
                  <p className="text-sm text-gray-500">Version 2.5.0</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="themes" className="space-y-4">
          <div className="bg-white rounded-lg border p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Package className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="text-lg font-bold">Business Pro</h3>
                  <p className="text-sm text-gray-500">Version 2.1.0</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Package className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="text-lg font-bold">ShopMaster</h3>
                  <p className="text-sm text-gray-500">Version 3.2.1</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="licenses" className="space-y-4">
          <div className="bg-white rounded-lg border p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <ShieldCheck className="h-10 w-10 text-green-600" />
                <div>
                  <h3 className="text-lg font-bold">VPN Premium Plan</h3>
                  <p className="text-sm text-gray-500">Unlimited websites • 12 months</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Active</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Purchase Date</p>
                <p className="font-medium">Jan 15, 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Expiry Date</p>
                <p className="font-medium">Dec 31, 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">License Key</p>
                <p className="font-medium">WP-VPN-XXXX-XXXX-XXXX</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <div className="bg-white rounded-lg border p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <CreditCard className="h-10 w-10 text-purple-600" />
                <div>
                  <h3 className="text-lg font-bold">Invoice #INV-2025-001</h3>
                  <p className="text-sm text-gray-500">VPN Premium Plan • 12 months</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Paid</span>
                <Button variant="outline" size="sm">
                  Download PDF
                </Button>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Invoice Date</p>
                <p className="font-medium">Jan 15, 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium">€149.99</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="font-medium">Credit Card</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">Downloaded WP SEO Pro</p>
                  <p className="text-sm text-gray-500">Today at 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">Submitted support ticket #5432</p>
                  <p className="text-sm text-gray-500">Yesterday at 3:45 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">Downloaded Business Pro theme</p>
                  <p className="text-sm text-gray-500">Jan 20, 2025 at 9:15 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <p className="font-medium">Profile Information</p>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <p className="font-medium">Password & Security</p>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <p className="font-medium">Notification Settings</p>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Settings className="h-5 w-5 text-gray-500" />
                  <p className="font-medium">Billing Information</p>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
