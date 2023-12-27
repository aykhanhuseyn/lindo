import AntDesign from '@expo/vector-icons/AntDesign'
import { Color } from '@lindo/constants'
import { useEffect, forwardRef, type FC, type ReactElement, type ForwardedRef } from 'react'
import {
	Animated,
	Easing,
	Pressable,
	StyleSheet,
	View,
	type StyleProp,
	type TextProps,
	type ViewStyle,
	type GestureResponderEvent
} from 'react-native'

import { Text } from './Text'

export interface ButtonProps {
	title: string | ReactElement
	mode?: 'filled' | 'outline' | 'ghost' | 'link'
	onPress?: (event: GestureResponderEvent) => void
	block?: boolean
	style?: StyleProp<ViewStyle>
	textStyle?: TextProps['style']
	isDisabled?: boolean
	isLoading?: boolean
}

export const Button = forwardRef(
	(
		{
			block,
			mode = 'filled',
			title,
			onPress,
			style,
			textStyle,
			isDisabled = false,
			isLoading = false
		}: ButtonProps,
		ref: ForwardedRef<View>
	) => {
		const spinValue = new Animated.Value(0)
		const isIconButton = typeof title === 'object'

		useEffect(() => {
			if (isLoading) {
				Animated.loop(
					Animated.timing(spinValue, {
						toValue: 1,
						duration: 1500,
						useNativeDriver: true,
						easing: Easing.linear
					})
				).start()
			} else {
				spinValue.stopAnimation()
				spinValue.setValue(0)
			}
			return () => {
				spinValue.stopAnimation()
				spinValue.setValue(0)
			}
		}, [isLoading])

		const spin = spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg']
		})

		return (
			<Pressable
				ref={ref}
				disabled={isLoading || isDisabled}
				onPress={(event: GestureResponderEvent) => onPress?.(event)}
				style={{
					width: block ? '100%' : 'auto'
				}}>
				{({ pressed, hovered }) => (
					<View
						style={[
							styles.button,
							isIconButton && styles.iconButtonSize,
							!isIconButton && mode !== 'link' && styles.buttonSize,
							{
								backgroundColor: mode === 'filled' ? Color.cyan[800] : 'transparent',
								borderColor: mode === 'outline' ? Color.cyan[800] : 'transparent',
								borderWidth: mode === 'outline' ? 1 : 0
							},
							mode === 'link' && styles.linkButton,
							isDisabled && {
								backgroundColor: mode === 'filled' ? Color.cyan[700] : 'transparent',
								borderColor: mode === 'outline' ? Color.cyan[700] : 'transparent'
							},
							pressed && {
								backgroundColor: mode === 'filled' ? Color.cyan[700] : 'transparent',
								borderColor: mode === 'outline' ? Color.cyan[700] : 'transparent'
							},
							hovered && {
								backgroundColor: mode === 'filled' ? Color.cyan[700] : 'transparent',
								borderColor: mode === 'outline' ? Color.cyan[700] : 'transparent'
							},
							style
						]}>
						{!isLoading ? (
							!isIconButton ? (
								<Text
									style={[
										{
											color: mode === 'filled' ? Color.white[400] : Color.cyan[800]
										},
										mode === 'link' && styles.linkButtonText,
										isDisabled && {
											color: mode === 'filled' ? Color.white[100] : Color.cyan[200]
										},
										textStyle
									]}>
									{title}
								</Text>
							) : (
								title
							)
						) : (
							<Animated.View style={isLoading && { transform: [{ rotate: spin }] }}>
								<AntDesign
									name="loading1"
									style={[
										{
											color: mode === 'filled' ? Color.white[100] : Color.cyan[800]
										},
										isDisabled && {
											color: mode === 'filled' ? Color.white[100] : Color.cyan[200]
										},
										textStyle
									]}
								/>
							</Animated.View>
						)}
					</View>
				)}
			</Pressable>
		)
	}
)

export type IconButtonProps = {
	name: keyof typeof AntDesign.glyphMap
	size?: number
} & Pick<ButtonProps, 'mode' | 'onPress' | 'block' | 'isDisabled' | 'style'>

export const IconButton: FC<IconButtonProps> = ({ name, mode = 'ghost', size = 24, ...props }) => {
	return (
		<Button title={<AntDesign name={name} size={size} color="black" />} mode={mode} {...props} />
	)
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		gap: 10,
		justifyContent: 'center'
	},
	buttonSize: {
		minHeight: 48,
		borderRadius: 24,
		paddingHorizontal: 24,
		paddingVertical: 12
	},
	iconButtonSize: {
		minHeight: 40,
		borderRadius: 20,
		paddingHorizontal: 4,
		paddingVertical: 4
	},
	linkButton: {
		paddingHorizontal: 4,
		paddingVertical: 2,
		backgroundColor: Color.white[600],
		borderRadius: 12
	},
	linkButtonText: {
		color: Color.cyan[800],
		fontSize: 10,
		fontWeight: '400'
	}
})
