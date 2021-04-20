import * as React from 'react';

import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Clickable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const FlyingDescription = ( { cityDescription, closeFlyingDesc }) => {
	return (
		<View style={styles.overlayFilter}>
			<View style={styles.informationBox}>
				<LinearGradient
					colors={['#136aBa', '#267871']}
					start={[0, 0.65]}
					style={styles.informationBoxLinearGradient}
				>
					<Text>
						{cityDescription}
					</Text>
					<TouchableHighlight
						underlayColor="white"
						onPress={closeFlyingDesc}
					>
						<Text>
							Close
						</Text>
					</TouchableHighlight>
				</LinearGradient>
			</View>
		</View>
	)
};

export default FlyingDescription; 

const styles = StyleSheet.create({
	
	overlayFilter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		left: 0, 
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	informationBox: {
		width: '75%',
		height: 90,
	},
	informationBoxLinearGradient: {
		flex: 1,
		borderRadius: 20,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 70,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			heigh: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	buttonOpen: {
		backgroundColor: '#136a8a',
	},
	buttonClose: {
		backgroundColor: '#136a8a',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	}	
});
