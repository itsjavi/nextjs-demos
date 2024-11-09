import { MainLogo } from '@/components/logos'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function LoginForm() {
  return (
    <div
      // onSubmit={handleSubmit}
      className="flex flex-col items-center gap-6 text-balance"
    >
      {/* Avatar Circle */}
      <Link href="/" className="flex items-center justify-center p-1">
        <MainLogo />
      </Link>

      <div className="w-full flex flex-col gap-4 text-center">
        <div className="text-muted-foreground">Sign in with GitHub to access this site.</div>
      </div>

      {/* Login Button */}
      <Link href="/signin/github" className="btn btn-primary w-full">
        Sign In with GitHub
        <ChevronRight size={20} className="inline-block" />
      </Link>

      {/* Links */}
      <div className="flex justify-between w-full gap-4">
        <Link href={'/about'} className="text-blue-300 hover:text-blue-200 transition-colors">
          About this site
        </Link>
        <Link href={'/policies'} className="text-blue-300 hover:text-blue-200 transition-colors">
          Terms and Policies
        </Link>
      </div>
    </div>
  )
}
