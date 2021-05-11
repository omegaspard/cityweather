import React from 'react';

import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@app/components/home-screen/HomeScreen.js'
import SearchScreen from '@app/components/search-screen/SearchScreen.js'


export default class BottomMenu extends React.Component {
	
	render = () => {
		return(
			<BottomMenuTab.Navigator tabBarOptions={ tabBarOptionsStyle }>
				<BottomMenuStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, headerTitleStyle: { alignSelf: 'center' } }} />
				<BottomMenuStack.Screen name="Search" component={SearchScreen} />
			</BottomMenuTab.Navigator>
		);
	}
}

const BottomMenuTab = createBottomTabNavigator();
const BottomMenuStack = createStackNavigator();

const tabBarOptionsStyle = StyleSheet.create({
	tabStyle: {
		justifyContent: 'center',
	},
});
		
