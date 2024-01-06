import { View, IconButton } from '@lindo/components'
import { StyleSheet } from 'react-native'

import { NameCard } from './NameCard'

export const Header = () => {
	return (
		<View style={styles.header} mode="primary">
			<NameCard />

			<View style={styles.action}>
				<IconButton name="MagnifyingGlass" onPress={() => console.log('press')} />
				<IconButton name="Bell" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 12
	},
	action: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16
	}
})
