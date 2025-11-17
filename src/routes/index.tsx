import { createFileRoute } from '@tanstack/react-router'
import {ReactLenis} from 'lenis/react'
import Hero from '@/components/Home/Hero'
import Navbar from '@/components/layout/Navbar'
import Projects from '@/components/Home/Projects'
import Skills from '@/components/Home/Skills'

export const Route = createFileRoute('/')({
  component: () => (
    <ReactLenis root>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <div className='h-screen bg-[#010111]'>

      </div>
    </ReactLenis>
  ),
})
