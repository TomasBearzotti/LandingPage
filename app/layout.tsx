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
    default: "Tomás Bearzotti - Desarrollador & Diseñador",
    template: "%s | Tomás Bearzotti"
  },
  description:
    "Portafolio personal de Tomás Bearzotti. Desarrollador full-stack especializado en crear experiencias digitales excepcionales.",
  keywords: ["desarrollador web", "full-stack developer", "React", "Next.js", "TypeScript", "diseño web", "portfolio", "Tomás Bearzotti"],
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
    title: "Tomás Bearzotti - Desarrollador & Diseñador",
    description: "Portafolio personal de Tomás Bearzotti. Desarrollador full-stack especializado en crear experiencias digitales excepcionales.",
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
    title: "Tomás Bearzotti - Desarrollador & Diseñador",
    description: "Portafolio personal de Tomás Bearzotti. Desarrollador full-stack especializado en crear experiencias digitales excepcionales.",
    images: ["/placeholder.jpg"],
    creator: "@tuusuario", // Cambia esto por tu handle de Twitter si lo tienes
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
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
