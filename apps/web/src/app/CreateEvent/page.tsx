
"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function CreateEvent() {
  const [selectedEventType, setSelectedEventType] = useState("free")
  const handleEventTypeChange = (value: string) => {
    setSelectedEventType(value)
  }
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
                <Input id="event-date" type="date" />
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
              <Label htmlFor="event-type">Event Type</Label>
              <RadioGroup
                id="event-type"
                defaultValue="free"
                className="flex items-center gap-4"
                onValueChange={handleEventTypeChange}
              >
                <Label htmlFor="event-type-free" className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem id="event-type-free" value="free" />
                  Free
                </Label>
                <Label htmlFor="event-type-paid" className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem id="event-type-paid" value="paid" />
                  Paid
                </Label>
              </RadioGroup>
            </div>
            <div className={`space-y-2 ${selectedEventType === "paid" ? "" : "hidden"}`}>
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
            <Button type="submit" className="w-full">
              Create Event
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}