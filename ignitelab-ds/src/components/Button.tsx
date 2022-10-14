import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode,
  asChild?: boolean,
  type?: string,
  className?: string,
}

export function Button ({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={clsx(
      'py-4 px-3 bg-green rounded font-sans text-black text-sm w-full transition-colors hover:bg-greenLight focus:ring-2 ring-light',
    )}
    >
      {children}
    </Comp>
  )
};