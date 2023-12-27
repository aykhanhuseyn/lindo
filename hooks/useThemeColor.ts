import { useColorScheme } from 'react-native'

import { ThemeColor } from '../constants'

interface Props {
	light?: string
	dark?: string
}

type ColorName = keyof typeof ThemeColor.light & keyof typeof ThemeColor.dark

export function useThemeColor(props: Props, colorName: ColorName): string {
	const theme = useColorScheme() ?? 'light'
	const colorFromProps = props[theme]

	if (colorFromProps) {
		return colorFromProps
	} else {
		return ThemeColor[theme][colorName]
	}
}
