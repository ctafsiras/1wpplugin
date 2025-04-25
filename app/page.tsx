import Image from "next/image"
import { ShieldCheck, Award, Clock, Server, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Premium WordPress Plugins & Themes Club
              </h1>
              <h2 className="text-xl md:text-2xl mb-6">
                Discover top-rated WordPress plugins and themes at 1WPPlugin.com – trusted for performance, security,
                and design excellence.
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 p-2 rounded-full">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">
                      The Most Popular WordPress Plugins & Themes for incredible prices. 100% Original, GPL Licensed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 p-2 rounded-full">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">
                      All products are scanned by Norton, Avast & McAffee daily to ensure top notch security & safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 p-2 rounded-full">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Premium 12x7x365 1wpplugin.com Support & regular updates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 p-2 rounded-full">
                    <Server className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Optional: Premium, Managed, WordPress Hosting with FREE SSL & a FREE Domain, SEO Services, Site
                      Development, Speed-Up & more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 p-2 rounded-full">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">
                      VIP All-Access membership starts at €54.99/6 months to access all premium plugins & themes.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/pricing">
                <Button size="lg" className="mt-8 bg-teal-500 hover:bg-teal-600 text-white font-bold">
                  Access Full Unlimited Membership Starting From €54.99/6 Months
                  <ShieldCheck className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative h-[400px] w-full">
              <Image
                src="/wordpress-development-concept.png"
                alt="WordPress Development"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Rating Section */}
          <div className="mt-8 text-center mb-0">
            <div className="text-2xl font-bold">4.8 SCORE</div>
            <div className="flex justify-center my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-yellow-400"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              ))}
            </div>
            <div className="text-sm text-gray-300 mb-4">250+ VERIFIED REVIEWS</div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative h-[600px] w-[1200px] logo-animate">
                <Image src="/1wpplugin-logo.png" alt="1WPPlugin.com" fill className="object-contain" />
              </div>
              <h2 className="text-5xl font-bold text-gradient text-animate mt-4">The Plugin Revolution Starts Here</h2>
            </div>
          </div>
        </div>
      </main>

      {/* DMCA Protection Section */}
      <section className="bg-gray-900 py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">DMCA Protection & Copyright Policy</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] w-full">
              <Image src="/digital-copyright-shield.png" alt="DMCA Protection" fill className="object-contain" />
            </div>

            <div className="text-white">
              <h3 className="text-xl font-bold mb-4">Complete DMCA Protection For Your Business</h3>
              <p className="mb-4">
                All products on 1wpplugin.com are 100% GPL licensed and legally distributed. We take copyright seriously
                and provide full DMCA protection for both our customers and content creators.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 p-1 rounded-full">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p>Verified GPL compliance for all products</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 p-1 rounded-full">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p>Streamlined DMCA takedown process</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 p-1 rounded-full">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p>Copyright verification for all uploads</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 p-1 rounded-full">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p>Legal documentation and support</p>
                </div>
              </div>

              <Link href="/dmca">
                <Button className="mt-6 bg-green-600 hover:bg-green-700">Learn More About Our DMCA Policy</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section - REMOVED */}
    </div>
  )
}
