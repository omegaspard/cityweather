import * as React from "react";

import * as Font from 'expo-font';

import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from '@app/navigation/MainNavigation';

export default class App extends React.Component {

	constructor(props) {
		super(props);                          					
		var navigation = this.props.navigation;				
		this.state = {
			fontLoaded : false	
		}
	}
	
	async componentDidMount() {
		try {
			await Font.loadAsync({
				'DMSans-Regular': require('@fonts/DMSans-Regular.ttf'),
			})
			this.setState({ fontLoaded: true})
		} catch (error) {
			console.log(error)
		}
	}
	
	render() {
		if(this.state.fontLoaded) {
			return (
				<NavigationContainer>
					<MainNavigation />
				</NavigationContainer>
			);
		}
		else {
			return (<View><Text>Loading...</Text></View>);
		}
	}
}
