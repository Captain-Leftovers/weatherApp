import HourlyCard from "../HourlyCard/HourlyCard";
import style from './HourlyComponent.module.css'

export default function HourlyComponent ({hourlyWeather}){
 
 
   
return (   
    <div className={style.hourlyComponent}>
        <HourlyCard />
    </div>
)
}