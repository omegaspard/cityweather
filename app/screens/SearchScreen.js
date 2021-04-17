import * as React from 'react';
import { useState } from 'react';
import { TextInput, View, Text, StyleSheet, FlatList, StatusBar, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

var utils = require('./utils');
var alertBox = require('./alertBoxVue.js');

export default class SerachScreen extends React.Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;
		this.state = {
			searchInput: '',
			item : {},
			renderable: false,
			renderAlert: false,
		};

		this.errorMessage = 'Search for cities...';
	}

	resetState = () => {
		this.setState({
			item: {},
			renderable: false,
		});
	}

	setSearchInput = (value) => {
		this.setState({
			searchInput: value
		});
	} 

	searchCity = () => {	
		this.resetState();
		utils.fetchWeather(this.state.searchInput).then(response => { 
			if (response.cod == 200) {
					console.log(response);	
					this.setItemState(
						{
							name: response.name,
							temp: Math.ceil(response.main.temp),
							type: response.weather[0].main,
							desc: 'Humidity: ' + response.main.humidity + '% - ' + response.weather[0].main  
						}
					);
					this.setRenderable();
			}	
		});
	}

	setItemState = (newItem) => {
		this.setState(
				{
					item: newItem,
				}
		); 
	}

	setRenderable = () => {
		this.setState(
				{
					renderable: true,
				}
		);
	}

	render = () => {
		return(
			<View style={utils.style.container}>
				<StatusBar barStyle="light-content" />
				<Text style={utils.style.titleContainer}>☀️  CityWeather</Text>

				<View style={{alignItems: 'center', width:'90%'}}>
					<Text>Search for a city</Text>
					<TextInput
						onChangeText={(value) => this.setSearchInput(value)}
						value={this.searchInput}
						style={{ width: '80%', padding: 15, margin: 5, backgroundColor: 'black', color: 'white' }}
					/>
					<TouchableHighlight
						style={{backgroundColor: 'grey', padding: 20, borderRadius: 8}}
						onPress={this.searchCity}
					>
						<Text style={{fontSize: 14, color:'white'}}>Search</Text>
					</TouchableHighlight>
				</View>
			
				{ this.state.renderable ? (
					<TouchableHighlight 
							underlayColor="white"
							onPress={ () => this.setState({renderAlert: true})}
						>
							<LinearGradient
								colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0)']}
								start={[0, 0.5]}
							>
								<View style={utils.style.row}>
									<Text style={[utils.getTempRange(this.state.item.temp), utils.style.temp]}> 
											{utils.getEmoji(this.state.item.type)} {this.state.item.temp} °C
									</Text>
									<Text style={utils.style.cityName}>{this.state.item.name}</Text>
								</View>
							</LinearGradient>
					</TouchableHighlight>
					) : (
						<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 32}}>
							<Text>{this.errorMessage}</Text>
						</View>
					)
				}
				{ 
					this.state.renderAlert ? (
						<View style={alertBox.styleAlertParent}>
							<View style={alertBox.styleAlertChildren}>
								<LinearGradient
									style={alertBox.styleLinearGradient}
									colors={['#136a8a', '#267871']}
									start={[0, 0.65]}
								>
									<Text style={alertBox.styleText}>{this.state.item.desc}</Text>
								</LinearGradient>
							</View>
						</View>
					) : (<Text>''</Text>)
				}
			</View>
		);		
	}
}



