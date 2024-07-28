import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function CreateTestimonial() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">Share Your Experience</h1>
          <p className="mt-4 text-lg text-primary-foreground">
            We'd love to hear your thoughts about our products or services. Submit a testimonial and help others make
            informed decisions.
          </p>
        </div>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Submit a Testimonial</CardTitle>
              <CardDescription>Fill out the form below to share your experience with us.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="testimonial">Testimonial</Label>
                  <Textarea
                    id="testimonial"
                    placeholder="Share your thoughts about our products or services"
                    className="min-h-[150px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">Photo (optional)</Label>
                  <Input id="image" type="file" />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit">Submit Testimonial</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}