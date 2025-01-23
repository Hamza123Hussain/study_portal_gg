import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import ReduxLayout from '@/components/Layout/ReduxLayout'
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
        <ReduxLayout>{children}</ReduxLayout>
        <Toaster />
      </body>
    </html>
  )
}
