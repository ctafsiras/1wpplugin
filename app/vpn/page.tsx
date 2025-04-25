import Image from "next/image"
import { Shield, Globe, Zap, Lock, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function VPNPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Premium VPN Service</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Secure your online presence with our premium VPN service, included exclusively with our VPN Premium plan.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Protect Your Privacy and Access Content Worldwide</h2>
          <p className="text-gray-600 mb-6">
            Our premium VPN service provides secure, encrypted internet access from multiple global locations. This
            helps protect your online privacy, secure your connection when using public Wi-Fi, and access geo-restricted
            content.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Enhanced Security</h3>
                <p className="text-gray-600">
                  Military-grade encryption protects your data from hackers and surveillance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Globe className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Global Access</h3>
                <p className="text-gray-600">
                  Access content from anywhere with servers in over 50 countries worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Zap className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Lightning-Fast Speeds</h3>
                <p className="text-gray-600">High-speed servers ensure smooth browsing, streaming, and downloading.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Lock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">No-Logs Policy</h3>
                <p className="text-gray-600">We never track, store, or share your browsing activity.</p>
              </div>
            </div>
          </div>

          <Button className="mt-8 bg-blue-600 hover:bg-blue-700">Get VPN Premium Plan</Button>
        </div>

        <div className="relative h-[400px] w-full">
          <Image src="/secure-global-network.png" alt="VPN Service" fill className="object-contain" />
        </div>
      </div>

      <div className="bg-blue-50 py-12 px-4 rounded-lg mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our VPN Service?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our VPN service is designed specifically for WordPress developers and website owners, providing unique
            benefits that other VPN services don't offer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                  className="h-6 w-6 text-blue-600"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <CardTitle>Secure WordPress Development</CardTitle>
              <CardDescription>Work on client sites securely from anywhere</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Develop and manage WordPress sites securely, even on public Wi-Fi networks. Our VPN encrypts your
                connection, protecting sensitive login credentials and client data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <CardTitle>Plugin & Theme Testing</CardTitle>
              <CardDescription>Test from different global locations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Test your WordPress plugins and themes from different geographic locations to ensure they work properly
                for all users, regardless of their location.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
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
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </div>
              <CardTitle>Access to All Tools</CardTitle>
              <CardDescription>Use region-restricted development tools</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Access region-restricted development tools, APIs, and services from anywhere in the world, ensuring you
                have all the resources you need for your WordPress projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] w-full">
          <Image src="/global-vpn-connectivity.png" alt="Global Server Network" fill className="object-contain" />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Global Server Network</h2>
          <p className="text-gray-600 mb-6">
            Our VPN service includes access to servers in over 50 countries worldwide, ensuring fast and reliable
            connections no matter where you are. With unlimited bandwidth and server switching, you can always find the
            optimal connection for your needs.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>North America (15+ locations)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Europe (20+ locations)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Asia Pacific (10+ locations)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>South America (5+ locations)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Africa (3+ locations)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Middle East (2+ locations)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4 rounded-lg mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Available on All Your Devices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our VPN service works seamlessly across all your devices, with dedicated apps for every platform.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
          <div>
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
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
                className="h-8 w-8 text-blue-600"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="font-semibold">iOS</h3>
          </div>

          <div>
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
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
                className="h-8 w-8 text-blue-600"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="font-semibold">Android</h3>
          </div>

          <div>
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
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
                className="h-8 w-8 text-blue-600"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="font-semibold">Windows</h3>
          </div>

          <div>
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
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
                className="h-8 w-8 text-blue-600"
              >
                <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
              </svg>
            </div>
            <h3 className="font-semibold">Mac</h3>
          </div>

          <div>
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
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
                className="h-8 w-8 text-blue-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="font-semibold">Linux</h3>
          </div>

          <div>
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
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
                className="h-8 w-8 text-blue-600"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3 className="font-semibold">Routers</h3>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Get Started with VPN Premium</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Our VPN service is exclusively available with our VPN Premium plan, which also includes access to all our
          premium WordPress plugins and themes.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          View VPN Premium Plan
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

        <div className="grid gap-6 max-w-3xl mx-auto">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">What is a VPN and why do I need one?</h3>
            <p className="text-gray-600">
              A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the
              internet. It protects your privacy by hiding your IP address and encrypting your data, preventing hackers,
              ISPs, and others from monitoring your online activities. It's especially important when using public
              Wi-Fi, accessing sensitive information, or working with client websites.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">How does the VPN Premium plan work?</h3>
            <p className="text-gray-600">
              When you subscribe to our VPN Premium plan, you get access to our VPN service along with all our premium
              WordPress plugins and themes. After subscribing, you'll receive login credentials for our VPN apps, which
              you can install on all your devices. Simply log in, choose a server location, and connect to start
              browsing securely.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">On how many devices can I use the VPN?</h3>
            <p className="text-gray-600">
              Our VPN Premium plan allows you to use the VPN service on up to 10 devices simultaneously. This includes
              any combination of devices such as smartphones, tablets, computers, and routers.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Does the VPN slow down my internet connection?</h3>
            <p className="text-gray-600">
              While all VPNs can potentially reduce your internet speed due to the encryption process, our VPN service
              is optimized for performance with high-speed servers worldwide. Most users experience minimal speed
              reduction, and in some cases, VPN connections can actually improve speeds by avoiding ISP throttling.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Is my data private when using the VPN?</h3>
            <p className="text-gray-600">
              Yes, we maintain a strict no-logs policy, meaning we never track, store, or share your browsing activity.
              Our VPN service uses AES-256 encryption, the same level of security used by governments and military
              organizations, to ensure your data remains private and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
