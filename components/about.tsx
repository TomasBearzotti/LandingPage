import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Rocket, Users } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Desarrollo",
    description: "Especializado en tecnologías modernas y mejores prácticas",
  },
  {
    icon: Palette,
    title: "Diseño",
    description: "Creación de interfaces intuitivas y visualmente atractivas",
  },
  {
    icon: Rocket,
    title: "Innovación",
    description: "Siempre explorando nuevas tecnologías y metodologías",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo en equipo y comunicación efectiva",
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
            Soy un desarrollador full-stack apasionado por crear soluciones innovadoras. Me especializo en transformar
            ideas complejas en aplicaciones simples y elegantes. Mi enfoque combina pensamiento técnico con sensibilidad
            de diseño para entregar productos excepcionales.
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
