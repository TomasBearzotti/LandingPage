import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Proyecto E-commerce",
    description:
      "Plataforma completa de comercio electrónico con carrito de compras, pagos integrados y panel de administración.",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación de productividad con colaboración en tiempo real, etiquetas personalizadas y recordatorios.",
    image: "/task-management-app.png",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Panel de control con visualizaciones de datos interactivas y reportes personalizables en tiempo real.",
    image: "/analytics-dashboard.png",
    tags: ["Vue.js", "D3.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Proyectos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Una selección de mis trabajos más recientes y proyectos personales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-all group">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
