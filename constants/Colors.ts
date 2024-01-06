import type { Theme } from '@react-navigation/native'

export const Color = {
	black: {
		'50': '#f6f6f6',
		'100': '#e7e7e7',
		'200': '#d1d1d1',
		'300': '#b0b0b0',
		'400': '#888888',
		'500': '#6d6d6d',
		'600': '#5d5d5d',
		'700': '#4f4f4f',
		'800': '#454545',
		'900': '#3d3d3d',
		'950': '#000000'
	},
	white: {
		'50': '#ffffff',
		'100': '#efefef',
		'200': '#dcdcdc',
		'300': '#bdbdbd',
		'400': '#989898',
		'500': '#7c7c7c',
		'600': '#656565',
		'700': '#525252',
		'800': '#464646',
		'900': '#3d3d3d',
		'950': '#292929'
	},
	daintree: {
		'50': '#e9fffe',
		'100': '#c9fffc',
		'200': '#99fffd',
		'300': '#54ffff',
		'400': '#07f3ff',
		'500': '#00d4ef',
		'600': '#00a8c9',
		'700': '#0086a1',
		'800': '#086b82',
		'900': '#0c586d',
		'950': '#002a37'
	},
	green: {
		'50': '#e7ffe4',
		'100': '#c9ffc4',
		'200': '#98ff90',
		'300': '#56ff50',
		'400': '#00ff00',
		'500': '#00e606',
		'600': '#00b809',
		'700': '#008b07',
		'800': '#076d0d',
		'900': '#0b5c11',
		'950': '#003406'
	},
	red: {
		'50': '#fff0f0',
		'100': '#ffdddd',
		'200': '#ffc0c0',
		'300': '#ff9494',
		'400': '#ff5757',
		'500': '#ff2323',
		'600': '#ff0000',
		'700': '#d70000',
		'800': '#b10303',
		'900': '#920a0a',
		'950': '#500000'
	}
}

export type LindoTheme = {
	title: string
	titleSecondary: string
	text: string
	textSecondary: string
	textTertiary: string
	background: string
	backgroundSecondary: string
	backgroundTertiary: string
	border: string
	separator: string
	error: string
} & Theme['colors']

export const ThemeColor: Record<'light' | 'dark', LindoTheme> = {
	light: {
		title: Color.black[950],
		titleSecondary: Color.black[900],
		text: Color.black[900],
		textSecondary: Color.black[800],
		textTertiary: Color.black[700],
		background: Color.white[50],
		backgroundSecondary: Color.white[100],
		backgroundTertiary: Color.white[200],
		border: Color.black[100],
		separator: Color.black[100],
		card: Color.white[600],
		notification: Color.daintree[800],
		primary: Color.daintree[950],
		error: Color.red[400]
	},
	dark: {
		title: Color.white[100],
		titleSecondary: Color.white[200],
		text: Color.white[200],
		textSecondary: Color.white[300],
		textTertiary: Color.white[400],
		background: Color.black[900],
		backgroundSecondary: Color.black[800],
		backgroundTertiary: Color.black[700],
		border: Color.white[800],
		separator: Color.white[900],
		card: Color.black[400],
		notification: Color.daintree[800],
		primary: Color.daintree[950],
		error: Color.red[400]
	}
}

export const theme: Record<'light' | 'dark', Theme> = {
	light: {
		dark: false,
		colors: ThemeColor.light
	},
	dark: {
		dark: true,
		colors: ThemeColor.dark
	}
}
