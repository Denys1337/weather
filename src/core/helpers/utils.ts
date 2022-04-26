import { Daily } from "../types/weatherTypes";

export const uviIndex = (uvi: Daily | number): number => {
	switch (true) {
		case uvi===0:
			return 0;
		case uvi ===2:
			return 0.05;
		case uvi<=4:
			return 0.1;
		case uvi <= 6:
			return 0.35;
		case uvi <= 8:
			return 0.65;
		case uvi <= 10:
			return 0.856;
		default:
			return 1;
	}
};

export const getHumidityStyle = (humidity: number): object => ({
	background: `linear-gradient(360deg, #08E ${humidity}%, #fff 50%)`,
});

export const translateFahrenheit = (degree:number):number=>{
	return	Math.round(degree * 9 / 5 + 32)
}

export const translateCelsius = (degree:number):number=>{
	return Math.round((degree - 32) * 5 / 9)
}