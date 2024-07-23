import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactUs() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          We value your feedback and are here to assist you with any inquiries or concerns you may have. Please fill out
          the form below, and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="mt-10 sm:mt-12">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" type="text" placeholder="Enter the subject" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} placeholder="Enter your message" className="min-h-[150px]" />
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="w-full sm:w-auto">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}