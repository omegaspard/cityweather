import * as React from 'react';

import { View, Text, StyleSheet, FlatList, StatusBar, TouchableHighlight, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import FlyingDescription from '@app/components/reusables/FlyingDescription.js';

const weatherQueries = require('@app/services/api/weatherQueries');
const descriptionRendering = require('@app/components/common/descriptionRendering');

const DEFAULT_CITIES = require('@app/components/home-screen/DefaultCities').DEFAULT_CITIES;
const style = require('@app/components/common/styles').style;

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
			displayCityNumber: 2,
		};

		this.reverseFlyingDesc = this.reverseFlyingDesc.bind(this);

		this.fetchCitiesTemperature();
	}

	render = () => {
		return (
			<View style={style.container}>
				<StatusBar barStyle="light-content" />
				<Text style={style.titleContainer}><Button style={{position: 'absolute', right: 5, top: 5}} onPress={() => alert('Side bar display')} title="Settings" color="rgb(0,0,0)" accessibilityLabel="Access application settings."/>☀️  CityWeather</Text>
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
								<View style={style.row}>
									<Text style={[descriptionRendering.getTempRange(item.temp), style.temp]}> {descriptionRendering.getEmoji(item.type)} {item.temp} °C</Text>
									<Text style={style.cityName}>{item.name}</Text>
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
		this.getRandomCities(DEFAULT_CITIES, this.state.displayCityNumber).forEach(city => this.fetchCityTemperature(city.name, city.country));
	}

	getRandomCities = (cities, numberOfCities) => {
		var shuffle = require('shuffle-array');
		var randomizedCities = shuffle(cities).slice(0, numberOfCities);
		return randomizedCities;
	}

	
	fetchCityTemperature = ( city, country ) => {
		var weatherLocation = city + ',' + country;
		weatherQueries.fetchWeather(weatherLocation).then((data) => {
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
