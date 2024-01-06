import { Color } from '@lindo/constants'
import * as HeroIcon from '@nandorojo/heroicons/24/outline'
import {
	useEffect,
	forwardRef,
	type FC,
	type ReactElement,
	type ForwardedRef,
	type CSSProperties
} from 'react'
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
								backgroundColor: mode === 'filled' ? Color.daintree[950] : 'transparent',
								borderColor: mode === 'outline' ? Color.daintree[950] : 'transparent',
								borderWidth: mode === 'outline' ? 1 : 0
							},
							mode === 'link' && styles.linkButton,
							isDisabled && {
								backgroundColor: mode === 'filled' ? Color.daintree[900] : 'transparent',
								borderColor: mode === 'outline' ? Color.daintree[900] : 'transparent'
							},
							pressed && {
								backgroundColor: mode === 'filled' ? Color.daintree[900] : 'transparent',
								borderColor: mode === 'outline' ? Color.daintree[900] : 'transparent'
							},
							hovered && {
								backgroundColor: mode === 'filled' ? Color.daintree[900] : 'transparent',
								borderColor: mode === 'outline' ? Color.daintree[900] : 'transparent'
							},
							style
						]}>
						{!isLoading ? (
							!isIconButton ? (
								<Text
									style={[
										{
											color: mode === 'filled' ? Color.white[50] : Color.daintree[950]
										},
										mode === 'link' && styles.linkButtonText,
										isDisabled && {
											color: mode === 'filled' ? Color.white[100] : Color.daintree[800]
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
								<HeroIcon.ArrowPath
									color={
										mode === 'filled'
											? Color.white[100]
											: isDisabled
												? Color.daintree[800]
												: Color.daintree[950]
									}
									style={textStyle}
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
	name: keyof typeof HeroIcon
	size?: number
} & Pick<ButtonProps, 'mode' | 'onPress' | 'block' | 'isDisabled' | 'style'>

export const IconButton: FC<IconButtonProps> = ({ name, mode = 'ghost', size = 24, ...props }) => {
	const Icon = HeroIcon[name]
	return <Button title={<Icon fontSize={size} color="black" />} mode={mode} {...props} />
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
		paddingHorizontal: 6,
		paddingVertical: 1,
		backgroundColor: Color.white[100],
		borderRadius: 12
	},
	linkButtonText: {
		color: Color.daintree[950],
		fontSize: 10,
		fontWeight: '400'
	}
})
