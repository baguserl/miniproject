import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-4 px-4 md:px-6 w-full fixed bottom-0">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-2">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span> Musical Concert</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="/AboutUs" className="text-sm hover:underline underline-offset-4" prefetch={false}>
            About Us
          </Link>
          <Link href="Cookies" className="text-sm hover:underline underline-offset-4" prefetch={false}>
            Cookies
          </Link>
          <Link href="ContactUs" className="text-sm hover:underline underline-offset-4" prefetch={false}>
            Contact Us
          </Link>
        </nav>
        <p className="text-xs">&copy; 2024 Musical Concert All rights reserved.</p>
      </div>
    </footer>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
