import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
	cold: 
		{ color: 'blue' },
	medium: 
		{ color: 'green' },
	hot: 
		{ color: 'orange' },
	veryHot: 
		{ color: 'red' },
	container:
		{
			alignItems: 'center',
			flex: 1,
			backgroundColor: '#fff',
			fontFamily: 'DMSans-Regular',
		},
	titleContainer:
		{
			width: '100%',
			paddingBottom: 15,
			paddingTop: 15,
			backgroundColor: 'black',
			color: 'white',
			textAlign: 'center',
			fontFamily: 'DMSans-Regular',
		},
	row: 
		{
			flex: 1,
			width: Dimensions.get('window').width,
			paddingVertical: 25,
			paddingHorizontal: 15,
			flexDirection: 'row',
			justifyContent: 'space-between',
			borderBottomWidth: 1,
			borderBottomColor: 'white',
			fontFamily: 'DMSans-Regular',
		},
	cityName: 
		{
			fontSize: 20,
			lineHeight: 4,
			fontFamily: 'DMSans-Regular',
		},
	temp: 
		{
			fontSize: 30,
			lineHeight: 40,
			marginRight: 15,
			fontWeight: 'bold'
		}
});


