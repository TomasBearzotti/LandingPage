import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:tu@email.com",
    label: "tu@email.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/tuusuario",
    label: "/tuusuario",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/tuusuario",
    label: "@tuusuario",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/tuusuario",
    label: "@tuusuario",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Conectemos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            ¿Tienes un proyecto en mente o simplemente quieres charlar? No dudes en contactarme
          </p>
        </div>

        <Card className="border-border/50">
          <CardContent className="p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-accent/50 transition-colors group"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{link.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <p className="text-muted-foreground mb-4">¿Prefieres enviar un mensaje directo?</p>
              <Button size="lg" asChild>
                <a href="mailto:tu@email.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        </footer>
      </div>
    </section>
  )
}
