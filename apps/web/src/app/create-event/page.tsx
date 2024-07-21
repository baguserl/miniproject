
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function createEvent() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Create Your Next Concert Event
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl">
            Easily manage and promote your upcoming concert events with our user-friendly platform.
          </p>
        </div>
      </section>
      <section id="create-event" className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <form className="max-w-xl mx-auto space-y-4">
            <div className="space-y-2">
              <Label htmlFor="event-name">Event Name</Label>
              <Input id="event-name" type="text" placeholder="Enter event name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event-date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      <input
                        type="date"
                        id="event-date"
                        className="w-full bg-transparent border-none focus:ring-0 focus:outline-none"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start" />
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-time">Time</Label>
                <Input id="event-time" type="time" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-location">Location</Label>
              <Input id="event-location" type="text" placeholder="Enter event location" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-price">Price</Label>
              <Input id="event-price" type="number" placeholder="Rp" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-available-seats">Available Seats</Label>
              <Input id="event-available-seats" type="number" placeholder="Enter available seats" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-description">Description</Label>
              <Textarea id="event-description" placeholder="Enter event description" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-image">Upload Image</Label>
              <Input id="event-image" type="file" />
            </div>
            <Button type="submit" className="w-full">
              Create Event
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}