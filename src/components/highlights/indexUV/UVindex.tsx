import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store';
import { WeatherAll } from '../../../store/types';
import s from "./IndexUV.module.scss";
import {uviIndex} from "../../../core/helpers/utils"

const UVindex:FC = () => {
  const { daily }: WeatherAll = useSelector((state:Store) => state.testReducer.apiWeather);
	const uvi: Array<number> = daily && daily?.map(item => item.uvi);
  const uviOne = uvi && uvi[0]
  
  return (
    <div  className={s.wrapper} >
      <h4>UV Index</h4>
      <div className={s.wrapper__uvi}>
				<div className={s.gradient}>
					<svg id="half-circle" viewBox="0 0 106 57" width="150">
						<defs>
							<linearGradient id="orange-to-pink" x1="1" x2="0" y1="0" y2="0">
								<stop offset={`${uviIndex(uviOne)}`} stopColor="orange" />
								<stop
									offset={`${uviIndex(uviOne)}` === '0' ? 0 : 0.7}
									stopColor="rgba(236, 233, 233, 0.89)"
								/>
							</linearGradient>
						</defs>
						<path d="M101 4c0 27.1-21.9 49-49 49S4 31.1 4 4">.</path>
					</svg>

					<span>1</span>
					<span>6</span>
					<span>9</span>
					<span>12</span>
					<span>{uviOne}</span>
				</div>
			</div>
  </div>
  )
}

export default UVindex;