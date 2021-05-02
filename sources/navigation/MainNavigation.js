import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomMenu from '@app/navigation/BottomMenu'
import HomeSettingsScreen from '@app/components/home-settings-screen/HomeSettingsScreen';

const MainNavigation = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={ BottomMenu }/>
			<Drawer.Screen name="Settings" component={ HomeSettingsScreen }/>
		</Drawer.Navigator>
	)
}

export default MainNavigation;

const Drawer = createDrawerNavigator();
