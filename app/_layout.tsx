import AntDesign from '@expo/vector-icons/AntDesign'
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
		SFProDisplay: require('../assets/fonts/SF-Pro-Display-Regular.otf'),
		SFProText: require('../assets/fonts/SF-Pro-Text-Regular.otf'),
		SFProMono: require('../assets/fonts/SF-Mono-Regular.otf'),
		...AntDesign.font
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

	return <RootLayoutNav />
}

function RootLayoutNav() {
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
