import type { FC } from 'react';
import { type ColorValue, type DimensionValue } from 'react-native';
import { View, type ViewProps } from './View';

interface SeparatorProps extends ViewProps {
	h?: DimensionValue;
	w?: DimensionValue;
	mV?: DimensionValue;
	mT?: DimensionValue;
	mB?: DimensionValue;
	mH?: DimensionValue;
	mR?: DimensionValue;
	mL?: DimensionValue;
	bg?: ColorValue;
}

export const Separator: FC<SeparatorProps> = ({
	bg,
	h,
	w,
	mV,
	mH,
	mT,
	mB,
	mR,
	mL,
	style,
	...props
}) => {
	const marginTop = mT ?? mV;
	const marginBottom = mB ?? mV;
	const marginRight = mR ?? mH;
	const marginLeft = mL ?? mH;
	const height = h ?? 1;
	const width = w ?? 'auto';

	return (
		<View
			style={[
				{
					marginTop,
					marginBottom,
					marginRight,
					marginLeft,
					height,
					width,
					backgroundColor: bg,
				},
				style,
			]}
			color='separator'
			{...props}
		/>
	);
};
