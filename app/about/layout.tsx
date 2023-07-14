import Link from "next/link"

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body >
            <nav>
                <Link href="/">link to Home page</Link>
            </nav>
            {children}
        </body>
      </html>
    )
  }