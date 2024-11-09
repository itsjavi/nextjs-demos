'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, type ComponentPropsWithoutRef } from 'react'
import { Card } from './blocks'

export function InterceptedModal({ children, open = true, ...rest }: ComponentPropsWithoutRef<'dialog'>) {
  const router = useRouter()
  const dismissModal = useCallback(() => {
    router.back()
  }, [])

  if (!children) {
    return null
  }

  return (
    <dialog className="modal bg-black/40 fixed inset-0" open={open} {...rest}>
      <Card popup>
        <div className="contents absolute right-2 top-2">
          <button
            type="button"
            autoFocus
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={dismissModal}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {children}
      </Card>
    </dialog>
  )
}
