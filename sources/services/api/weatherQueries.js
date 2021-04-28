// TODO: To remove obviously.
const apiKey = '152c208e0cd90790c96881d352e78c49';

export const fetchWeather = (city) => {
	var apiURL = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=metric';
		
	return fetch(apiURL).then((response) => response.json())
}

