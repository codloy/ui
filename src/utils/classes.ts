import { twMerge as merge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export default function classes(...css: ClassValue[]) {
  return merge(clsx(css));
}
