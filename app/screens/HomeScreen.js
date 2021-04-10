import * as React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';

export default function HomeScreen( { route, navigation, data, refreshing, onRefresh } ) {
	console.log(data);
	return(
		<View style={style.container}>
			<StatusBar barStyle="light-content" />
			<Text style={style.titleContainer}>CityWeather</Text>
			<FlatList
				data={data}
				refreshing={refreshing}
				onRefresh={onRefresh}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({item, index}) => (
					<View>
						<Text>{item.temp} C - {item.name}</Text>
					</View>
					)
				}
			/>
		</View>
	);
}

const style = StyleSheet.create({
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
			}
});


