import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Mobile App - 1wpplugin.com",
  description: "Download our mobile app for easy access to WordPress plugins and themes on the go.",
}

export default function AppPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-600 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">WordPress Plugins & Themes in Your Pocket</h1>
              <p className="text-lg mb-6">
                Access your favorite WordPress plugins and themes on the go with our mobile app. Download, manage, and
                get updates for all your WordPress essentials from anywhere.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    <Download className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Easy Downloads</h3>
                    <p className="text-gray-600">
                      Download any plugin or theme directly to your device for later installation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Favorites & Collections</h3>
                    <p className="text-gray-600">
                      Save your favorite plugins and themes for quick access and organize them into collections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white">
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
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                    <path d="M16 3v4"></path>
                    <path d="M8 3v4"></path>
                    <path d="M3 11h18"></path>
                    <path d="M19 16v6"></path>
                    <path d="M22 19l-3-3-3 3"></path>
                  </svg>
                  Download for iOS
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white">
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
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Download for Android
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image src="/mobile-app-interface.png" alt="Mobile App Interface" fill className="object-contain" />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">App Features</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Browse & Download</h3>
                <p className="text-gray-600">
                  Browse our entire catalog of premium WordPress plugins and themes directly from your mobile device.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Manage Licenses</h3>
                <p className="text-gray-600">
                  View and manage all your plugin and theme licenses from a single dashboard on your mobile device.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Update Notifications</h3>
                <p className="text-gray-600">
                  Receive instant notifications when updates are available for your purchased plugins and themes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Access our customer support team directly from the app with live chat and ticket support.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">Dark Mode</h3>
                <p className="text-gray-600">
                  Enjoy a comfortable browsing experience with our app's dark mode feature for day and night use.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">User Profiles</h3>
                <p className="text-gray-600">
                  Manage multiple WordPress sites and their associated plugins from a single user profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
