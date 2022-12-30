import style from "./HourlyCard.module.css"

export default function HourlyCard (){
  
   
return (
    <div className={style.hourlyCard}>
        <div className={style.time}>(13:45)</div>
        <div className={style.deg}>(28&deg;C)</div>
        <div className={style.rf}>(RF: 33&deg;)</div>
        <div className={style.detail}>(Cloudy)</div>
    </div>
)
}