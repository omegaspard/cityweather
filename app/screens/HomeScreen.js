import * as React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function HomeScreen( { route, navigation, data, refreshing, onRefresh } ) {
	return(
		<View style={style.container}>
			<StatusBar barStyle="light-content" />
			<Text style={style.titleContainer}>☀️  CityWeather</Text>
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
							<View style={style.row}>
								<Text style={[getTempRange(item.temp), style.temp]}> {getEmoji(item.type)} {item.temp} °C</Text>
								<Text style={style.cityName}>{item.name}</Text>
							</View>
						</LinearGradient>
					</TouchableHighlight>
					)
				}
			/>
		</View>
	);
}

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
	console.log(type);
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

const style = StyleSheet.create({
	cold: { color: 'blue'},
	medium: { color: 'green'},
	hot: { color: 'orange'},
	veryHot: { color: 'red'},
	container:
		{
			justifyContent: 'center',
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


