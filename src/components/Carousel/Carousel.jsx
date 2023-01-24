import style from './Carousel.module.css' 
import DailyCard from "../DailyCard/DailyCard.jsx"
import { useState } from 'react'

export default function Carousel ({data = []}) {
const [sliderIndex, setSliderIndex] = useState({ 
  '--slider-index': 0,
}) 



const handleLeft = () => {
  if (sliderIndex['--slider-index'] > 0) {
    setSliderIndex({
      '--slider-index': sliderIndex['--slider-index'] - 1,
    })
  }
}

const handleRight = () => {
  if (sliderIndex['--slider-index'] < data.length - 1) {
    setSliderIndex({
      '--slider-index': sliderIndex['--slider-index'] + 1,
    })
  
}
}

return (
    
    <div className={style.container}>
      <button onClick={()=> handleLeft()} className={`${style.handle} ${style.leftHandle}`  } >
        <div  className={style.text}>&#8249;</div>
      </button>
      <div  style={sliderIndex}   className={style.slider}>
        {data}
      </div>
      <button onClick={()=> handleRight()} className={`${style.handle} ${style.rightHandle}`}>
        <div  className={style.text}>&#8250;</div>
      </button>
    </div>
)
}