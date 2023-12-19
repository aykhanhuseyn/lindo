import {
	View as DefaultView,
	type ViewProps as DefaultViewProps,
} from 'react-native';
import { useThemeColor } from '@lindo/hooks';
import type { ThemeProps } from '@lindo/types';
import { LindoTheme } from '@lindo/constants';

type ViewMode = 'primary' | 'secondary' | 'third';

export interface ViewProps extends ThemeProps, DefaultViewProps {
	mode?: ViewMode;
	color?: keyof LindoTheme;
}

const modeToKey: Record<ViewMode, keyof LindoTheme> = {
	primary: 'background',
	secondary: 'backgroundSecondary',
	third: 'backgroundTertiary',
};

export function View({ mode, color: colorKey, ...props }: ViewProps) {
	const { style, lightColor, darkColor, ...otherProps } = props;

	const key = colorKey ?? modeToKey[mode ?? 'primary'];
	const bg = useThemeColor({ light: lightColor, dark: darkColor }, key);

	return (
		<DefaultView
			style={[{ backgroundColor: mode ? bg : 'transparent' }, style]}
			{...otherProps}
		/>
	);
}
