import React from 'react';
import { View, Text } from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface NavProps {
	color?: string,
	width?: number,
	heigh?: number,
}

const NavIcon = ({color = '#fff', width = 30, height = 30}: NavProps) => {
	return (		
		<Svg width={width} height={height} viewBox="0 0 30 30">
			<Path
				fill={color}
				fillRule="evenodd"
				d="M0 0L30 0 30 4 0 4z"
			/>
			<Path
                                fill={color}
                                fillRule="evenodd"
                                d="M0 10L30 10 30 14 0 14z"
                        />
			<Path
                                fill={color}
                                fillRule="evenodd"
                                d="M0 20L30 20 30 24 0 24z"
                        />
		</Svg>
	);
};

export default NavIcon;
