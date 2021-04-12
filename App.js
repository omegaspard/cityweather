import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen.js'


export default class App extends React.Component {

	constructor(props) {

		super(props);                          					
		var navigation = this.props.navigation;				
		this.state = {                         				
			cities: [
					{
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
			],
			list: [],
			refresh: true

		};

		this.apikey = '0d7ed93ee558acee35aa5361a6146be6';
		this.fetchTemperatures();
	}

	fetchTemperatures = () => {
		var currentCities = []
		this.getRandomCities(this.state.cities, 25).forEach(city => this.fetchCityTemp(city.name, city.country, currentCities));
	}

	getRandomCities = (cities, numberOfCities) => {
		var shuffle = require('shuffle-array');
		var randomizedCities = shuffle(cities).slice(0, numberOfCities);
		return randomizedCities;
	}

	fetchCityTemp = ( city, country, currentCities ) => {
		var apiURL =  'http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+this.apikey+'&units=metric';
		fetch(apiURL).then((response) => response.json())
		.then((responseJson) => {
			var r = responseJson.main;
			var currentResponse = responseJson;
			var city = {
				name: currentResponse.name,
				country: country,
				temp: Math.ceil(r.temp),
				type: currentResponse.weather[0].main,
				desc: 'Humidity: '+r.humidity+'% - '+ currentResponse.weather[0].main,
			};
			currentCities.push(city);
			this.setState({
				list: currentCities,
				refresh: false,
			})
		});

	}


	loadNewTemps = () => {
		this.setState({
			list: [],
			refresh: true,
		});
		this.fetchTemperatures();
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
                                	<Stack.Screen name="Home" options={{headerShown: false}}>
                                		{props => <HomeScreen {...props} data={this.state.list} refreshing={this.state.refresh} onRefresh={this.loadNewTemps}/> }
                                	</Stack.Screen>
                                </Stack.Navigator>
			</NavigationContainer>
  		);
	}
}

const Stack = createStackNavigator();
