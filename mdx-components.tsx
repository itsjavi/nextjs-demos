import type { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'
import type { ComponentProps, ReactNode } from 'react'

function OptimizedImage(props: ComponentProps<'img'>): ReactNode {
  return (
    <figure className="max-w-full h-auto">
      <NextImage className="max-w-full h-auto" src={props.src as string} alt={props.alt || ''} fill />
    </figure>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: OptimizedImage,
    ...components,
  }
}
