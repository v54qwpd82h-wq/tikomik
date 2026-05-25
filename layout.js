import './globals.css'

export const metadata = {
  title: 'G.L Tikomik Studio',
  description: 'Kreye videyo anime an Kreyòl',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ht">
      <body>{children}</body>
    </html>
  )
}
