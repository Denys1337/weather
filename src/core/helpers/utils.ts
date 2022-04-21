import { FC } from "react";
import { Daily } from "../../store/types";

export const uviIndex = (uvi: Daily | number): number => {
	if (uvi === 0) return 0;
	if (uvi === 2) return 0.05;
	if (uvi <= 4) return 0.1;
	if (uvi <= 6) return 0.35;
	if (uvi <= 8) return 0.65;
	if (uvi <= 10) return 0.856;

	return 1;
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