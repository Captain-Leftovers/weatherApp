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
	wind = 0.66,
	rain = 0.7,

}) {

        
			//TODO fix icon
		let iconUrl = image || imagePlaceholder;

 //TODO populate data and fix css

	return (
		<div className={style.cardContainer}>
			<div className={style.firstCol}>
				<div className={style.minTemp}>Min: {} &deg;C</div>
				<div className={style.temp}>{} &deg;C</div>
				<div className={style.maxTemp}>Max: {} &deg;C</div>
			</div>			
			<div className={style.secondCol}>
				<div className={style.weekDay}>{time.weekDay}</div>
				<div className={style.hoursMins}>{time.hoursMins}</div>
				<div className={style.description}>{description}</div>
				<img src={iconUrl} alt='weather icon' />
				<div className={style.wind}>Wind: {wind} m/s</div>
			</div>			
			<div className={style.thirdCol}>
				<div className={style.rain}>{rain}</div>
				<div className={style.rf}>{feelsLike}</div>
				<div className={style.description}>{description}</div>	
			</div>			
		</div>
	)
}
// TODO display data from figma design