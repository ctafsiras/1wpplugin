import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p>
            This Privacy Policy describes how 1wpplugin.com ("we", "us", or "our") collects, uses, and shares your
            personal information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you visit our website, we may collect certain information about your device, including information
            about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            Additionally, as you browse the site, we collect information about the individual web pages that you view,
            what websites or search terms referred you to our site, and information about how you interact with our
            site.
          </p>

          <p>
            When you make a purchase or attempt to make a purchase through the site, we collect certain information from
            you, including your name, billing address, shipping address, payment information (including credit card
            numbers), email address, and phone number.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information that we collect to:</p>
          <ul>
            <li>Fulfill orders and process transactions</li>
            <li>Communicate with you about your account, orders, or inquiries</li>
            <li>Send you updates about our products, services, and special offers</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and enhance the security of our website</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            We may share your personal information with third-party service providers to help us provide our services
            and fulfill our obligations to you. These service providers have access to your personal information only to
            perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <p>
            We may also release your information when we believe release is appropriate to comply with the law, enforce
            our site policies, or protect our or others' rights, property, or safety.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies to help us remember and process the items in your shopping cart, understand and save your
            preferences for future visits, and compile aggregate data about site traffic and site interaction so that we
            can offer better site experiences and tools in the future.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services, such as Google Analytics, to help us understand how our visitors use our
            site. These services may use cookies and tracking technologies to help us analyze how users use the site.
            The information generated about your use of our website will be transmitted to and stored by these
            third-party services on servers that may be located outside of your country of residence.
          </p>

          <h2>Data Retention</h2>
          <p>
            We will maintain your personal information for as long as necessary to provide you with our services, comply
            with our legal obligations, resolve disputes, and enforce our agreements.
          </p>

          <h2>Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you
            place an order or enter, submit, or access your personal information. We offer the use of a secure server.
            All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology and then
            encrypted into our payment gateway providers database only to be accessible by those authorized with special
            access rights to such systems, and are required to keep the information confidential.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as the
            right to access, correct, delete, or restrict the processing of your personal information. You may also have
            the right to data portability and the right to object to processing of your personal information.
          </p>

          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            below.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time in order to reflect changes to our practices or for
            other operational, legal, or regulatory reasons. We will post the updated Privacy Policy on this page with a
            new effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <Link href="mailto:privacy@1wpplugin.com" className="text-blue-600 hover:underline">
              privacy@1wpplugin.com
            </Link>
            .
          </p>

          <p className="text-sm text-gray-600 mt-8">Last updated: April 22, 2025.</p>
        </div>
      </div>
    </div>
  )
}
