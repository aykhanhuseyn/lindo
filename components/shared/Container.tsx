import type { FC } from 'react'
import { StatusBar } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { View, type ViewProps } from './View'

interface ContainerProps {
	withBottomBar?: boolean
	withHeader?: boolean
}

export const Container: FC<ContainerProps & ViewProps> = ({
	children,
	style,
	withHeader,
	withBottomBar,
	...props
}) => {
	const insets = useSafeAreaInsets()

	return (
		<View
			style={[
				{
					paddingTop: insets.top + ((withHeader && StatusBar.currentHeight) || 0),
					paddingBottom: insets.bottom + (withBottomBar ? 50 : 0),
					paddingLeft: insets.left || 16,
					paddingRight: insets.right || 16
				},
				style
			]}
			{...props}>
			{children}
		</View>
	)
}
