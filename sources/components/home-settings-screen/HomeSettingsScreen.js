import React from 'react';

import { View, Text, Button, FlatList, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';

const style = require('@app/components/common/styles').style;


export default class HomeSettingsScreen extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;
		this.route = props.route;
		this.state = {
			homeCitiesNumber: 10,
		}
	}

	render = () => {
		return (
			<ScrollView>
				<View style={style.container}>
					<View style={{ flexDirection: 'row', backgroundColor: 'black', width: '100%', fontFamily: 'DMSans-Regular' }}>
						<Text style={style.titleContainer}>Settings</Text>
					</View>
				</View>
				<View style={styles.settingBoxs}>
					<Text style={ styles.boxTitle }>Number of cities:</Text>
					<NumericInput
						value={ this.state.homeCitiesNumber } 
						onChange={ value => { 
									this.setState({ homeCitiesNumber: value }); 
									this.navigation.dispatch({...CommonActions.setParams({ number: this.state.homeCitiesNumber })})}}
						minValue={ 0 }
						maxValue={ 25  }
						initValue={ this.state.homeCitiesNumber }
						type='up-down'
						rounded
						upDownButtonsBackgroundColor='black'
						iconStyle={ styles.arrowStyle }	
						style={ styles.box }
					/>
				</View>
				<Button title="Back" onPress={() => { console.log(this.route); this.navigation.goBack() }} />
									
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	arrowStyle:{ color: 'white' },
	settingBoxs:{
		margin: 10,
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center'		
	},
})
