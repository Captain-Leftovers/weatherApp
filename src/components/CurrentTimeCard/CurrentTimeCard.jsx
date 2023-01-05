import style from './CurrentTimeCard.module.css'
import imagePlaceholder  from '../../assets/01d@2x.png'

export default function CurrentTimeCard({
    // currentWeather,
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

    console.log(time);

 //TODO populate data and fix css

	return (
		<div className={style.cardContainer}>
			<div className={style.currentTime}>{time?.hoursMins}</div>
			<div className={style.secondRow}>
				<div className={style.deg}>{temp}&deg;C</div>
				<div className={style.detail}>{condition}</div>
				<div className={style.icon} style={{backgroundImage: `url(${imagePlaceholder})`}} ></div>
			</div>
			<div className={style.thirdRow}>
				<div className={style.rf}>(RF: 30&deg;)</div>
				<div className={style.separator}>|</div>
				<div className={style.humidity}>L:15&deg;C</div>
				<div className={style.separator}>|</div>
				<div className={style.humidity}>H:27&deg;C</div>
				<div className={style.separator}>|</div>
				<div className={style.windSpeed}>
					(Wind Speed: 50)
				</div>
			</div>
		</div>
	)
}
