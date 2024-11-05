import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@utils';
import { motion } from 'framer-motion';

const styles = cva('', {
	variants: {},
	defaultVariants: {},
});

const LoadingSpinner = React.forwardRef((props, forwardRef) => {
	const { className, children } = props;

	return <span className={cn(styles({ className }))}>{children}</span>;
});

export default LoadingSpinner;
