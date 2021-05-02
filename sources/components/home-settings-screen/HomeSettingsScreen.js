import React from 'react';

import { View, Text, Button } from 'react-native';

export default class HomeSettingsScreen extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;

		this.state = {

		}
	}

	render = () => {
		return (
			<View>
				<Text>
					Settings Screen
					<Button onPress={() => this.navigation.goBack()} title="Go Back Home" />
				</Text>
			</View>
		)
	}
}
