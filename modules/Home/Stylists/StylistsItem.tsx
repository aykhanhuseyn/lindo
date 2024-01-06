import { View, Image, Text } from '@lindo/components'
import { Color } from '@lindo/constants'
import { useThemeColor } from '@lindo/hooks'
import type { StylistView } from '@lindo/types'
import { Star } from '@nandorojo/heroicons/24/outline'
import type { FC } from 'react'
import { StyleSheet } from 'react-native'

type StylistsItemProps = {
	stylist: StylistView
}

export const StylistsItem: FC<StylistsItemProps> = ({ stylist }) => {
	const color = useThemeColor({}, 'textTertiary')
	const borderColor = useThemeColor({}, 'border')
	const backgroundColor = useThemeColor({}, 'backgroundSecondary')

	return (
		<View style={[styles.card, { borderColor, backgroundColor }]} mode="secondary">
			<Image style={styles.image} source={{ uri: stylist.image }} />
			<View>
				<Text style={styles.title} color="text">
					{stylist.name}
				</Text>
				<Text style={styles.description} color="textSecondary">
					{stylist.profession} | {stylist.entityName}
				</Text>
				<View style={styles.rating}>
					<Star color={color} width={16} height={16} />
					<Text style={styles.ratingText} color="textTertiary">
						{stylist.rating} ratings | {stylist.ratingCount} reviews
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 12,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 8,
		gap: 12,
		flexDirection: 'row'
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 8
	},
	title: {
		fontSize: 14,
		fontWeight: '700',
		marginBottom: 4
	},
	description: {
		fontSize: 12,
		marginBottom: 12
	},
	rating: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8
	},
	ratingText: {
		fontSize: 10
	}
})
