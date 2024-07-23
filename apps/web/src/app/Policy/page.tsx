export default function Policy() {
     return (
      <div className="bg-background text-foreground">
        <main className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              At Acme Inc., we are committed to protecting the privacy and security of your personal information. This
              Privacy Policy explains how we collect, use, and safeguard your data, and outlines your rights as a user.
            </p>
            <section>
              <h2 className="text-2xl font-bold">Data Collection</h2>
              <p className="text-muted-foreground">
                We collect personal information that you provide to us, such as your name, email address, and any other
                data you choose to share with us. We may also collect information about your usage of our website and
                services, including your IP address, browser type, and device information.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold">Data Usage</h2>
              <p className="text-muted-foreground">
                We use the collected data to provide and improve our services, to communicate with you, and to comply with
                legal and regulatory requirements. We may also use your information for marketing and advertising
                purposes, but we will always obtain your consent before doing so.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold">Data Sharing</h2>
              <p className="text-muted-foreground">
                We may share your personal information with third-party service providers who assist us in operating our
                website and delivering our services. We will only share your data with trusted partners and will never
                sell or rent your information to any third parties.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold">Data Security</h2>
              <p className="text-muted-foreground">
                We take the security of your personal information very seriously and have implemented appropriate
                technical and organizational measures to protect your data from unauthorized access, disclosure, or
                misuse. We regularly review and update our security practices to ensure the ongoing protection of your
                information.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, rectify, and delete your personal information, as well as the right to
                restrict or object to the processing of your data. You can also request a copy of your data and have it
                transferred to another service provider. If you have any concerns or questions about how we handle your
                personal information, please don't hesitate to contact us.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions or concerns about our Privacy Policy or the way we handle your personal
                information, please contact us at privacy@acme.com or by mail at:
              </p>
              <address className="not-italic">Acme Inc. 123 Main Street Anytown, USA 12345</address>
            </section>
          </div>
        </main>
      </div>
    )
  }