import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("bd",{
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function formatViews(num: number) {
  if (num === 1) return '1 view';
  return `${num} views`
}