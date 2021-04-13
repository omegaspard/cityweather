import * as React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const utils = require('./utils');

export default function HomeScreen( { route, navigation, data, refreshing, onRefresh } ) {
	return(
		<View style={utils.style.container}>
			<StatusBar barStyle="light-content" />
			<Text style={utils.style.titleContainer}>☀️  CityWeather</Text>
			<FlatList
				data={data}
				refreshing={refreshing}
				onRefresh={onRefresh}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({item, index}) => (
					<TouchableHighlight 
						underlayColor="white"
						onPress={ () => alert(item.desc) }
					>
						<LinearGradient
							colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0)']}
							start={[0, 0.5]}
						>
							<View style={utils.style.row}>
								<Text style={[utils.getTempRange(item.temp), utils.style.temp]}> {utils.getEmoji(item.type)} {item.temp} °C</Text>
								<Text style={utils.style.cityName}>{item.name}</Text>
							</View>
						</LinearGradient>
					</TouchableHighlight>
					)
				}
			/>
		</View>
	);
}
