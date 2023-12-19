import type { FC } from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { View, Image, Text } from '@lindo/components';
import type { StylistView } from '@lindo/types';
import { Color } from '@lindo/constants';
import { useThemeColor } from '@lindo/hooks';

type StylistsItemProps = {
	stylist: StylistView;
};

export const StylistsItem: FC<StylistsItemProps> = ({ stylist }) => {
	const borderColor = useThemeColor({}, 'border');
	return (
		<View style={[styles.card, { borderColor }]} mode='secondary'>
			<Image style={styles.image} source={{ uri: stylist.image }} />
			<View>
				<Text style={styles.title} color='text'>
					{stylist.name}
				</Text>
				<Text style={styles.description} color='textSecondary'>
					{stylist.profession} | {stylist.entityName}
				</Text>
				<View style={styles.rating}>
					<AntDesign name='staro' size={12} color={Color.black[300]} />
					<Text style={styles.ratingText} color='textTertiary'>
						{stylist.rating} ratings | {stylist.ratingCount} reviews
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#F9F8F7',
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 8,
		gap: 12,
		flexDirection: 'row',
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 8,
	},
	title: {
		fontSize: 14,
		fontWeight: '700',
		marginBottom: 4,
	},
	description: {
		fontSize: 12,
		marginBottom: 12,
	},
	rating: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	ratingText: {
		fontSize: 10,
	},
});
