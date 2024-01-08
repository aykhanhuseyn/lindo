import { useThemeColor } from '@lindo/hooks'
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics'
import type { FC, ReactNode } from 'react'
import { View, Text, StyleSheet, type TextInputProps } from 'react-native'
import PhoneNumberInput, { type ReactNativePhoneInputProps } from 'react-native-phone-input'

interface InputProps extends ReactNativePhoneInputProps {
	label?: ReactNode
	value?: string
	error?: ReactNode
	info?: ReactNode
	placeholder?: TextInputProps['placeholder']
	onFocus?: TextInputProps['onFocus']
}

export const InputPhone: FC<InputProps> = ({
	label,
	value,
	error,
	placeholder,
	onFocus,
	textProps,
	...props
}) => {
	const text = useThemeColor({}, 'text')
	const textSecondary = useThemeColor({}, 'textSecondary')
	const errorColor = useThemeColor({}, 'error')

	return (
		<View style={styles.wrapper}>
			{typeof label === 'string' ? <Text style={styles.label}>{label}</Text> : label}

			<View
				style={[
					styles.inputWrapper,
					error ? { borderWidth: 1, borderColor: errorColor } : { borderWidth: 0 }
				]}>
				<PhoneNumberInput
					accessibilityLabel="Phone number"
					autoFormat
					initialCountry="az"
					flagStyle={styles.flagStyle}
					textStyle={[styles.input, { color: error ? errorColor : text }]}
					textProps={{
						placeholderTextColor: textSecondary,
						...textProps,
						placeholder,
						onFocus: event => {
							impactAsync(ImpactFeedbackStyle.Medium)
							onFocus?.(event)
							textProps?.onFocus?.(event)
						},
						value
					}}
					{...props}
				/>
			</View>

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
	inputWrapper: {
		backgroundColor: '#F5F5F5',
		position: 'relative',
		borderRadius: 32,
		padding: 12
	},
	label: {
		fontSize: 12,
		marginBottom: 8,
		marginLeft: 12
	},
	input: {
		fontSize: 12
	},
	flagStyle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderWidth: 1,
		objectFit: 'cover'
	},
	error: {
		fontSize: 10,
		marginLeft: 12
	}
})
