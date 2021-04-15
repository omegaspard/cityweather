import { StyleSheet } from 'react-native';

const apiKey = '0d7ed93ee558acee35aa5361a6146be6';

export const fetchWeather = (city) => {
	var apiURL = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=metric';
		
	return fetch(apiURL).then((response) => response.json())
}

export const extractCityInfoFrom = (fetchedResponse) => {
	return  {
			name: fetchedResponse.name,
			temp: Math.ceil(fetchedResponse.main.temp),
			type: fetchedResponse.weather[0].main,
			desc: 'Humidity: ' + fetchedResponse.main.humidity + '% - ' + fetchedResponse.weather[0].main  
		}
}

export const style = StyleSheet.create({
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
	},
	temp: {
		fontSize: 30,
		lineHeight: 40,
		width: 130,
		marginRight: 15,
		fontWeight: 'bold'
	}

});


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

export const CITIES = 
[{
	name: 'London',
	country: 'UK'
},
{       
	name: 'Edinburgh',
	country: 'UK'
},
{
	name: 'New York',
	country: 'US'
},
{
	name: 'Texas',
	country: 'US'
},
{
	name: 'Washington',
	country: 'US'
},
{
	name: 'Paris',
	country: 'France'
},
{
	name: 'Doha',
	country: 'Qatar'
},
{
	name: 'Sydney',
	country: 'Australia'
},
{
	name: 'Cancun',
	country: 'Mexico'
},
{
	name: 'Madrid',
	country: 'Spain'
},
{
	name: 'Berlin',
	country: 'Germany'
},
{
	name: 'Brussels',
	country: 'Belgium'
},
{
	name: 'Copenhagen',
	country: 'Denmark'
},
{
	name: 'Athens',
	country: 'Greece'
},
{
	name: 'New Delhi',
	country: 'India'
},
{
	name: 'Dublin',
	country: 'Ireland'
},
{
	name: 'Rome',
	country: 'Italy'
},
{
	name: 'Tokyo',
	country: 'Japan'
},
{
	name: 'Wellington',
	country: 'New Zealand'
},
{
	name: 'Amsterdam',
	country: 'Netherlands'
},
{
	name: 'Ohio',
	country: 'Norway'
},
{
	name: 'Panama City',
	country: 'Panama'
},
{
	name: 'Lisbon',
	country: 'Portugal'
},
{
	name: 'Warsaw',
	country: 'Poland'
},
{
	name: 'Moscow',
	country: 'Russia'
}
]
