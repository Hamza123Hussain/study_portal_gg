import type { Metadata } from 'next'
import './globals.css'
import { NavbarComponent } from '@/components/Navbar/MainNavbar'
import Main from '@/components/FilterUniversity/Main'
import Footer from '@/components/Footer/Footer'
export const metadata: Metadata = {
  title: 'Study Portal Global Grads',
  description: 'Open To EveryOne',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <NavbarComponent />
          <main className="flex-1 min-h-screen overflow-y-auto bg-gray-100 ">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
