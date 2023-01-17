import style from './CurrentTimeCard.module.css'
import imagePlaceholder  from '../../assets/10d@4x.png'

export default function CurrentTimeCard({
	time = {weekDay: 'Monday', hoursMins: '12:00'},
	temperature = '23',
	feelsLike = '25',
	tempMin = '20',
	tempMax = '24',
	description = 'Rain',
	image = imagePlaceholder,
	wind = 3,


}) {

        
			//TODO fix icon
		let iconUrl = image || imagePlaceholder;

 //TODO populate data and fix css

	return (
		<div className={style.cardContainer}>
			<div className="firstRow">
				<div className={style.currentDay}>{time?.weekDay}</div>
				<div className={style.currentTime}>{time?.hoursMins}</div>
			</div>
			<div className={style.secondRow}>
				<div className={style.deg}>{temperature}&deg;C</div>
				<div className={style.detail}>{description}</div>
				<div className={style.icon} style={{backgroundImage: `url(${iconUrl})`}} ></div>
			</div>
			<div className={style.thirdRow}>
				<div className={style.rf}>RF: {feelsLike}&deg;C</div>
				<div className={style.separator}>|</div>
				<div className={style.tempMin}>L: {tempMin}&deg;C</div>
				<div className={style.separator}>|</div>
				<div className={style.tempHi}>H: {tempMax}&deg;C</div>
				<div className={style.separator}>|</div>
				<div className={style.windSpeed}>
					Wind Speed: {wind} m/s
				</div>
			</div>
		</div>
	)
}
