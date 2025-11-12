import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Home/Hero'
import Navbar from '@/components/layout/Navbar'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Navbar />
      <Hero />
      <div className='h-[800px]'>
        next page
      </div>
    </>
  ),
})
