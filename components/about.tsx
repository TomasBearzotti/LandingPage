import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, BarChart3, Boxes } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    description: "Construcción de aplicaciones web con Python, React y Node.js",
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description: "Diseño y optimización de bases de datos SQL y NoSQL",
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    description: "Procesamiento y visualización de información para toma de decisiones",
  },
  {
    icon: Boxes,
    title: "Diseño de Software",
    description: "Arquitectura de soluciones escalables y código limpio",
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Sobre mí</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Con años de experiencia construyendo productos digitales que las personas aman usar
          </p>
        </div>

        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-foreground/90 leading-relaxed text-center text-lg">
            Soy analista en sistemas, actualmente estudiando ingeniería en sistemas de información. Tengo experiencia en desarrollo full-stack, especializado en crear aplicaciones web robustas utilizando Python y React, con énfasis en el diseño de bases de datos eficientes y análisis de datos. Mi enfoque combina desarrollo técnico con buenas prácticas de diseño para crear soluciones escalables y mantenibles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{skill.title}</h3>
                <p className="text-sm text-muted-foreground text-balance">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
