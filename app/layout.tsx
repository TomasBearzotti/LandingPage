import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://zotti.site"),
  title: {
    default: "Tomás Bearzotti | Full Stack Developer & Analista en Sistemas",
    template: "%s | Tomás Bearzotti"
  },
  description:
    "Analista en sistemas y estudiante de ingeniería especializado en desarrollo full-stack, bases de datos y análisis de datos. Desarrollador en Rootstock Labs.",
  keywords: ["desarrollador web", "full-stack developer", "Python", "React", "Node.js", "bases de datos", "análisis de datos", "Tomás Bearzotti"],
  authors: [{ name: "Tomás Bearzotti" }],
  creator: "Tomás Bearzotti",
  publisher: "Tomás Bearzotti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://zotti.site",
    title: "Tomás Bearzotti | Full Stack Developer & Analista en Sistemas",
    description: "Analista en sistemas y estudiante de ingeniería especializado en desarrollo full-stack, bases de datos y análisis de datos.",
    siteName: "Tomás Bearzotti Portfolio",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Tomás Bearzotti - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Bearzotti | Full Stack Developer & Analista en Sistemas",
    description: "Analista en sistemas y estudiante de ingeniería especializado en desarrollo full-stack, bases de datos y análisis de datos.",
    images: ["/placeholder.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Descomenta y agrega tu código de Google Search Console cuando lo tengas:
  // verification: {
  //   google: "tu-codigo-de-verificacion",
  // },
  icons: {
    icon: [
      {
        url: "/icon-32x32.png",
      },
    ],
    apple: "/icon-32x32.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getCookie(name) {
                  const nameEQ = name + '=';
                  const ca = document.cookie.split(';');
                  for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
                  }
                  return null;
                }
                const savedTheme = getCookie('theme');
                const theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tomás Bearzotti",
              url: "https://zotti.site",
              jobTitle: "Desarrollador Full-Stack",
              description: "Desarrollador full-stack especializado en crear experiencias digitales excepcionales.",
              sameAs: [
                "https://github.com/TomasBearzotti"
              ],
              knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Web Development", "Full-Stack Development"],
              image: "https://zotti.site/placeholder.jpg"
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
