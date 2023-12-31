import { Color } from '@lindo/constants'
import { Home, Calendar, Heart, User, ExclamationTriangle } from '@nandorojo/heroicons/24/outline'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { type FC, useEffect } from 'react'
import { Animated, Easing, StyleSheet, useAnimatedValue } from 'react-native'

import { TouchableOpacity, Text } from '../shared'

interface TabButtonProps extends BottomTabBarProps {
	route: Route
	index: number
}

export const TabButton: FC<TabButtonProps> = ({ state, route, index, descriptors, navigation }) => {
	const { options } = descriptors[route.key]
	const Icon = getIcon(route.name as TabRoutes)
	const isFocused = state.index === index
	const opacity = useAnimatedValue(0)
	const scale = useAnimatedValue(0)
	const translateY = useAnimatedValue(0)

	const onPress = () => {
		const event = navigation.emit({
			type: 'tabPress',
			target: route.key,
			canPreventDefault: true
		})

		if (!isFocused && !event.defaultPrevented) {
			navigation.navigate(route.name)
		}
	}

	useEffect(() => {
		if (isFocused) {
			Animated.timing(opacity, {
				toValue: 1,
				duration: 200,
				useNativeDriver: true,
				easing: Easing.ease
			}).start()
			Animated.timing(scale, {
				toValue: 1.2,
				duration: 200,
				useNativeDriver: true,
				easing: Easing.ease
			}).start()
			Animated.timing(translateY, {
				toValue: -20,
				duration: 200,
				useNativeDriver: true,
				easing: Easing.bounce
			}).start()
		} else {
			Animated.timing(opacity, {
				toValue: 0,
				duration: 150,
				useNativeDriver: true,
				easing: Easing.ease
			}).start()
			Animated.timing(scale, {
				toValue: 1,
				duration: 150,
				useNativeDriver: true,
				easing: Easing.ease
			}).start()
			Animated.timing(translateY, {
				toValue: 0,
				duration: 150,
				useNativeDriver: true,
				easing: Easing.bounce
			}).start()
		}
	}, [isFocused])

	return (
		<TouchableOpacity key={options.title} onPress={onPress} style={styles.tab}>
			<Animated.View style={[styles.tabIcon, { transform: [{ scale }, { translateY }] }]}>
				<Icon color={isFocused ? '#fff' : '#ffffffb0'} fontSize={24} />
			</Animated.View>
			<Animated.View style={{ opacity, transform: [{ translateY }] }}>
				<Text style={styles.tabLabel}>{options.title}</Text>
			</Animated.View>
		</TouchableOpacity>
	)
}

type TabRoutes = 'index' | 'appointments' | 'favorites' | 'profile'
type Route = BottomTabBarProps['state']['routes'][number]

const getIcon = (label: TabRoutes) => {
	switch (label) {
		case 'index':
			return Home
		case 'appointments':
			return Calendar
		case 'favorites':
			return Heart
		case 'profile':
			return User
		default:
			return ExclamationTriangle
	}
}

const styles = StyleSheet.create({
	tab: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabIcon: {
		backgroundColor: Color.daintree[950],
		borderRadius: 40,
		padding: 16,
		paddingBottom: 8
	},
	tabLabel: {
		fontSize: 10,
		paddingTop: 5,
		color: 'white'
	}
})
