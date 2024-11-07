import { Text } from '@components';

const meta = {
	title: 'Components/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	// argTypes: {
	// 	variant: {
	// 		control: 'select',
	// 		options: [
	// 			'default',
	// 			'secondary',
	// 			'destructive',
	// 			'outline',
	// 			'ghost',
	// 			'link',
	// 		],
	// 		description: '버튼 컴포넌트의 색상 타입입니다.',
	// 		table: {
	// 			defaultValue: {
	// 				summary: "'default'",
	// 			},
	// 			type: {
	// 				summary: 'enum',
	// 				detail:
	// 					"'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'",
	// 			},
	// 		},
	// 	},
	// 	size: {
	// 		control: 'select',
	// 		options: ['default', 'sm', 'lg', 'icon'],
	// 		description: '버튼 컴포넌트의 크기 타입입니다.',
	// 		table: {
	// 			defaultValue: {
	// 				summary: "'default'",
	// 			},
	// 			type: {
	// 				summary: 'enum',
	// 				detail: "'default' | 'sm' | 'lg' | 'icon'",
	// 			},
	// 		},
	// 	},
	// 	children: {
	// 		control: 'text',
	// 		description: '버튼 컴포넌트의 자식요소입니다.',
	// 		table: {
	// 			type: {
	// 				summary: 'ReactDOM',
	// 			},
	// 		},
	// 	},
	// 	asChild: {
	// 		control: 'boolean',
	// 		description: '기본 렌더링 요소를 자식요소로 전달합니다.',
	// 		table: {
	// 			defaultValue: {
	// 				summary: false,
	// 			},
	// 		},
	// 	},
	// 	loading: {
	// 		control: 'boolean',
	// 		description: '로딩 스피너를 표시하며, disabled 상태 입니다.',
	// 		table: {
	// 			defaultValue: {
	// 				summary: false,
	// 			},
	// 		},
	// 	},
	// },
};

const Default = {
	args: {
		// variant: 'default',
		// size: 'default',
		// children: '버튼',
		// asChild: false,
		// loading: false,
	},
};

export default meta;
export { Default };
