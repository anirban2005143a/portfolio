import "./global.css";
export const metadata = {
  title: "Developer Portfolio",
  description: "A professional portfolio for a web developer",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          {children}
      </body>
    </html>
  )
}
