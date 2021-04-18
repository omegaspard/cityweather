import * as React from 'react';

import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, Clickable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const FlyingDescription = ( { cityDescription }) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.centeredView}>
			<Modal
				animation="slide"
				transparent={true}
				visible={modalVisible}
			>
				
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>{cityDescription}</Text>
							<TouchableHighlight
								style={[styles.button, styles.buttonClose]}
								onPress={() => {setModalVisible(!modalVisible)}}
							>
								<Text style={styles.textStyle}>Close</Text>
							</TouchableHighlight>
					</View>
				</View>
			</Modal>
		</View>	
	);
};

export default FlyingDescription; 

const styles = StyleSheet.create({
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
