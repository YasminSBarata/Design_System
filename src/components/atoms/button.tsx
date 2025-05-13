import { LoaderCircle } from 'lucide-react';
import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const variants = cva(
  'inline-flex itens-center font-montserrat justify-center px-10 py-3.5 bg-primary rounded-[27px]',
  {
    variants: {
      variant: {
        primary:
          'hover:bg-secondary_highlight1 active:bg-primary_neutral2 cursor-pointer focus-visible:outline focus-visible:outline-1 disabled:opacity-40 focus-visible:outline-black text-white',
        loading: ' text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const icon = {
  loading: () => <LoaderCircle className='h-4 w-4 animate-spin text-white' />,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'loading';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const isLoading = variant === 'loading';
    // const type = variant === 'loading' ?

    return (
      <Comp
        className={cn(variants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {isLoading ? icon.loading() : null}
        {children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
export { Button, variants };
