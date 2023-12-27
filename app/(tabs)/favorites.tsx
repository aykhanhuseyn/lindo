import { Button, EditScreenInfo, Text, View } from '@lindo/components'
import { StyleSheet } from 'react-native'

export default function Favorites() {
	return (
		<View style={styles.container}>
			<Text mode="display">Favorites</Text>
			<Text>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus neque ullam ut officia
				adipisci eaque ipsam doloribus asperiores velit nesciunt!
			</Text>
			<Button title="Filled" />
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="app/(tabs)/index.tsx" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 15
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '90%'
	}
})
