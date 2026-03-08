import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Resume Builder - KodNest Premium',
  description: 'Project 3 - Build Track',
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
