import { FlatList, View, Text } from '@lindo/components'
import { StyleSheet } from 'react-native'

import { ServiceItem } from './ServiceItem'
import { serviceList } from './data'

export const ServiceList = () => {
	return (
		<View>
			<Text mode="display" style={styles.title}>
				Ən çox axtarılan xidmətlər
			</Text>
			<FlatList
				data={serviceList}
				horizontal
				alwaysBounceHorizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ gap: 4 }}
				snapToStart
				renderItem={({ item, index }) => <ServiceItem key={index} service={item} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		marginBottom: 24
	}
})
