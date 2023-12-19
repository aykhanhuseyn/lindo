import type { FC } from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Image, Text, Separator } from '@lindo/components';
import { useThemeColor } from '@lindo/hooks';
import type { BeautySalonView } from '@lindo/types';
import { Color } from '@lindo/constants';

type SalonItemProps = {
	salon: BeautySalonView;
};

export const SalonItem: FC<SalonItemProps> = ({ salon }) => {
	const color = useThemeColor({}, 'separator');

	return (
		<View style={styles.container}>
			<Image source={{ uri: salon.image }} style={styles.image} />
			<View style={styles.header}>
				<Text
					numberOfLines={1}
					style={styles.title}
					color='textSecondary'
					ellipsizeMode='tail'
				>
					{salon.name}
				</Text>
				<Text style={styles.distance} color='textTertiary'>
					{salon.distance}
					{salon.distanceUnit}
				</Text>
			</View>
			<Separator bg={Color.black[100]} mV={4} />
			<View style={styles.address}>
				<AntDesign name='pushpino' size={12} color={color} />
				<Text
					style={styles.addressText}
					color='textTertiary'
					numberOfLines={1}
					ellipsizeMode='tail'
				>
					{salon.address}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 148,
	},
	image: {
		borderRadius: 8,
		width: '100%',
		height: 112,
		marginBottom: 12,
	},
	header: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	title: {
		maxWidth: '80%',
		fontSize: 12,
		fontWeight: '600',
	},
	distance: {
		fontSize: 8,
		fontWeight: '400',
	},
	address: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 4,
	},
	addressText: {
		fontSize: 10,
		fontWeight: '400',
		flex: 1,
	},
});
