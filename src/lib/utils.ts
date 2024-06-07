// lib/utils.ts
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const openInNewTab = (url: string) => {
  window.open(url, '_blank', 'noreferrer')
}
