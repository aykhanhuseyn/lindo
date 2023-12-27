import { LindoTheme } from '@lindo/constants'
import { useThemeColor } from '@lindo/hooks'
import type { ThemeProps } from '@lindo/types'
import { Text as DefaultText, type TextProps as DefaultTextProps } from 'react-native'

export type TextMode = 'display' | 'display2' | 'text' | 'text2' | 'text3' | 'mono'

export interface TextProps extends ThemeProps, DefaultTextProps {
	mode?: TextMode
	color?: keyof LindoTheme
}

const modeToFontFamily = {
	display: 'SFProDisplay',
	text: 'SFProText',
	mono: 'SFProMono'
} as const

const modeToStyles: Record<TextMode, DefaultTextProps['style']> = {
	display: {
		fontSize: 20,
		fontWeight: '700',
		fontFamily: modeToFontFamily.display
	},
	display2: {
		fontSize: 16,
		fontWeight: '700',
		fontFamily: modeToFontFamily.display
	},
	text: {
		fontSize: 16,
		fontWeight: '500',
		fontFamily: modeToFontFamily.text
	},
	text2: {
		fontSize: 12,
		fontWeight: '400',
		fontFamily: modeToFontFamily.text
	},
	text3: {
		fontSize: 12,
		fontWeight: '500',
		fontFamily: modeToFontFamily.text
	},
	mono: {
		fontSize: 16,
		fontWeight: '400',
		fontFamily: modeToFontFamily.mono
	}
}

const modeToColor: Record<TextMode, keyof LindoTheme> = {
	display: 'title',
	display2: 'titleSecondary',
	text: 'text',
	text2: 'textSecondary',
	text3: 'textTertiary',
	mono: 'text'
}

export function Text(props: TextProps) {
	const { style, lightColor, darkColor, color: colorKey, mode = 'text', ...otherProps } = props

	const colorProp = colorKey ?? modeToColor[mode]
	const color = useThemeColor({ light: lightColor, dark: darkColor }, colorProp)

	const modeStyles = modeToStyles[mode]

	return <DefaultText style={[{ color }, modeStyles, style]} {...otherProps} />
}
