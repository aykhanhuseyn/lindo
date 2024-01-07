import { LindoTheme } from '@lindo/constants'
import { useThemeColor } from '@lindo/hooks'
import type { ThemeProps } from '@lindo/types'
import { View as NativeView, type ViewProps as NativeViewProps } from 'react-native'
import Animated, { type AnimateProps } from 'react-native-reanimated'

type ViewMode = 'primary' | 'secondary' | 'third'

interface ViewPropsBase extends ThemeProps, NativeViewProps {
	mode?: ViewMode
	color?: keyof LindoTheme
}

export type ViewProps = ViewPropsBase &
	(
		| {
				animated?: false
		  }
		| ({
				animated: true
		  } & AnimateProps<ViewPropsBase>)
	)

const modeToKey: Record<ViewMode, keyof LindoTheme> = {
	primary: 'background',
	secondary: 'backgroundSecondary',
	third: 'backgroundTertiary'
}

export function View({ animated, mode, color: colorKey, ...props }: ViewProps) {
	const { style, lightColor, darkColor, ...otherProps } = props

	const key = colorKey ?? modeToKey[mode ?? 'primary']
	const bg = useThemeColor({ light: lightColor, dark: darkColor }, key)

	if (animated) {
		return (
			<Animated.View
				style={[{ backgroundColor: mode ? bg : 'transparent' }, style]}
				{...otherProps}
			/>
		)
	}

	return (
		<NativeView style={[{ backgroundColor: mode ? bg : 'transparent' }, style]} {...otherProps} />
	)
}
