import style from "./HourlyCard.module.css"
import imagePlaceholder  from '../../assets/01d@2x.png'

export default function HourlyCard (){
    //TODO fix icon
	let iconUrl = /* iconNew ||  */imagePlaceholder;
   
return (
    <div className={style.hourlyCard}>
        <div className={style.time}>(13:45)</div>
        <div className={style.deg}>(28&deg;C)</div>
        <div className={style.rf}>(RF: 33&deg;)</div>
        <div className={style.detail}>(Cloudy)</div>
        <div className={style.icon} style={{backgroundImage: `url(${iconUrl})`}} ></div>
    </div>
)
}