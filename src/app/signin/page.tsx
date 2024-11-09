import { Card } from '@/components/blocks'
import { isLoggedIn } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { LoginForm } from './_components'

export default async function () {
  if (await isLoggedIn()) {
    redirect('/')
  }

  return (
    <Card popup>
      (Page-View)
      <LoginForm />
    </Card>
  )
}
