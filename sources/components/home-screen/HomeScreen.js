import * as React from 'react';

import { View, Text, StyleSheet, FlatList, StatusBar, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import FlyingDescription from '@app/components/reusables/FlyingDescription.js';

const utils = require('@app/components/utils');

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;
		this.state = {
			item: {},
			refreshing: true,
			cities: [],
			renderFlyingDescription: false,
			flyingDescription: '',
		};

		this.reverseFlyingDesc = this.reverseFlyingDesc.bind(this);

		this.fetchCitiesTemperature();
	}

	render = () => {
		return (
			<View style={utils.style.container}>
				<StatusBar barStyle="light-content" />
				<Text style={utils.style.titleContainer}>☀️  CityWeather</Text>
				<FlatList
					data={this.state.cities}
					refreshing={this.state.refreshing}
					onRefresh={this.getCitiesTemperature}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({item, index}) => (
						<TouchableHighlight 
							underlayColor="white"
							onPress={ 
									() => 
{										this.reverseFlyingDesc(); 
										this.setState({flyingDescription: item.desc});
}
								}
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
				{
					this.state.renderFlyingDescription && <FlyingDescription cityDescription={this.state.flyingDescription} closeFlyingDesc={this.reverseFlyingDesc} /> 
				}

			</View>
		)
	}

	getCitiesTemperature = () => {
		this.setState({
			cities: [],
			refreshing: true,
		});
		
		this.fetchCitiesTemperature();
	}
	
	fetchCitiesTemperature = () => {	
		this.getRandomCities(utils.CITIES, 2).forEach(city => this.fetchCityTemperature(city.name, city.country));
	}

	getRandomCities = (cities, numberOfCities) => {
		var shuffle = require('shuffle-array');
		var randomizedCities = shuffle(cities).slice(0, numberOfCities);
		return randomizedCities;
	}

	
	fetchCityTemperature = ( city, country ) => {
		var weatherLocation = city + ',' + country;
		utils.fetchWeather(weatherLocation).then((data) => {
			this.pushCity(
					{
						name: data.name,
						temp: Math.ceil(data.main.temp),
						type: data.weather[0].main,
						desc: 'Humidity: ' + data.main.humidity + '% - ' + data.weather[0].main  
					}
			)
		});		
	}

	pushCity = (city) => {
		var currentCities = this.state.cities;
		currentCities.push(city);
		this.setState({
			cities: currentCities,
			refreshing: false,
		})
	}

	reverseFlyingDesc = () => {
		this.setState(
			{
				renderFlyingDescription: !this.state.renderFlyingDescription
			});
	}
}