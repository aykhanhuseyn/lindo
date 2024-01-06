import { Stack } from 'expo-router'

export const unstable_settings = {
	initialRouteName: 'login'
}

export const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="login" options={{ headerShown: false, title: 'Login' }} />
			<Stack.Screen name="register" options={{ headerShown: false, title: 'Register' }} />
		</Stack>
	)
}
