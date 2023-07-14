import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ukrainian souvenirs',
  description: 'online store selling souvenirs from Ukraine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
