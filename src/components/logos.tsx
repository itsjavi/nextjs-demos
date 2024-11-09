import { cn } from '@/lib/utils'
import LogoSvg from '@/public/next.svg'
export function MainLogo({ className, ...props }: React.ComponentProps<typeof LogoSvg>) {
  return (
    <LogoSvg
      className={cn('dark:invert pointer-events-none', className)}
      alt="logo"
      width={180}
      height={38}
      {...props}
    />
  )
}
