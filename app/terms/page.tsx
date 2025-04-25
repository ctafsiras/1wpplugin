import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to 1wpplugin.com. Please read these Terms of Service ("Terms") carefully before using our website
            and services.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using 1wpplugin.com, you agree to be bound by these Terms and our Privacy Policy. If you do
            not agree to these Terms, please do not access or use our website or services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            1wpplugin.com provides access to premium WordPress plugins and themes through various membership plans. Our
            services include plugin and theme downloads, updates, support, and related services as described on our
            website.
          </p>

          <h2>3. Membership and Licensing</h2>
          <p>
            Our membership plans grant you access to our plugins and themes under the GNU General Public License (GPL).
            This license allows you to use, modify, and distribute the software, subject to certain conditions outlined
            in the GPL.
          </p>
          <p>
            Your membership is valid for the duration specified in your plan (6 months, 12 months, or lifetime). During
            this period, you will have access to all plugins and themes included in your plan, as well as updates and
            support.
          </p>

          <h2>4. User Accounts</h2>
          <p>
            To access our services, you must create an account. You are responsible for maintaining the confidentiality
            of your account information and for all activities that occur under your account. You agree to notify us
            immediately of any unauthorized use of your account.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            All prices are listed in Euros (€) and are subject to change without notice. We accept payment via credit
            card and cryptocurrency. All payments are non-refundable except as specified in our refund policy.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content on 1wpplugin.com, including text, graphics, logos, and software, is the property of
            1wpplugin.com or its content suppliers and is protected by international copyright laws. The plugins and
            themes are licensed under the GPL, but our website content remains our property.
          </p>

          <h2>7. DMCA Protection</h2>
          <p>
            We respect the intellectual property rights of others and expect our users to do the same. If you believe
            that your work has been copied in a way that constitutes copyright infringement, please follow our DMCA
            takedown procedure as outlined on our DMCA page.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            1wpplugin.com and its suppliers shall not be liable for any damages arising from the use or inability to use
            our services, even if we have been advised of the possibility of such damages.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
            1wpplugin.com is registered, without regard to its conflict of law provisions.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
            posting the new Terms on our website. Your continued use of our services after such changes constitutes your
            acceptance of the new Terms.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <Link href="mailto:support@1wpplugin.com" className="text-blue-600 hover:underline">
              support@1wpplugin.com
            </Link>
            .
          </p>

          <p className="text-sm text-gray-600 mt-8">Last updated: April 22, 2025.</p>
        </div>
      </div>
    </div>
  )
}
