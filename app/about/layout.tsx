import Link from "next/link"

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return ( <>  
            <nav>
                <Link href="/">link to Home page</Link>
            </nav>
            {children}              
            </>)
  }