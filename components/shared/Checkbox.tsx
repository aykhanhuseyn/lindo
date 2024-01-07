import { Color } from '@lindo/constants'
import { useThemeColor } from '@lindo/hooks'
import { Check } from '@nandorojo/heroicons/24/outline'
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics'
import { useState, useEffect, type FC, type ReactNode } from 'react'
import { View, Text, ViewProps, StyleSheet, TouchableOpacity } from 'react-native'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'

interface CheckboxProps extends ViewProps {
	label?: ReactNode
	helper?: ReactNode
	error?: ReactNode
	onChange?: (value: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = ({
	label,
	error,
	helper,
	style,
	onChange,
	...props
}) => {
	const opacity = useSharedValue(0)
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		opacity.value = withTiming(checked ? 1 : 0, { duration: 100 })
		impactAsync(ImpactFeedbackStyle.Medium)
		onChange && onChange(checked)
	}, [checked])

	const text = useThemeColor({}, 'text')
	const border = useThemeColor({}, 'border')
	const errorColor = useThemeColor({}, 'error')
	const textSecondary = useThemeColor({}, 'textSecondary')

	return (
		<View style={[styles.wrapper, style]} {...props}>
			<TouchableOpacity
				onPress={() => {
					setChecked(check => !check)
				}}>
				<View style={styles.checkboxWrapper}>
					<View style={[styles.checkboxBox, { borderColor: error ? errorColor : border }]}>
						<Animated.View
							style={[
								{
									transform: [
										{
											translateX: -9
										},
										{
											translateY: -9
										}
									],
									opacity
								}
								// { opacity }
							]}>
							<Check
								width={18}
								height={18}
								color={error ? errorColor : textSecondary}
								style={styles.checkboxCheck}
							/>
						</Animated.View>
					</View>

					{typeof label === 'string' ? (
						<Text style={[styles.label, { color: text }]}>{label}</Text>
					) : (
						label
					)}
				</View>
			</TouchableOpacity>

			{!error &&
				(typeof helper === 'string' ? (
					<Text style={[styles.helper, { color: textSecondary }]}>{helper}</Text>
				) : (
					helper
				))}

			{typeof error === 'string' ? (
				<Text style={[styles.error, { color: errorColor }]}>{error}</Text>
			) : (
				error
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {},
	checkboxWrapper: {
		position: 'relative',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	checkboxBox: {
		width: 20,
		height: 20,
		padding: 2,
		borderRadius: 4,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: Color.daintree[800],
		position: 'relative'
	},
	checkboxCheck: {
		position: 'absolute',
		borderRadius: 8
	},
	label: {
		fontSize: 12,
		marginLeft: 12
	},
	helper: {
		fontSize: 10,
		marginLeft: 12
	},
	error: {
		fontSize: 10,
		marginLeft: 12
	}
})
