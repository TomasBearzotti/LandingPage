import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, BarChart3, Boxes } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        icon: Code2,
        title: "React y Next.js",
        description: "Interfaces web modernas y accesibles",
      },
      {
        icon: Code2,
        title: "HTML, CSS y JavaScript",
        description: "Maquetación responsive e interactividad",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        icon: Code2,
        title: "Python y Node.js",
        description: "APIs y aplicaciones web full stack",
      },
      {
        icon: Database,
        title: "SQL y NoSQL",
        description: "Diseño y optimización de bases de datos",
      },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      {
        icon: BarChart3,
        title: "Análisis de Datos",
        description: "Procesamiento y visualización de información",
      },
      {
        icon: Boxes,
        title: "Diseño de Software",
        description: "Arquitectura escalable y código mantenible",
      },
    ],
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Sobre mí
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Con años de experiencia construyendo productos digitales que las
            personas aman usar
          </p>
        </div>

        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-foreground/90 leading-relaxed text-center text-lg">
            Soy analista en sistemas, actualmente estudiando ingeniería en
            sistemas de información. Tengo experiencia en desarrollo full-stack,
            especializado en crear aplicaciones web robustas utilizando Python y
            React, con énfasis en el diseño de bases de datos eficientes y
            análisis de datos. Mi enfoque combina desarrollo técnico con buenas
            prácticas de diseño para crear soluciones escalables y mantenibles.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-center text-xl font-semibold">
                {category.title}
              </h3>
              <div className="grid gap-4">
                {category.skills.map((skill) => (
                  <Card
                    key={skill.title}
                    className="border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="pt-6 text-center space-y-3">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground text-balance">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
