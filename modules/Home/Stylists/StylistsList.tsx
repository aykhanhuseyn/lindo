import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from '@lindo/components';
import { StylistsItem } from './StylistsItem';
import { stylists } from './data';

export const StylistsList = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text mode='display'>Peşəkar stilistlər</Text>
				<Link href='/(tabs)/favorites' asChild>
					<Button mode='link' title='Daha çox' />
				</Link>
			</View>

			<View style={styles.list}>
				{stylists.map((item) => (
					<StylistsItem key={item.id} stylist={item} />
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingBottom: 80,
	},
	header: {
		marginBottom: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	list: {
		gap: 12,
	},
});
