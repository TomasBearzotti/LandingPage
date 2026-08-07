import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";

const projects = [
  {
    title: "ClubMaster",
    description:
      "Sistema integral de gestión para clubes deportivos. Centraliza la administración: gestión de socios, control de cuotas, organización de torneos, contratación de árbitros y seguimiento de estadísticas.",
    image: "/Screenshot_Clubmaster.jpg",
    tags: ["React", "C#", ".NET", "SQL Server"],
    liveUrl: "https://demo.clubmaster.zotti.site",
    githubUrl: "https://github.com/TomasBearzotti/ClubMaster-Web",
    docUrl:
      "https://docs.google.com/document/d/1IAWVyjAcIeBHhbtbPuUhPf1zOO_aiADBSuQm4CMbVgY/edit?usp=sharing",
    hasDemo: true,
  },
  {
    title: "Futbolle",
    description:
      "Proyecto final de desarrollo web centrado en el ámbito del fútbol. Juego estilo Wordle con preguntas sobre jugadores de fútbol.",
    image: "/Futbolle.jpg",
    tags: ["HTML", "CSS", "JS"],
    liveUrl: "https://futbolle.zotti.site/",
    githubUrl: "https://github.com/TomasBearzotti/WEBFinal_Futbolle",
    hasDemo: true,
  },
  {
    title: "Simulación ClubMaster",
    description:
      "Proyecto final de simulación y modelización numérica aplicado al sistema ClubMaster. Simulacion de colas sobre reservas de un club.",
    image: "/Simulacion_ClubMaster.jpg",
    tags: ["Simulación", "Teoria de Colas", "React"],
    liveUrl: "https://clubmaster-sim.zotti.site/",
    githubUrl: "https://github.com/TomasBearzotti/SimulacionFinal_ClubMaster",
    docUrl:
      "https://docs.google.com/document/d/10fL6lUEuDWB_BD3Ymv7wXPRbhs1mwBKbqHWMdGZLgQ4/edit?usp=sharing",
    hasDemo: true,
  },
  {
    title: "Tienda Fácil",
    description:
      "Sistema de gestión para mercados. Control de proveedores, stocks, ventas y reportes. Incluye sistema de facturas para maximizar la eficiencia del negocio.",
    image: "/Screenshot_TiendaFacil.jpg",
    tags: ["C#", ".NET", "WinForms", "SQL Server"],
    liveUrl: "",
    githubUrl: "https://github.com/TomasBearzotti/FinalDAS-TiendaFacil",
    hasDemo: false,
  },
  {
    title: "Club WindowsForms",
    description:
      "Proyecto de gestión de club deportivo desarrollado en WindowsForms. Aplicación de escritorio para Programación Orientada a Objetos.",
    image: "/Club.png",
    tags: ["C#", "WinForms", "POO"],
    liveUrl: "",
    githubUrl: "https://github.com/TomasBearzotti/FinalPOO-Club",
    hasDemo: false,
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Una selección de mis trabajos más recientes y proyectos personales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 hover:shadow-lg transition-all group flex flex-col"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3 flex-grow">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-3 justify-center">
                {project.hasDemo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </a>
                </Button>
                {project.docUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                    asChild
                  >
                    <a
                      href={project.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Docs
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
