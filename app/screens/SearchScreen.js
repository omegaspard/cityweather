import * as React from 'react';
import { useState } from 'react';
import { TextInput, View, Text, StyleSheet, FlatList, StatusBar, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function getTempRange(temperature) {
	if( temperature < 11) {
		return style.cold;
	}
	else if( temperature >= 11 && temperature < 20) {
		return style.medium;
	}
	else if( temperature >= 20 && temperature <= 30) {
		return style.hot;
	}
	else if( temperature >= 30) {
		return style.veryHot;
	}
}

export function getEmoji(type) {
	if(type == 'Clouds') {
		return '☁️';
	}
	if(type == 'Clear') {
		return '☀️';
	}
	if(type == 'Haze') {
		return '🌫️';
	}
	if(type == 'Thunderstorm') {
		return '🌩️';
	}
	if(type == 'Rain') {
		return '🌧️';
	}
	if(type == 'Snow') {
		return '❄️';
	}
	if(type == 'Mist') {
		return '🌫️';
	}


}

export default function SearchScreen( { route, navigation, onPress, searchResult, error, currentState, item } ) {
	const [searchInput, setSearchInput] = useState('');
	return(
		<View style={style.container}>
			<StatusBar barStyle="light-content" />
			<Text style={style.titleContainer}>☀️  CityWeather</Text>

			<View style={{alignItems: 'center', width:'90%'}}>
				<Text>Search for a city</Text>
				<TextInput
					onChangeText={(value) => {
						console.log("THE SEARCH INPUT BEFORE " + searchInput)
						console.log("THE TEXT " + value)
						setSearchInput(value)
						console.log("THE SEARCH INPUT AFTER " + searchInput)
					}}
					value={searchInput}
					style={{ width: '80%', padding: 15, margin: 5, backgroundColor: 'black', color: 'white'}}
				/>
				<TouchableHighlight
					style={{backgroundColor: 'grey', padding: 20, borderRadius: 8}}
					onPress={(value) => { 
						setSearchInput(value);
						onPress();
					}}
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
							<View style={style.row}>
								<Text style={[getTempRange(item.temp), style.temp]}> {getEmoji(item.type)} {item.temp} °C</Text>
								<Text style={style.cityName}>{item.name}</Text>
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

const style = StyleSheet.create({
	cold: { color: 'blue'},
	medium: { color: 'green'},
	hot: { color: 'orange'},
	veryHot: { color: 'red'},
	container:
		{
			justifyContent: 'flex-start',
			alignItems: 'center',
			flex: 1,
			backgroundColor: '#fff',
		},
	titleContainer:
			{
				width: '100%',
				paddingBottom: 15,
				paddingTop: 40,
				backgroundColor: 'black',
				color: 'white',
				textAlign: 'center'
			},
	row: {
		flex: 1,
		width: '100%',
		paddingVertical: 25,
		paddingHorizontal: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: 'white'
	},
	cityName: {
		fontSize: 20,
		lineHeight: 40,
		fontFamily: 'Roboto'
	},
	temp: {
		fontSize: 30,
		lineHeight: 40,
		width: 130,
		marginRight: 15,
		fontWeight: 'bold',
		fontFamily: 'Roboto'
	}

});


