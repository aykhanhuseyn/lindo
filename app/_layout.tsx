import {
	SpaceGrotesk_300Light,
	SpaceGrotesk_400Regular,
	SpaceGrotesk_500Medium,
	SpaceGrotesk_600SemiBold,
	SpaceGrotesk_700Bold
} from '@expo-google-fonts/space-grotesk'
import { theme } from '@lindo/constants'
import { ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'

export const unstable_settings = {
	initialRouteName: '(tabs)'
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceGrotesk_300Light,
		SpaceGrotesk_400Regular,
		SpaceGrotesk_500Medium,
		SpaceGrotesk_600SemiBold,
		SpaceGrotesk_700Bold
	})

	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return <RootNavigation />
}

function RootNavigation() {
	const colorScheme = useColorScheme()

	return (
		<ThemeProvider value={colorScheme === 'dark' ? theme.dark : theme.light}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
				<Stack.Screen name="modal" options={{ presentation: 'modal', headerTitle: 'Modal' }} />
			</Stack>
		</ThemeProvider>
	)
}
