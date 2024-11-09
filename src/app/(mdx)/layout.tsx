import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={[
        'prose flex flex-col gap-8 justify-center prose-invert',
        'p-8 mt-16 mx-auto',
        'prose-headings:mt-0 prose-li:my-0',
      ].join(' ')}
    >
      <div>
        <Link href="/" className="btn btn-outline">
          <ArrowLeftIcon className="pointer-events-none" width={24} height={24} />
          Back to home
        </Link>
      </div>
      <div className={['p-8', 'border-2 border-t-[16px] border-current rounded-md'].join(' ')}>
        <article className="flex-1 flex flex-col">{children}</article>
      </div>
    </div>
  )
}
