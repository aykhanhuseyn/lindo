import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { ThemeColor } from '@lindo/constants';
import { TabBar } from '@lindo/components';

export default function TabLayout() {
	const colorScheme = useColorScheme() ?? 'light';
	const colors = ThemeColor[colorScheme];

	return (
		<Tabs
			screenOptions={{ lazy: true }}
			tabBar={(props) => <TabBar {...props} />}
		>
			<Tabs.Screen name='index' options={{ title: 'Home', headerShown: false }} />
			<Tabs.Screen
				name='appointments'
				options={{
					title: 'Appointments',
					headerRight: () => (
						<Link href='/modal' asChild>
							<Pressable>
								{({ pressed }) => (
									<AntDesign
										name='infocirlce'
										size={24}
										color={colors.text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen name='favorites' options={{ title: 'Favorites' }} />
			<Tabs.Screen name='profile' options={{ title: 'Profile' }} />
		</Tabs>
	);
}
