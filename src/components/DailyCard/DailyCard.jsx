import style from './DailyCard.module.css'

export default function DailyCard() {
	return (
		<div className={style.dailyCard}>
			<div className={style.time}>(13:45)</div>
			<div className={style.deg}>(28&deg;C)</div>
			<div className={style.rf}>(RF: 33&deg;)</div>
			<div className={style.detail}>(Cloudy)</div>
		</div>
	)
}
