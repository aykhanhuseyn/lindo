import type { Theme } from '@react-navigation/native'

export const Color = {
	black: {
		'50': '#e0e0e0', // very light black (almost gray)
		'100': 'rgba(46, 46, 46, 0.12)',
		'200': 'rgba(0, 0, 0, 0.37)',
		'300': 'rgba(0, 0, 0, 0.67)',
		'400': 'rgba(0, 0, 0, 0.87)',
		'500': 'rgba(0, 0, 0, 1)', // pure black
		'600': '#000000',
		'700': '#000000',
		'800': '#000000',
		'900': '#000000'
	},
	white: {
		'50': '#ffffff', // pure white
		'100': 'rgba(255, 255, 255, 0.12)',
		'200': '#ffffff',
		'300': '#ffffff',
		'400': '#ffffff',
		'500': '#ffffff',
		'600': 'rgba(255, 255, 255, 0.87)',
		'700': 'rgba(255, 255, 255, 0.67)',
		'800': 'rgba(255, 255, 255, 0.37)',
		'900': '#999999' // very light gray (almost white)
	},
	cyan: {
		'50': '#BACDD8',
		'100': '#9BB6C0',
		'200': '#7D9BA8',
		'300': '#5C8292',
		'400': '#457183',
		'500': '#295E71',
		'600': '#1C4F61',
		'700': '#0D3C4B',
		'800': '#002A37',
		'900': '#001821'
	},
	red: {
		'50': '#FF6262',
		'100': '#FF4E4E',
		'200': '#FF3B3B',
		'300': '#FF2727',
		'400': '#FF1414',
		'500': '#FF0000',
		'600': '#EB0000',
		'700': '#D80000',
		'800': '#C40000',
		'900': '#B10000'
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
		title: Color.black[500],
		titleSecondary: Color.black[400],
		text: Color.black[400],
		textSecondary: Color.black[300],
		textTertiary: Color.black[200],
		background: Color.white[600],
		backgroundSecondary: Color.white[700],
		backgroundTertiary: Color.white[800],
		border: Color.black[100],
		separator: Color.black[100],
		card: Color.white[600],
		notification: Color.cyan[500],
		primary: Color.cyan[800],
		error: Color.red[600]
	},
	dark: {
		title: Color.white[600],
		titleSecondary: Color.white[700],
		text: Color.white[700],
		textSecondary: Color.white[800],
		textTertiary: Color.white[900],
		background: Color.black[500],
		backgroundSecondary: Color.black[400],
		backgroundTertiary: Color.black[300],
		border: Color.white[800],
		separator: Color.white[900],
		card: Color.black[400],
		notification: Color.cyan[400],
		primary: Color.cyan[700],
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
