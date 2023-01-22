import style from './Carousel.module.css' 
import DailyCard from "../DailyCard/DailyCard.jsx"

export default function Carousel ({days = []}) {

let sliderIndex = { 
  '--slider-index': 0,
}



return (
    
    <div className={style.container}>
      <button className={`${style.handle} ${style.leftHandle}`} >
        <div className={style.text}>&#8249;</div>
      </button>
      <div  style={sliderIndex}   className={style.slider}>
        {days}
      </div>
      <button className={`${style.handle} ${style.rightHandle}`}>
        <div className={style.text}>&#8250;</div>
      </button>
    </div>
)
}