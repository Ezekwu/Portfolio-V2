import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Home/Hero'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Hero />
      <div className='h-[800px]'>
        next page
      </div>
    </>
  ),
})
