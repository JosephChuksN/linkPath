import '@styles/global.css'
import { AuthProvider } from '@Context/AppContext'

export const metadata = {
  title: 'Linkpath',
  description: 'One page that links to everything. Access links to your socails, website, events, music, and more with just one click.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
