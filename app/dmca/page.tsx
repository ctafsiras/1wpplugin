import Link from "next/link"
import { ShieldCheck, FileText, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function DMCAPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <ShieldCheck className="h-10 w-10 text-green-500" />
          <h1 className="text-3xl font-bold">DMCA Protection & Copyright Policy</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Our DMCA Protection</h2>
            <div className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
              Active Protection
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            At 1wpplugin.com, we take copyright and intellectual property rights very seriously. Our DMCA (Digital
            Millennium Copyright Act) protection ensures that all content on our platform is legally distributed and
            that both content creators and users are protected.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                For Content Creators
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Easy-to-use DMCA takedown request system
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Prompt investigation of all copyright claims
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Removal of infringing content within 24 hours
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Protection against unauthorized distribution
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                For Customers
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  All products verified for GPL compliance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Legal protection for all purchased items
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Transparent licensing information
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Safe and secure marketplace environment
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <h3 className="text-xl font-bold mb-4">How Our DMCA Process Works</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="bg-blue-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold mb-2">1. Submit a Claim</h4>
              <p className="text-sm text-gray-600">
                Content owners submit a detailed DMCA takedown notice through our form.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="bg-purple-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  className="h-6 w-6 text-purple-600"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h4 className="font-bold mb-2">2. Verification</h4>
              <p className="text-sm text-gray-600">
                Our team verifies the claim and investigates the reported content.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold mb-2">3. Resolution</h4>
              <p className="text-sm text-gray-600">
                Infringing content is removed and all parties are notified of the action taken.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Filing false DMCA claims is illegal and may result in legal consequences. Please ensure you have
                    proper ownership rights before submitting a claim.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Submit a DMCA Takedown Request</h3>
          <p className="text-gray-700 mb-6">
            If you believe your copyrighted work has been used without permission on our platform, please submit a DMCA
            takedown request using the button below.
          </p>

          <div className="flex justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Submit DMCA Takedown Request
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">GPL Licensing Information</h2>

          <p className="text-gray-700 mb-6">
            All products available on 1wpplugin.com are distributed under the GNU General Public License (GPL), which
            allows for the free distribution, modification, and use of the software.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">What GPL Means For You</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                You can use the plugins and themes on unlimited personal sites
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                You can modify the code to suit your needs
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                You can redistribute the software under the same license
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                You receive all updates for the duration of your membership
              </li>
            </ul>
          </div>

          <div className="flex justify-between items-center">
            <Link href="/contact" className="text-blue-600 hover:underline">
              Have questions? Contact our support team
            </Link>
            <Link href="/terms" className="text-blue-600 hover:underline">
              View Full Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="//www.dmca.com/Protection/Status.aspx?id=4b9f742e-a6f5-407a-bb8d-2c66146e37ff"
            title="DMCA.com Protection Status"
            className="dmca-badge inline-block"
          >
            <img
              src="//images.dmca.com/Badges/dmca-badge-w150-5x1-01.png?ID=//www.dmca.com/Protection/Status.aspx?id=4b9f742e-a6f5-407a-bb8d-2c66146e37ff"
              alt="DMCA.com Protection Status"
            />
          </a>
          <script src="//images.dmca.com/Badges/DMCABadgeHelper.min.js" dangerouslySetInnerHTML={{ __html: "" }} />
        </div>
      </div>
    </div>
  )
}
