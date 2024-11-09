import { LoginForm } from '@/app/signin/_components'
import { InterceptedModal } from '@/components/intercepted-modal'
import { isLoggedIn } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function () {
  if (await isLoggedIn()) {
    redirect('/')
  }

  return (
    <InterceptedModal>
      (Modal-intercepted)
      <LoginForm />
    </InterceptedModal>
  )
}
