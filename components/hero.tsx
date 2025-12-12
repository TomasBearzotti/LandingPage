"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-md opacity-75" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Tomás Bearzotti"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tomás Bearzotti</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Full Stack Developer • Analista en Sistemas
          </p>
        </div>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed text-pretty">
          Analista en sistemas y estudiante de ingeniería, especializado en desarrollo full-stack y análisis de datos.
          Apasionado por crear soluciones tecnológicas eficientes con foco en diseño de bases de datos y arquitectura de software.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button size="lg" className="group" onClick={() => scrollToSection("proyectos")}>
            Ver mis proyectos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/CV - Bearzotti.pdf" download="CV-Tomas-Bearzotti.pdf">
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection("contacto")}>
            Contactar
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
          <div className="w-[600px] h-[600px] rounded-full bg-primary/30" />
        </div>
      </div>
    </section>
  )
}
