import * as React from 'react';

import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const alertBox = (alertMessage) => {
	return (
		<View style={styleAlertParent}>
			<View style={styleAlertChildren}>
				<LinearGradient
				style={styleLinearGradient}
					colors={['#136a8a', '#267871']}
					start={[0, 0.65]}
				>
					<Text>"Hello"</Text>
				</LinearGradient>
			</View>
		</View>	
	)
};

const styleAlertParent = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const styleAlertChildren = {
	width: '75%',
	height: '90%',
};

const styleLinearGradient = {
	flex: 1,
	borderRadius: 20,
	justifyContent: 'space-between',
};

const styleText = {
	fontSize: 16,
	color: 'white',
	padding: 10,
	textAlign: 'center',

}
