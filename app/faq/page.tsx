import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What are the WordPress plugins and themes you offer?</AccordionTrigger>
            <AccordionContent>
              We offer a wide range of premium WordPress plugins and themes for various purposes including SEO,
              WooCommerce enhancements, form builders, page builders, security solutions, backup tools, performance
              optimization, social media integration, and email marketing. Our themes cover business websites,
              e-commerce stores, blogs, portfolios, magazines, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How does your membership pricing work?</AccordionTrigger>
            <AccordionContent>
              We offer several membership plans with different durations (6-month, 12-month, and lifetime) and features.
              Our Basic plan gives you access to essential plugins, while our Megapack No Stop plan includes more
              plugins with no functionality limitations. Our premium VPN plan includes all plugins, themes, and our VPN
              service. You can view detailed pricing on our Pricing page.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Are the plugins and themes GPL licensed?</AccordionTrigger>
            <AccordionContent>
              Yes, all our plugins and themes are 100% GPL licensed, which means you can use them on as many of your own
              websites as your plan allows. The GPL license gives you the freedom to modify and customize the code to
              suit your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What is the "No Stop/No Block" feature?</AccordionTrigger>
            <AccordionContent>
              Our Megapack No Stop plan ensures that your plugins will continue to function without any interruptions or
              blocking. This means you'll never experience any downtime or functionality limitations with your plugins,
              providing a seamless experience for your websites.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What does the VPN service include?</AccordionTrigger>
            <AccordionContent>
              Our premium VPN service provides secure, encrypted internet access from multiple global locations. This
              helps protect your online privacy, secure your connection when using public Wi-Fi, and access
              geo-restricted content. It's included exclusively with our VPN Premium plan.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>How do I get support for the plugins?</AccordionTrigger>
            <AccordionContent>
              All our membership plans include support. Basic plans include standard support via email, while
              Professional and Enterprise plans include priority and 12x7x365 VIP support respectively. You can contact
              our support team through your account dashboard, email, or live chat.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>How do I download and install the plugins?</AccordionTrigger>
            <AccordionContent>
              After purchasing a membership, you can log in to your account dashboard where you'll find all available
              plugins and themes for download. Simply download the ZIP file and upload it to your WordPress site through
              the WordPress admin panel (Plugins {">"} Add New {">"} Upload Plugin). Alternatively, you can use our
              mobile app to manage and download plugins on the go.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards (Visa, MasterCard, American Express, Discover) and cryptocurrency
              payments including Bitcoin and Ethereum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>Do you offer WordPress hosting services?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer managed WordPress hosting services optimized for running WordPress websites with our
              plugins. Our hosting plans include features like free SSL certificates, daily backups, server-level
              caching, and global CDN for fast page load times. You can learn more on our Hosting page.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>What is your DMCA protection policy?</AccordionTrigger>
            <AccordionContent>
              We take copyright and intellectual property rights very seriously. Our DMCA (Digital Millennium Copyright
              Act) protection ensures that all content on our platform is legally distributed and that both content
              creators and users are protected. We have a streamlined DMCA takedown process and verify all products for
              GPL compliance. You can learn more on our DMCA page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
