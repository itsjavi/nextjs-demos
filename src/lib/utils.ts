import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function sleepMs(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function singleton<Value>(name: string, valueFactory: () => Value): Value {
  const yolo = globalThis as unknown as { __singletons: Record<string, unknown> }
  yolo.__singletons ??= {}
  yolo.__singletons[name] ??= valueFactory()
  return yolo.__singletons[name] as Value
}
