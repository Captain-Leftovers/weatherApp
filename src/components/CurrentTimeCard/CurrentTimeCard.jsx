import style from './CurrentTimeCard.module.css'
import imagePlaceholder  from '../../assets/10d@4x.png'
import { getImageUrl } from '../../../services/weatherService';

export default function CurrentTimeCard({
	time = {
        hoursMins : '11:45',
        weekDay: 'Friday'
    },
	condition = 'Clouds',
	icon,
	temp = '25',
	feels_like = '23',
	temp_min = '19',
	temp_max = '28',
	windSpeed = '5.66',
	country = 'AU',
	name = 'Sydney',
}) {
        
		let iconNew = getImageUrl(icon)
		let iconUrl = iconNew || imagePlaceholder;

 //TODO populate data and fix css

	return (
		<div className={style.cardContainer}>
			<div className="firstRow">
				<div className={style.currentDay}>{time?.weekDay}</div>
				<div className={style.currentTime}>{time?.hoursMins}</div>
			</div>
			<div className={style.secondRow}>
				<div className={style.deg}>{temp}&deg;C</div>
				<div className={style.detail}>{condition}</div>
				<div className={style.icon} style={{backgroundImage: `url(${iconUrl})`}} ></div>
			</div>
			<div className={style.thirdRow}>
				<div className={style.rf}>RF: {feels_like}&deg;C</div>
				<div className={style.separator}>|</div>
				<div className={style.tempMin}>L: {temp_min}&deg;C</div>
				<div className={style.separator}>|</div>
				<div className={style.tempHi}>H: {temp_max}&deg;C</div>
				<div className={style.separator}>|</div>
				<div className={style.windSpeed}>
					Wind Speed: {windSpeed} m/s
				</div>
			</div>
		</div>
	)
}
