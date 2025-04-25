import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About 1wpplugin.com</h3>
              <p className="text-gray-400 text-sm">
                Premium WordPress plugins and themes marketplace with DMCA protection and mobile app access. 100% GPL
                compliant with verified security.
              </p>
              <div className="mt-4">
                <a
                  href="//www.dmca.com/Protection/Status.aspx?id=4b9f742e-a6f5-407a-bb8d-2c66146e37ff"
                  title="DMCA.com Protection Status"
                  className="inline-block"
                >
                  <Image
                    src="//images.dmca.com/Badges/dmca-badge-w150-5x1-01.png?ID=4b9f742e-a6f5-407a-bb8d-2c66146e37ff"
                    alt="DMCA.com Protection Status"
                    width={150}
                    height={50}
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/plugins" className="hover:text-white">
                    WordPress Plugins
                  </Link>
                </li>
                <li>
                  <Link href="/themes" className="hover:text-white">
                    WordPress Themes
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Membership Plans
                  </Link>
                </li>
                <li>
                  <Link href="/dmca" className="hover:text-white">
                    DMCA Policy
                  </Link>
                </li>
                <li>
                  <Link href="/vpn" className="hover:text-white">
                    VPN Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get updates on new plugins, themes and special offers.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-800 border-gray-700"
                />
                <Button className="rounded-l-none bg-purple-600 hover:bg-purple-700">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center">
            <p className="text-gray-400 text-sm">© 2025 1wpplugin.com. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button className="rounded-full bg-orange-500 hover:bg-orange-600 h-14 w-14 flex items-center justify-center shadow-lg">
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
            className="h-6 w-6"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </Button>
      </div>
    </>
  )
}
