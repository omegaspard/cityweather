const style = require('@app/components/common/styles').style;

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
		return 'âī¸';
	}
	if(type == 'Clear') {
		return 'âī¸';
	}
	if(type == 'Haze') {
		return 'đĢī¸';
	}
	if(type == 'Thunderstorm') {
		return 'đŠī¸';
	}
	if(type == 'Rain') {
		return 'đ§ī¸';
	}
	if(type == 'Snow') {
		return 'âī¸';
	}
	if(type == 'Mist') {
		return 'đĢī¸';
	}
}
