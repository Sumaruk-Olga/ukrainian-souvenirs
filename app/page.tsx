import Link from "next/link"

export default function Home() {
  return (
    <main>
      <nav>
      <Link href="/about">link to about </Link>
      </nav>      
      <h1>Home Page</h1> 
    </main>
  )
}
