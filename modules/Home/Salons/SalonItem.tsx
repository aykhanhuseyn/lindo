import { View, Image, Text, Separator } from '@lindo/components'
import { Color } from '@lindo/constants'
import { useThemeColor } from '@lindo/hooks'
import type { BeautySalonView } from '@lindo/types'
import { MapPin } from '@nandorojo/heroicons/24/outline'
import type { FC } from 'react'
import { StyleSheet } from 'react-native'

type SalonItemProps = {
	salon: BeautySalonView
}

export const SalonItem: FC<SalonItemProps> = ({ salon }) => {
	const color = useThemeColor({}, 'textTertiary')

	return (
		<View style={styles.container}>
			<Image source={{ uri: salon.image }} style={styles.image} />
			<View style={styles.header}>
				<Text numberOfLines={1} style={styles.title} color="textSecondary" ellipsizeMode="tail">
					{salon.name}
				</Text>
				<Text style={styles.distance} color="textTertiary">
					{salon.distance}
					{salon.distanceUnit}
				</Text>
			</View>
			<Separator bg={Color.black[100]} mV={4} />
			<View style={styles.address}>
				<MapPin color={color} width={14} height={14} />
				<Text
					style={styles.addressText}
					color="textTertiary"
					numberOfLines={1}
					ellipsizeMode="tail">
					{salon.address}
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 148
	},
	image: {
		borderRadius: 8,
		width: '100%',
		height: 112,
		marginBottom: 12
	},
	header: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	title: {
		maxWidth: '80%',
		fontSize: 12,
		fontWeight: '600'
	},
	distance: {
		fontSize: 8,
		fontWeight: '400'
	},
	address: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 4
	},
	addressText: {
		fontSize: 10,
		fontWeight: '400',
		flex: 1
	}
})
