export default function Testimonial() {
    return (
      <section className="flex flex-col items-center justify-center gap-8 px-4 md:px-6 pt-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Fans Say</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers about their experience at our music concerts.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
          <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <img src="/images/t1.jpg" width="48" height="48" alt="Avatar" className="h-12 w-12 rounded-full" />
              <div>
                <div className="font-medium">Jane Doe</div>
                <div className="text-sm text-muted-foreground">Attended the concert on June 15, 2024</div>
              </div>
            </div>
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;The energy and performance of the band was incredible. I had an amazing time and can&apos;t wait to
              come back!&rdquo;
            </blockquote>
          </div>
          <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <img src="/images/t2.jpg" width="48" height="48" alt="Avatar" className="h-12 w-12 rounded-full" />
              <div>
                <div className="font-medium">John Smith</div>
                <div className="text-sm text-muted-foreground">Attended the concert on July 10, 2024</div>
              </div>
            </div>
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;The sound quality was incredible, and the band really connected with the audience. I had an
              unforgettable experience.&rdquo;
            </blockquote>
          </div>
          <div className="grid gap-4 rounded-lg bg-background p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <img src="/images/t3.png" width="48" height="48" alt="Avatar" className="h-12 w-12 rounded-full" />
              <div>
                <div className="font-medium">Sarah Lee</div>
                <div className="text-sm text-muted-foreground">Attended the concert on August 5, 2024</div>
              </div>
            </div>
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;The band&apos;s performance was truly mesmerizing. I couldn&apos;t take my eyes off the stage. It was
              an unforgettable experience.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    )
  }