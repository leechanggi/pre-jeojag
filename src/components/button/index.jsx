import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@utils';

const styles = cva(
	'inline-flex items-center justify-center font-medium whitespace-nowrap rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-60',
	{
		variants: {
			variant: {
				default:
					'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-800 dark:text-blue-200 dark:hover:bg-blue-700',
				secondary:
					'bg-zinc-100 text-zinc-800 hover:bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800',
				destructive:
					'bg-red-600 text-zinc-100 hover:bg-red-500 dark:bg-red-800 dark:hover:bg-red-900',
				outline:
					'border border-zinc-200 bg-transparent text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-700',
				ghost:
					'bg-transparent text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-700',
				link: 'text-zinc-800 underline-offset-4 decoration-zinc-800 hover:underline dark:text-zinc-100 dark:decoration-zinc-100',
			},
			size: {
				default: 'h-10 px-4 text-sm',
				sm: 'h-9 px-3 text-xs',
				lg: 'h-11 px-8 text-base',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

const Button = React.forwardRef((props, forwardRef) => {
	const {
		className,
		type = 'button',
		disabled = false,
		variant = 'default',
		size = 'default',
		asChild = false,
		loading = false,
		children,
		...rest
	} = props;
	const Comp = asChild ? Slot : 'button';
	const replaceType = asChild ? undefined : type;
	const replaceDisabled = loading ? true : disabled;

	return (
		<Comp
			ref={forwardRef}
			className={cn(styles({ variant, size, className }))}
			type={replaceType}
			disabled={replaceDisabled}
			{...rest}
		>
			{loading ? (
				<span>
					{/* <span className='sr-only'>로딩 스피너 컴포넌트 추가 예정</span> */}
					<span className='sr-only'>로딩 중</span>
				</span>
			) : (
				children
			)}
		</Comp>
	);
});
Button.displayName = 'Button';

export default Button;
