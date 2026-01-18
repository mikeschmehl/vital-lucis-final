import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

// 1. Moderne Sans-Serif Schrift (für Texte)
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// 2. Elegante Serif Schrift (für Headlines wie bei Lucis)
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata = {
  title: 'Vital Workflow | Corporate Health',
  description: 'Gesunde Mitarbeitende. Starke Unternehmen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}