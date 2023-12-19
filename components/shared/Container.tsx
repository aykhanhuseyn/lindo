import type { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, type ViewProps } from './View';

interface ContainerProps extends ViewProps {
	withBottomBar?: boolean;
}

export const Container: FC<ContainerProps> = ({
	children,
	style,
	withBottomBar,
	...props
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={[
				{
					paddingTop: insets.top,
					paddingBottom: insets.bottom,
					paddingLeft: insets.left || 16,
					paddingRight: insets.right || 16,
				},
				style,
			]}
			{...props}
		>
			{children}
		</View>
	);
};
