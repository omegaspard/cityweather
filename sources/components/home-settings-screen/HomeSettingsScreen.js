import React from 'react';

import { View, Text, Buttonn, FlatList, ScrollView } from 'react-native';
import NumericInput from 'react-native-numeric-input';

const style = require('@app/components/common/styles').style;


export default class HomeSettingsScreen extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;

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
				<NumericInput
					value={this.state.homeCitiesNumber} 
					onChange={value => this.setState({homeCitiesNumber: value})}
					minValue={0}
					maxValue={25}
					initValue={this.state.homeCitiesNumber}
					/> 
				<NumericInput onChange={value => console.log(value)} />
			</ScrollView>
		)
	}
}
