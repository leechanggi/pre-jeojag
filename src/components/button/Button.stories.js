import { Button } from '@components';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			control: 'radio',
			options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
			description: '버튼 컴포넌트의 색상 타입입니다.',
		},
		size: {
			control: 'radio',
			options: ['default', 'sm', 'lg', 'icon'],
			description: '버튼 컴포넌트의 크기 타입입니다.',
		},
	},
};

const Default = {
	args: {
		variant: 'default',
		size: 'default',
		children: 'button',
	},
};

export default meta;
export { Default };
