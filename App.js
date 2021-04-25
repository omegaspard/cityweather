import * as React from "react";

import * as Font from 'expo-font';

import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@app/components/home-screen/HomeScreen.js'
import SearchScreen from '@app/components/search-screen/SearchScreen.js'


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
					<BottomTab.Navigator>
						<Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
						<Stack.Screen name="Search" component={SearchScreen}/>
					</BottomTab.Navigator>
				</NavigationContainer>
			);
		}
		else {
			return (<View><Text>Loading...</Text></View>);
		}
	}
}

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
