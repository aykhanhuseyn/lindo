import { StyleSheet } from 'react-native';
import {
	Button,
	Text,
	View,
	FlatList,
	RefreshControl,
} from '@lindo/components';
import { Link } from 'expo-router';
import { salons } from './data';
import { SalonItem } from './SalonItem';
import { useCallback, useState } from 'react';

export const SalonsList = () => {
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

	return (
		<View>
			<View style={styles.header}>
				<Text mode='display'>Yaxınındakı gözəllik salonları</Text>
				<Link href='/(tabs)/appointments' asChild>
					<Button mode='link' title='Daha çox' />
				</Link>
			</View>
			<FlatList
				contentContainerStyle={{ gap: 20 }}
				data={salons}
				horizontal
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				renderItem={({ item, index }) => <SalonItem key={index} salon={item} />}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		marginBottom: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
});
