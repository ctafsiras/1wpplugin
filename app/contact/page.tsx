import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our WordPress plugins or themes? Need help with your account? Our support team is here
            to help.
          </p>
        </div>

        <div className="mb-12">
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Fill out the form below to get in touch with our team. We'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" rows={6} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  What are the English Megapack and World Megapack plugins?
                </h3>
                <p className="text-gray-600">
                  English Megapack includes all our premium WordPress plugins with English language support. World
                  Megapack extends this with multilingual support for over 20 languages, making it perfect for
                  international websites.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How do I get support for the plugins?</h3>
                <p className="text-gray-600">
                  All our membership plans include support. Basic plans include standard support via email, while
                  Professional and Enterprise plans include priority and 24/7 VIP support respectively.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Are the plugins and themes GPL licensed?</h3>
                <p className="text-gray-600">
                  Yes, all our plugins and themes are 100% GPL licensed, which means you can use them on as many of your
                  own websites as your plan allows. The GPL license gives you the freedom to modify and customize the
                  code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
