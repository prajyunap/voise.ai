import './globals.css'

export const metadata = {
  title: 'Voise.ai - AI Sales & Support Agent',
  description: 'AI sales & support agent that answers calls, captures leads, and closes deals',
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