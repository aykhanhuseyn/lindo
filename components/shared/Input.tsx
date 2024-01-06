import { Color } from '@lindo/constants'
import { useThemeColor } from '@lindo/hooks'
import { Eye, EyeSlash } from '@nandorojo/heroicons/24/outline'
import { useState, type FC, type ReactNode } from 'react'
import { View, Text, TextInput, type TextInputProps, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface InputProps extends TextInputProps {
	label?: ReactNode
	helper?: ReactNode
	error?: ReactNode
	info?: ReactNode
	addonAfter?: ReactNode
}

export const Input: FC<InputProps> = ({
	label,
	error,
	helper,
	style,
	textContentType,
	addonAfter,
	secureTextEntry,
	...props
}) => {
	const [open, setOpen] = useState(false)
	const isPasswordInput = textContentType === 'password' || textContentType === 'newPassword'

	const text = useThemeColor({}, 'text')
	const errorColor = useThemeColor({}, 'error')
	const textSecondary = useThemeColor({}, 'textSecondary')

	return (
		<View style={styles.wrapper}>
			{typeof label === 'string' ? <Text style={styles.label}>{label}</Text> : label}

			<View
				style={[
					styles.inputWrapper,
					error ? { borderWidth: 1, borderColor: errorColor } : { borderWidth: 0 }
				]}>
				<TextInput
					autoCapitalize="none"
					style={[
						styles.input,
						style,
						{
							color: error ? errorColor : text,
							paddingRight: isPasswordInput || addonAfter ? 40 : undefined
						}
					]}
					textContentType={textContentType}
					secureTextEntry={isPasswordInput && !open}
					{...props}
				/>

				{isPasswordInput ? (
					<View style={styles.addonAfter}>
						<TouchableOpacity onPress={() => setOpen(o => !o)}>
							{open ? (
								<Eye color={Color.daintree[700]} fontSize={24} />
							) : (
								<EyeSlash color={Color.daintree[700]} fontSize={24} />
							)}
						</TouchableOpacity>
					</View>
				) : (
					addonAfter && <View style={styles.addonAfter}>{addonAfter}</View>
				)}
			</View>

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
	inputWrapper: {
		backgroundColor: '#F5F5F5',
		position: 'relative',
		borderRadius: 32,
		padding: 12
	},
	addonAfter: {
		position: 'absolute',
		right: 10,

		justifyContent: 'center',
		alignItems: 'center',

		width: 38,
		height: 38
	},
	label: {
		fontSize: 12,
		marginBottom: 8,
		marginLeft: 12
	},
	input: {
		fontSize: 12
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
