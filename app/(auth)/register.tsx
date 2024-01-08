import { Text, FlatList, Container } from '@lindo/components'
import { RegisterForm } from '@lindo/modules/Auth'
import { useCallback, useState } from 'react'
import { RefreshControl, StyleSheet } from 'react-native'

export default function Register() {
	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		setTimeout(() => {
			setRefreshing(false)
		}, 2000)
	}, [])

	return (
		<Container>
			<FlatList
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
				data={[
					() => (
						<Text color="title" style={styles.title}>
							Hesab yarat
						</Text>
					),
					() => <RegisterForm />
				]}
				renderItem={({ item: Component, index }) => <Component key={index} />}
				style={{ paddingBottom: 20, height: '100%' }}
				keyboardDismissMode="interactive"
				keyExtractor={item => item.name}
				contentContainerStyle={{ gap: 40 }}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapper: {
		width: '100%',
		height: '100%',
		gap: 30
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold'
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%'
	}
})
