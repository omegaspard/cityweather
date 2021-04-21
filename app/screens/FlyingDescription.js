import * as React from 'react';

import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Clickable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class FlyingDescription extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;
	}	

	render() {
		return (
			<View style={styles.overlayFilter}>
				<View style={styles.informationBox}>
					<LinearGradient
						colors={['#136aBa', '#267871']}
						start={[0, 0.65]}
						style={styles.informationBoxLinearGradient}
					>
						<Text style={styles.cityDescription}>
							{this.props.cityDescription}
						</Text>
						<TouchableHighlight
							onPress={this.props.closeFlyingDesc}
							underlayColor='none'
						>
							<Text style={styles.closeText}>
								Close
							</Text>
						</TouchableHighlight>
					</LinearGradient>
				</View>
			</View>	
		)
	}
}


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
		justifyContent: 'space-between',
		padding: 5,
		shadowColor: 'black', 
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.3,
		shadowRadius: 2,
	},
	cityDescription: {
		fontSize: 16,
		color: 'white',
		padding: 10,
		textAlign: 'center'
	},
	closeText: {
		fontWeight: 'bold',
		color: 'white',
		padding: 10,
		textAlign: 'center',
	}
});
