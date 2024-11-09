'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-3xl font-semibold text-red-500">Oops!</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Something went wrong</h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground text-balance">
            An error occurred while loading this page. Please try again later. If the problem persists, contact support
            with the following error code:{' '}
            <pre className="inline-block font-mono bg-muted text-muted-foreground px-1 font-sm rounded">
              <code>{error.digest}</code>
            </pre>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="btn btn-primary" onClick={reset}>
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
