import style from "./HourlyCard.module.css"
import imagePlaceholder  from '../../assets/01d@2x.png'

export default function HourlyCard ({hourly}){




    //TODO fix hours to display maybe just until day ends or 24 hours cycle and maybe add carousell to slide on 5 hours  cards or something

let hourlyCards = hourly?.map((hour, index) => {
    let day = hour.time.weekDay || 'Monday'
    let time = hour.time.hoursMins || '08:00'
    let deg = hour.temp || '23'
    let rf = hour.feelsLike || '23'
    let detail = hour.description || 'Rainy'
    let icon = hour.icon || '01d'
    let iconUrl = icon || imagePlaceholder;
    let keyId = crypto.randomUUID()
        return  (
            <div className={style.hourlyCard} key={crypto.randomUUID()}>
                <div className={style.time}>{time}</div>
                <div className={style.time}>{day}</div>
                <div className={style.deg}>{deg}&deg;C</div>
                <div className={style.rf}>{rf}&deg;</div>
                <div className={style.detail}>{detail}</div>
                <div className={style.icon} style={{backgroundImage: `url(${iconUrl})`}} ></div>
            </div>
        )


    })

return  (
    <div className={style.cards}>{hourlyCards}</div>
    )
}
    