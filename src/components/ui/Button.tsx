'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-primary/70 focus-visible:ring-primary/30 focus-visible:ring-[3px]',
	{
		variants: {
			variant: {
				default: 'border border-primary/30 bg-primary/15 text-primary hover:bg-primary/20 hover:border-primary/40',
				project: 'border border-[oklch(66%_0.075_246_/_0.4)] bg-[oklch(66%_0.075_246_/_0.2)] text-primary-foreground hover:bg-[oklch(66%_0.075_246_/_0.4)] hover:border-[oklch(66%_0.075_246_/_0.7)] hover:text-foreground',
				destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20',
				outline:
					'border border-border bg-card/60 text-foreground hover:bg-muted/80',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'text-muted-foreground hover:bg-muted/80 hover:text-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9',
				'icon-sm': 'size-8',
				'icon-lg': 'size-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
