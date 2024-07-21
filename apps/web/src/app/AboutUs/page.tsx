export default function AboutUs() {

  return (
    <div className="flex flex-col">
      <section className="w-full h-[500px] relative">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
             <p className="text-4xl max-w-[1200px] italic font-bold">
              Experience the best in live music at our Musical Party Fest. <br /><br />Featuring a lineup of talented artists
              across multiple genres.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground">
              Acme Music Fest has been bringing the best in live music to our community for over a decade. What started
              as a small local event has grown into one of the most anticipated music festivals in the region. Our
              mission is to showcase talented artists, foster a love of music, and create unforgettable experiences for
              our attendees.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet the Artists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-muted-foreground">
                John Doe is a multi-talented singer-songwriter with a unique blend of folk and rock influences. His
                powerful vocals and captivating stage presence have earned him a loyal following.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-muted-foreground">
                Jane Smith is a rising star in the indie music scene. Her soulful vocals and introspective lyrics have
                garnered critical acclaim and a growing fanbase. She's known for her energetic live performances.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
              <p className="text-muted-foreground">
                Michael Johnson is a versatile musician who seamlessly blends elements of jazz, blues, and R&B. His
                virtuosic guitar playing and emotive performances have made him a fan favorite at Acme Music Fest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}