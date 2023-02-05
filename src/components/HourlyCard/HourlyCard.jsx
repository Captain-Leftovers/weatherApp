import style from "./HourlyCard.module.css"
import imagePlaceholder  from '../../assets/01d@2x.png'
import Carousel from "../Carousel/Carousel.jsx"
import vialUpSVG from '../../assets/vialUp.svg'
import vialDownSVG from '../../assets/vialDown.svg'
import vialSVG from '../../assets/vial.svg'
import windSVG from '../../assets/wind.svg'
import humiditySVG from '../../assets/humidity.svg'
import feelsLikeSVG from '../../assets/FeelsLike.svg'
import popSVG from '../../assets/pop.svg'

const dummyData = [{},{},{},{},{},{}]

export default function HourlyCard ({hourly = dummyData}){
    console.log(hourly)


    //TODO fix hours to display maybe just until day ends or 24 hours cycle and maybe add carousell to slide on 5 hours  cards or something

let hourlyCards = hourly?.map((hour) => {
    let day = hour?.time?.weekDay || 'Monday'
    let time = hour?.time?.hoursMins || '08:00'
    let deg = hour?.temp || '0'
    let rf = hour?.feelsLike || '0'
    let detail = hour?.description || 'Rainy'
    let icon = hour?.icon || '01d'
    let iconUrl = icon || imagePlaceholder;
        return  (


        <div className={style.hourlyCard} key={crypto.randomUUID()}>
            <div className={style.content}>
                <div className={style.firstCol}>
                    <div className={style.temp}>
                        <img src={vialSVG} alt="temp" />
                        <span>{deg} &deg;C</span>
                    </div>
                </div>
                <div className={style.secondCol}>
                    <div className={style.time}>
                        <p>{time}</p>
                        <p>{day}</p>
                    </div>
                    <div className={style.detail}>
                        {detail}
                    </div>
					<img src={iconUrl} alt="weather icon" className={style.weatherIcon} />
                </div>
                <div className={style.thirdCol}>
                    <div className={style.feelsLike}>
                        <img src={feelsLikeSVG} alt="" />
                        <span>{rf} &deg;C</span>
                    </div>
                </div>
            </div>
        </div>
          
        )


    })

return  (
    <div className={style.cards}>
        <Carousel data={hourlyCards} />
    </div>
    )
}
    