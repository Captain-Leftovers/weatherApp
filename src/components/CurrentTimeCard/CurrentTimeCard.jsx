import style from "./CurrentTimeCard.module.css"

export default function CurrentTimeCard (){
  
   
return (
    <div className={style.cardContainer}>
        <div className={style.currentTime}>(10:30)</div>
        <div className={style.secondRow}>
            <div className={style.deg}>(28&deg;)</div>
            <div className={style.detail}>(Sunny)</div>
            <div className={style.icon}>(icon)</div>
        </div>
        <div className={style.thirdRow}>
            <div className={style.rf}>(RF: 30&deg;)</div>
            <div className={style.separator}>|</div>
            <div className={style.humidity}>(Humidity: 40)</div>
            <div className={style.separator}>|</div>
            <div className={style.uv}>(UV: 35)</div>
            <div className={style.separator}>|</div>
            <div className={style.windSpeed}>(Wind Speed: 50)</div>
        </div>
    </div>
)
}