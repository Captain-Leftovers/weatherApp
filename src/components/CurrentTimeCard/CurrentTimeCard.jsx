import style from './CurrentTimeCard.module.css'
import imagePlaceholder  from '../../assets/10d@4x.png'
import vialUpSVG from '../../assets/vialUp.svg'
import vialDownSVG from '../../assets/vialDown.svg'
import vialSVG from '../../assets/vial.svg'
import rainSVG from '../../assets/rain.svg'
import windSVG from '../../assets/wind.svg'
import humiditySVG from '../../assets/humidity.svg'
import rainHourSVG from '../../assets/rainHour.svg'
import feelsLikeSVG from '../../assets/FeelsLike.svg'

export default function CurrentTimeCard({
	time = {weekDay: 'Monday', hoursMins: '12:00'},
	temperature = '23',
	feelsLike = '25',
	tempMin = '20',
	tempMax = '24',
	description = 'Rain',
	image = imagePlaceholder,
	wind = '0.66',
	rain = '0.7',
	humidity = '66 %',

}) {

        
			//TODO fix icon
		let iconUrl = image || imagePlaceholder;

 //TODO populate data and fix css

	return (
		<div className={style.cardContainer}>
			<div className={style.firstCol}>
				<div className={style.minTemp}>
				<img  src={vialUpSVG} alt='maxTemp' />
					 {tempMax} &deg;C</div>
				<div className={style.temp}>
					<img src={vialSVG}  alt='temp' />
					{temperature} &deg;C
					</div>
				<div className={style.maxTemp}>
				<img src={vialDownSVG} alt='minTemp' />
					 {tempMin} &deg;C</div>
			</div>			
			<div className={style.secondCol}>
				<div className={style.weekDay}>{time.weekDay}</div>
				<div className={style.hoursMins}>{time.hoursMins}</div>
				<div className={style.description}>{description}</div>
				<img src={iconUrl} alt='weather icon' />
				<div className={style.wind}><img src={windSVG}  alt='wind' /> {wind} m/s</div>
			</div>			
			<div className={style.thirdCol}>
				<div className={style.rain}><img src={rainHourSVG}  alt='rainH' /> {rain} mm/h</div>
				<div className={style.rf}><img src={feelsLikeSVG}  alt='feelsLike' /> {feelsLike} &deg;C</div>
				<div className={style.humidity}><img src={humiditySVG}  alt='humidity' />        {humidity} %</div>	
			</div>			
		</div>
	)
}
// TODO display data from figma design