import { Stack } from 'expo-router'

export const Layout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="login"
				options={{
					headerShown: false
					// headerTitle: 'Modal'
				}}
			/>
			<Stack.Screen
				name="register"
				options={{ headerShown: false, presentation: 'fullScreenModal' }}
			/>
		</Stack>
	)
}
