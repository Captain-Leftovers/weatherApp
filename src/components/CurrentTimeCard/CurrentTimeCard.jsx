import style from "./CurrentTimeCard.module.css"

export default function CurrentTimeCard (){
  
   
return (
    <div className={style.cardContainer}>
        <div className={style.currentTime}>(10:30)</div>
        <div className={style.secondRow}>
            <div className={style.deg}>(28&deg;C)</div>
            <div className={style.detail}>(Sunny)</div>
            <div className={style.icon}>(icon)</div>
        </div>
        <div className={style.thirdRow}>
            <div className={style.rf}>(RF: 30&deg;)</div>
            <div className={style.separator}>|</div>
            <div className={style.humidity}>L:15&deg;C</div>
            <div className={style.separator}>|</div>
            <div className={style.humidity}>H:27&deg;C</div>
            <div className={style.separator}>|</div>
            <div className={style.windSpeed}>(Wind Speed: 50)</div>
        </div>
    </div>
)
}