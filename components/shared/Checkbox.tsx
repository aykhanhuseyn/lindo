import { Color } from '@lindo/constants'
import { useThemeColor } from '@lindo/hooks'
import { useState, useEffect, type FC, type ReactNode } from 'react'
import { View, Text, ViewProps, StyleSheet, TouchableOpacity } from 'react-native'

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
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		onChange && onChange(checked)
	}, [checked])

	const text = useThemeColor({}, 'text')
	const border = useThemeColor({}, 'border')
	const errorColor = useThemeColor({}, 'error')
	const textSecondary = useThemeColor({}, 'textSecondary')

	return (
		<View style={[styles.wrapper, style]} {...props}>
			<TouchableOpacity onPress={() => setChecked(check => !check)}>
				<View style={styles.checkboxWrapper}>
					<View style={[styles.checkboxBox, { borderColor: error ? errorColor : border }]}>
						{checked && (
							<View
								style={[
									styles.checkboxCheck,
									{ backgroundColor: error ? errorColor : textSecondary }
								]}
							/>
						)}
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
		borderColor: Color.cyan[200],
		position: 'relative'
	},
	checkboxCheck: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		backgroundColor: Color.cyan[800],
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
