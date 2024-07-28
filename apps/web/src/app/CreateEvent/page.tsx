"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function CreateEvent() {
  const [selectedEventType, setSelectedEventType] = useState("free")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [isLocationManual, setIsLocationManual] = useState(false)
  
  const handleEventTypeChange = (value: string) => {
    setSelectedEventType(value)
  }
  
  const handleLocationChange = (value: string) => {
    if (value === "") {
      setIsLocationManual(true)
    } else {
      setSelectedLocation(value)
      setIsLocationManual(false)
    }
  }
  
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
    "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Côte d'Ivoire",
    "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
    "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America",
    "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
    "Zambia", "Zimbabwe",
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <section className="w-full py-15 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Create Your Next Concert Event
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl">
            Easily manage and promote your upcoming concert events with our user-friendly platform.
          </p>
        </div>
      </section>
      <section id="create-event" className="flex-1 py-12 md:py-20 overflow-auto">
        <div className="container px-4 md:px-6">
          <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <form className="space-y-4">
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
                <Select
                  id="event-location"
                  value={selectedLocation}
                  onValueChange={handleLocationChange}
                  className="w-full"
                >
                  <SelectTrigger className="flex items-center justify-between">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] overflow-auto">
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {isLocationManual && <Input id="event-location-manual" type="text" placeholder="Enter a country" />}
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
              {selectedEventType === "paid" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="event-price">Price</Label>
                    <Input id="event-price" type="number" placeholder="Rp" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-available-seats">Available Seats</Label>
                    <Input id="event-available-seats" type="number" placeholder="Enter available seats" />
                  </div>
                </>
              )}
              <div className="space-y-2">
                <Label htmlFor="event-description">Description</Label>
                <Textarea id="event-description" placeholder="Enter event description" />
              </div>
              <Button type="submit" className="w-full">
                Create Event
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>© 2024 Musical Concert All rights reserved.</p>
          <nav className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
