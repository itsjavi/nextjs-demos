import { sleepMs } from '@/lib/utils'
import { unstable_noStore as noStore } from 'next/cache'

export default async function () {
  noStore()
  await sleepMs(1000)
  throw new Error('This is an error')
}
