import { StyleSheet } from 'react-native';
import { EditScreenInfo, Text, View } from '@lindo/components';

export default function Login() {
	return (
		<View style={styles.container}>
			<Text color='title' style={styles.title}>
				Lindaya xoş gəldin!
			</Text>
			<View
				style={styles.separator}
				lightColor='#eee'
				darkColor='rgba(255,255,255,0.1)'
			/>
			<EditScreenInfo path='app/(auth)/login.tsx' />
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
		fontSize: 32,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
