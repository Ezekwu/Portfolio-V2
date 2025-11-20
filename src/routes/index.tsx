import { createFileRoute } from '@tanstack/react-router'
import {ReactLenis} from 'lenis/react'
import About from '@/components/Home/About'
import Experience from '@/components/Home/Experience'
import Hero from '@/components/Home/Hero'
import Navbar from '@/components/layout/Navbar'
import Projects from '@/components/Home/Projects'
import Skills from '@/components/Home/Skills'
import Contact from '@/components/Home/Contact'

export const Route = createFileRoute('/')({
  component: () => (
    <ReactLenis root>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </ReactLenis>
  ),
})
