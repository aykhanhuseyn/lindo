import React from 'react';
import type { FC } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Color } from '@lindo/constants';
import { View } from '../shared';
import { TabButton } from './TabButton';

export const TabBar: FC<BottomTabBarProps> = (props) => {
	const insets = useSafeAreaInsets();
	const b = insets.bottom ?? 0;
	const h = 8;

	return (
		<View
			style={[styles.tabBar, { bottom: b - 10, left: h, right: h }]}
			lightColor='red'
			darkColor='blue'
		>
			{props.state.routes.map((route, index) => (
				<TabButton {...{ route, index, ...props }} />
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	tabBar: {
		position: 'absolute',
		bottom: 30,
		left: 10,
		right: 10,
		flexDirection: 'row',
		paddingVertical: 8,
		paddingHorizontal: 24,
		justifyContent: 'space-around',
		backgroundColor: Color.cyan[800],
		borderRadius: 32,
	},
});

export default TabBar;
