import MaskedView from '@react-native-masked-view/masked-view';
import type { FC } from 'react';
import { StyleSheet } from 'react-native';
import type { ServiceView } from '@lindo/types';
import { View, Text, Image } from '@lindo/components';
import { shapeImages, shapeStyles } from './data';

interface ServiceItemProps {
	service: ServiceView;
}

export const ServiceItem: FC<ServiceItemProps> = ({ service }) => {
	return (
		<View style={styles.item}>
			<View style={styles.shadow}>
				<MaskedView
					accessibilityIgnoresInvertColors
					accessibilityLabel={`Image of ${service.name} service`}
					accessibilityRole='image'
					maskElement={
						<View style={styles.maskedView} accessible={false}>
							<Image
								source={shapeImages[service.imageOrientation]}
								style={[
									shapeStyles[service.imageOrientation],
									styles.maskImage,
									styles.photo,
								]}
							/>
						</View>
					}
				>
					<Image
						accessible={false}
						source={{ uri: service.image }}
						style={styles.photo}
					/>
				</MaskedView>
			</View>
			<Text mode='text' style={styles.title}>
				{service.name}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		marginHorizontal: 10,
	},
	maskedView: {
		marginTop: 'auto',
		backgroundColor: 'transparent',
	},
	maskImage: {
		alignSelf: 'center',
		objectFit: 'contain',
	},
	photo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
	},
	shadow: {
		shadowColor: '#000000',
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 7,
	},
	title: {
		marginTop: 10,
		textAlign: 'center',
	},
});
