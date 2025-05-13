import { AnchorHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { FaWhatsapp } from 'react-icons/fa6';

const linkVariants = cva(
  'inline-flex items-center justify-center cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'text-primary_neutral1 font-montserrat text-2xl font-normal leading-8 hover:underline active:text-primary active:underline focus:outline-1',
        icon: 'rounded-full text-white bg-primary hover:bg-secondary_highlight1 shadow-black/30 drop-shadow-lg outline-0 transition-all duration-150 ease-in-out focus-visible:outline-1 focus-visible:outline-black',
      },
      size: {
        default: 'p-3',
        icon: 'p-2 w-15 h-15',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type LinkVariants = 'default' | 'icon';

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  variant?: LinkVariants;
  size?: LinkVariants;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, target, variant, size, asChild, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';

    return (
      <Comp
        ref={ref}
        className={cn(linkVariants({ variant, size, className }))}
        target={target}
        {...props}
      >
        {variant === 'icon' ? (
          <FaWhatsapp className='h-full w-full' />
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Link.displayName = 'Link';

export default Link;
