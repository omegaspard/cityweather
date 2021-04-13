import * as React from 'react';
import { useState } from 'react';
import { TextInput, View, Text, StyleSheet, FlatList, StatusBar, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


var utils = require('./utils');

export default function SearchScreen( { route, navigation, onPress, searchResult, setSearchInputClass, error, currentState, item } ) {
	/* Those are only relevant to the state of this function and not the state of the App class. */
	const [searchInput, setSearchInput] = useState('');
	return(
		<View style={utils.style.container}>
			<StatusBar barStyle="light-content" />
			<Text style={utils.style.titleContainer}>☀️  CityWeather</Text>

			<View style={{alignItems: 'center', width:'90%'}}>
				<Text>Search for a city</Text>
				<TextInput
					onChangeText={(value) => {
						setSearchInput(value)
						setSearchInputClass(value)
					}}
					value={searchInput}
					style={{ width: '80%', padding: 15, margin: 5, backgroundColor: 'black', color: 'white'}}
				/>
				<TouchableHighlight
					style={{backgroundColor: 'grey', padding: 20, borderRadius: 8}}
					onPress={onPress}
				>
					<Text style={{fontSize: 14, color:'white'}}>Search</Text>
				</TouchableHighlight>
			</View>
			
			{ searchResult == 1 ? (
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
			) : (
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 32}}>
						<Text>{error}</Text>
				</View>
				)
			}
		</View>
	);
}

