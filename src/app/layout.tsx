import { ReactNode } from 'react'

export const metadata = {
  title: 'XShow',
  description: 'Plataforma de venda de ingresso de eventos e shows.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
