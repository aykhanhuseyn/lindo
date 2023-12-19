import { StyleSheet } from 'react-native';
import { EditScreenInfo, Text, View } from '@lindo/components';

export default function Register() {
	return (
		<View style={styles.container}>
			<Text mode='display' style={styles.title}>
				Register
			</Text>
			<View
				style={styles.separator}
				lightColor='#eee'
				darkColor='rgba(255,255,255,0.1)'
			/>
			<EditScreenInfo path='app/(auth)/register.tsx' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
