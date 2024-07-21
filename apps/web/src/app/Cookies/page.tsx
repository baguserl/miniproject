export default function Cookies() {
       return (
      <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Cookies Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              At Acme Inc., we use cookies to enhance your browsing experience and to provide you with personalized
              content and features. This Cookies Policy explains what cookies are, how we use them, and how you can manage
              your cookie preferences.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">What are Cookies?</h2>
            <p className="mt-4 text-muted-foreground">
              Cookies are small text files that are stored on your device when you visit a website. They help the website
              remember your preferences and actions, so that you don't have to re-enter information every time you visit.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Types of Cookies We Use</h2>
            <div className="mt-4 grid gap-6">
              <div>
                <h3 className="text-lg font-semibold">Strictly Necessary Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies are essential for the website to function properly. They allow you to navigate the site
                  and use its features.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Functional Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies help us to remember your preferences and settings, such as your language or location, so
                  that we can provide a more personalized experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Performance Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies collect information about how you use the website, such as which pages you visit and how
                  long you spend on each page. This helps us to improve the website's performance and user experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Advertising Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies are used to deliver relevant advertisements to you, based on your interests and browsing
                  behavior. They also help us to measure the effectiveness of our advertising campaigns.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Managing Your Cookie Preferences</h2>
            <p className="mt-4 text-muted-foreground">
              You can manage your cookie preferences by adjusting your browser settings. Most browsers allow you to accept
              or reject cookies, and to delete cookies that have already been set. Here's how to do it:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Google Chrome:</strong> Go to Settings {">"} Privacy and security > Cookies and other site data.
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Go to Options > Privacy & Security > Cookies and Site Data.
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Go to Settings > Privacy, search, and services > Cookies and site
                permissions.
              </li>
              <li>
                <strong>Safari:</strong> Go to Preferences > Privacy > Cookies and website data.
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Please note that disabling cookies may affect the functionality of the website and prevent you from
              accessing certain features.
            </p>
          </div>
        </div>
      </div>
    )
  }