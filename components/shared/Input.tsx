import type { FC, ReactNode } from 'react';
import {
	View,
	Text,
	TextInput,
	type TextInputProps,
	StyleSheet,
} from 'react-native';

interface InputProps extends TextInputProps {
	label?: ReactNode;
	helper?: ReactNode;
	error?: ReactNode;
}

export const Input: FC<InputProps> = ({ label, error, helper, ...props }) => {
	return (
		<View>
			{typeof label === 'string' ? (
				<Text style={styles.label}>{label}</Text>
			) : (
				label
			)}
			<TextInput {...props} />
			{!error &&
				(typeof helper === 'string' ? (
					<Text style={styles.helper}>{helper}</Text>
				) : (
					helper
				))}
			{typeof error === 'string' ? (
				<Text style={styles.error}>{error}</Text>
			) : (
				error
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	label: {},
	input: {},
	helper: {},
	error: {},
});
