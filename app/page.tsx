import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 pr-20">
          <a href="#inicio" className="font-semibold tracking-tight">
            Tomás Bearzotti
          </a>
          <nav aria-label="Navegación principal">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
              <li>
                <a
                  className="underline-offset-4 hover:underline focus-visible:underline"
                  href="#inicio"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="underline-offset-4 hover:underline focus-visible:underline"
                  href="#sobre-mi"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  className="underline-offset-4 hover:underline focus-visible:underline"
                  href="#proyectos"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  className="underline-offset-4 hover:underline focus-visible:underline"
                  href="#contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="min-h-screen">
        <ThemeToggle />
        <div id="inicio" className="scroll-mt-20">
          <Hero />
        </div>
        <div className="scroll-mt-20">
          <About />
        </div>
        <div className="scroll-mt-20">
          <Projects />
        </div>
        <div className="scroll-mt-20">
          <Contact />
        </div>
      </main>
    </>
  );
}
