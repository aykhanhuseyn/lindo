import { useState, useCallback } from 'react';
import { FlatList, Container, RefreshControl } from '@lindo/components';
import {
	Header,
	ServiceList,
	SalonsList,
	StylistsList,
} from '@lindo/modules/Home';

export default function Home() {
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	}, []);

	return (
		<Container>
			<FlatList
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				data={[Header, ServiceList, SalonsList, StylistsList]}
				renderItem={({ item: Component }) => <Component />}
				style={{ paddingBottom: 20 }}
				keyExtractor={(item) => item.name}
				contentContainerStyle={{ gap: 40 }}
				showsVerticalScrollIndicator={false}
				stickyHeaderIndices={[0]}
			/>
		</Container>
	);
}
