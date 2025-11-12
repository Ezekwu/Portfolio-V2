import { cn } from '@/utils/helpers'

export default function BaseWrapper( { children, className }: { children: React.ReactNode, className?: string } ) {
  return (
    <div className={cn("max-w-[1400px] mx-auto px-4 md:px-8", className)}>
      { children }
    </div>
  )
}
