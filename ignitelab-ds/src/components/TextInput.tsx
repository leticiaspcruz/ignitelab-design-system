import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {};

export interface TextInputRootProps{
  children: ReactNode;
};

export interface TextInputIconProps{
  children: ReactNode;
};


function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={clsx(
      'flex items-center gap-3 h-12 py-4 px-3 rounded w-full outline-none bg-gray text-light text-xs placeholder:text-light focus:ring-2 ring-greenLight'    
    )}>
      {props.children}
    </div>
  )
};
TextInputRoot.displayName = "TextInput.Root";


function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 bg-gray">
    {props.children}
  </Slot>
  )
};
TextInputIcon.displayName = "TextInput.Icon";


function TextInput (props: TextInputProps) {
  return (
      <input 
    className="bg-transparent flex-1"
      {...props}
    />
  )
};

TextInput.displayName = "TextInput.Input";

export const TextInputComponent = {
  Root: TextInputRoot,
  Input: TextInput, 
  Icon: TextInputIcon,
}