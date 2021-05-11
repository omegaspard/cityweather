import * as React from "react";

import * as Font from 'expo-font';

import { View, Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { AppSettingsContext } from '@app/components/AppSettingsContext';
import MainNavigation from '@app/navigation/MainNavigation';

export default class App extends React.Component {

	constructor(props) {
		super(props);                          					
		var navigation = this.props.navigation;				
		this.state = {
			fontLoaded : false,
			numberOfCityToDisplay: 10,	
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

	updateNumberOfCityToDisplay(newValue) {
		this.setState({
			numberOfCityToDisplay: newValue,
		})
	}
	
	render() {
		if(this.state.fontLoaded) {
			return (
				<AppSettingsContext.Provider 
					value={
						{
							numberOfCityToDisplay: this.state.numberOfCityToDisplay,
							updateNumberOfCityToDisplay: this.updateNumberOfCityToDisplay,
						}
					}
				>
					<NavigationContainer>
						<MainNavigation />
					</NavigationContainer>
				</AppSettingsContext.Provider>
			);
		}
		else {
			return (<View><Text>Loading...</Text></View>);
		}
	}
}
