import style from './DailyCard.module.css'
import imagePlaceholder  from '../../assets/01d@2x.png'
import Carousel from '../Carousel/Carousel';


const dummyData = [{},{},{},{},{},{}]


export default function DailyCard({daily = dummyData}) {

	
	let dailyCards = daily?.map((day) => {
		let weekDay = day?.time?.weekDay || 'Monday'
		let deg = day?.temp?.day || '23'
		let rf = day?.feelsLike?.day || '23'
		let detail = day?.description || 'Rainy'
		let icon = day?.icon || '01d'
		let iconUrl = icon || imagePlaceholder
        return (
        <div className={style.dailyCard} key={crypto.randomUUID()} >
			<div className={style.content}>
				<div className={style.time}>{weekDay}</div>
				<div className={style.something}>xxxx</div>
				<div className={style.deg}>{deg}&deg;C</div>
				<div className={style.rf}>(RF: {rf}&deg;)</div>
				<div className={style.detail}>{detail}</div>
				<div className={style.icon} style={{backgroundImage: `url(${iconUrl})`}} ></div>
			</div>
		</div>

        )


    })

	return (
		<div className={style.cards}>
			<Carousel data={dailyCards} />
		</div>

	)
	


	return 



	
}

