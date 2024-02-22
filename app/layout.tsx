import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import './globalStyles/globals.scss'
import Layout from '@/layouts/layout'

export const metadata: Metadata = {
  title: 'MarkTech',
  description: 'Магазин оригинальной электроники Apple, Dyson и других брендов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
