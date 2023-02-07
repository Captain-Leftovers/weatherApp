import style from './DailyCard.module.css'
import imagePlaceholder  from '../../assets/01d@2x.png'
import Carousel from '../Carousel/Carousel';
import vialUpSVG from '../../assets/vialUp.svg'
import vialDownSVG from '../../assets/vialDown.svg'
import vialSVG from '../../assets/vial.svg'
import windSVG from '../../assets/wind.svg'
import humiditySVG from '../../assets/humidity.svg'
import feelsLikeSVG from '../../assets/FeelsLike.svg'
import popSVG from '../../assets/pop.svg'

const dummyData = [{},{},{},{},{},{}]


export default function DailyCard({daily = dummyData}) {
	
	let dailyCards = daily?.map((day) => {
		let weekDay = day?.time?.weekDay || 'Monday'
		let temp = day?.temp?.day || '0'
		let minTemp = day?.temp?.min || '0'
		let maxTemp = day?.temp?.max || '0'
		let rf = day?.feelsLike?.day || '0'
		let detail = day?.description || 'Rainy'
		let icon = day?.icon || '01d'
		let pop = day?.pop || '0'
		let wind = day?.wind || '0'
		let humidity = day?.humidity || '0'
		let iconUrl = icon || imagePlaceholder
        return (
        <div className={style.dailyCard} key={crypto.randomUUID()} >
			<div className={style.content}>
				<div className={style.firstCol}>
					<div className={style.maxTemp}>
						<img  src={vialUpSVG} alt='maxTemp' />
						<span>{maxTemp} &deg;C</span>
					</div>
					<div className={style.temp}>
						<img  src={vialSVG} alt='Temp' />
						{temp} &deg;C
					</div>
					<div className={style.minTemp}>
						<img  src={vialDownSVG} alt='minTemp' />
						<span>{minTemp} &deg;C</span>
					</div>
				</div>
				<div className={style.secondCol}>
					<div className={style.weekDay}>
						{weekDay}
					</div>
					<div className={style.detail}>
						{detail}
					</div>
					<img src={iconUrl} alt="weather icon" className={style.weatherIcon} />
					<div className={style.wind}>
						<img src={windSVG} alt="wind" /> 
						<span>{wind} km/h</span>
					</div>
				</div>
				<div className={style.thirdCol}>
					<div className={style.pop}>
						<img src={popSVG} alt="ProbRain" />
					 <span>{pop} %</span>
					</div>
					<div className={style.feelsLike}>
						<img src={feelsLikeSVG} alt="FeelsLike" />
						{rf} &deg;C
					</div>
					<div className={style.humidity}>
						<img src={humiditySVG} alt="Humidity" />
						<span>{humidity} %</span>
					</div>
				</div>
			</div>
		</div>

        )


    })

	return (
			<Carousel data={dailyCards} />

	)
	


	return 



	
}

