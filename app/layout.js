import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nothing To-Do App',
  description: 'When nothing to do, let\'s todo ',
}

export const viewport = {
  themeColor: '#123456',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " flex h-screen min-h-screen flex-col text-zinc-950"}>{children}</body>
    </html>
  )
}
