import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import * as CheckboxPrimitive from  '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {
  id?: string,
};

export function Checkbox ({ id }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[2px] bg-gray rounded"
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h5 w5 text-greenLight" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
};