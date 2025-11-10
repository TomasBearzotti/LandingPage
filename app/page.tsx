import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
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
  )
}
