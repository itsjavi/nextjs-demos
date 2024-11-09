import { cn } from '@/lib/utils'

export function Card({
  children,
  className,
  popup,
}: {
  children: React.ReactNode
  className?: string
  popup?: boolean
}) {
  return (
    <div
      className={cn(
        'relative rounded-lg bg-black/40 backdrop-blur-xl border border-blue-500/20 p-6 md:p-8 shadow-2xl',
        className,
        {
          'motion-preset-expand min-w-[320px] max-w-[450px]': popup,
        },
      )}
    >
      {children}
    </div>
  )
}
