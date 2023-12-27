import { View, type ViewProps, Text, Image } from '@lindo/components'
import type { FC } from 'react'
import { StyleSheet } from 'react-native'

export interface NameCardProps extends ViewProps {}

export const NameCard: FC<NameCardProps> = ({ style, ...props }) => {
	return (
		<View style={[styles.container, style]} {...props}>
			<View>
				<Image
					source={{
						uri: 'https://mir-s3-cdn-cf.behance.net/user/230/ba04851218819315.62a073b499494.jpg'
					}}
					style={styles.avatar}
				/>
			</View>
			<View>
				<Text mode="display">Salam, Aytac!</Text>
				<Text mode="text2">Gəncliyinin qayğısına qal 🌱</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 8
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20
	}
})
