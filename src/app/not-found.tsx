'use client'

// Error components must be Client Components

export default function () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid min-h-full place-items-center px-6">
        <div className="text-center">
          <p className="text-3xl font-semibold text-foreground opacity-60">HTTP 404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-foreground opacity-60 text-balance">
            The page you are looking for does not exist.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" className="btn btn-primary">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
