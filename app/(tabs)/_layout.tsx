import { TabBar } from '@lindo/components'
import { ThemeColor } from '@lindo/constants'
import { InformationCircle } from '@nandorojo/heroicons/24/outline'
import { Link, Tabs } from 'expo-router'
import { TouchableOpacity, useColorScheme } from 'react-native'

export default function TabLayout() {
	const colorScheme = useColorScheme() ?? 'light'
	const colors = ThemeColor[colorScheme]

	return (
		<Tabs screenOptions={{ lazy: true }} tabBar={props => <TabBar {...props} />}>
			<Tabs.Screen name="index" options={{ title: 'Home', headerShown: false }} />
			<Tabs.Screen
				name="appointments"
				options={{
					title: 'Appointments',
					headerRight: () => (
						<Link href="/modal" asChild>
							<TouchableOpacity>
								<InformationCircle color={colors.text} style={{ marginRight: 15 }} />
							</TouchableOpacity>
						</Link>
					)
				}}
			/>
			<Tabs.Screen name="favorites" options={{ title: 'Favorites' }} />
			<Tabs.Screen name="profile" options={{ title: 'Profile' }} />
		</Tabs>
	)
}
