"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Event {
  id: number;
  name: string;
  eventtype: string;
  price: number;
  event_date: string;
  event_time: string;
  description: string;
  location: string;
  seats: number;
}

export default function ShowEvent() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get<{ data: Event[] }>(`${process.env.NEXT_PUBLIC_BASE_API_URL}/events`);
        console.log(response.data);

        setEvents(response.data.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString: string) => {
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    return new Date(timeString).toLocaleTimeString(undefined, options);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-bold mb-6 text-center">All Events</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Type</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seats</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {events.map((event, index) => (
                <tr key={event.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{index + 1}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{event.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{event.eventtype}</td>
                  <td className="px-4 py-2 whitespace-nowrap">Rp {event.price}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{formatDate(event.event_date)}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{formatTime(event.event_time)}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{event.location}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{event.seats}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{event.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
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
  );
}
