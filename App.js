import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './app/screens/HomeScreen.js'
import SearchScreen from './app/screens/SearchScreen.js'

export default class App extends React.Component {

	constructor(props) {
		super(props);                          					
		var navigation = this.props.navigation;				
	}

	render() {
		return (
			<NavigationContainer>
				<BottomTab.Navigator>
                                	<Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
					<Stack.Screen name="Search" component={SearchScreen}/>
                                </BottomTab.Navigator>
			</NavigationContainer>
  		);
	}
}

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
