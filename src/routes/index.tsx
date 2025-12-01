import { createFileRoute } from '@tanstack/react-router'
import {ReactLenis} from 'lenis/react'
import About from '@/components/Home/About'
import Experience from '@/components/Home/Experience'
import Hero from '@/components/Home/Hero'
import Navbar from '@/components/layout/Navbar'
import Projects from '@/components/Home/Projects'
import Skills from '@/components/Home/Skills'
import Contact from '@/components/Home/Contact'
import Footer from '@/components/Home/Footer'
import LoadingPage from '@/components/layout/LoadingPage'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <LoadingPage />
      <ReactLenis root>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </ReactLenis>
    </>
    
  ),
})
