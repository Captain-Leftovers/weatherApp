import style from './Carousel.module.css' 
import DailyCard from "../DailyCard/DailyCard.jsx"

export default function Carousel () {
   
return (
    <div className={style.row}>
    <div className={style.header}>
      <h3 className={style.title}>Title</h3>
      <div className={style.progressBar}></div>
    </div>
    <div className={style.container}>
      <button className={`${style.handle} ${style.leftHandle}`} >
        <div className={style.text}>&#8249;</div>
      </button>
      <div className={style.slider}>
        <DailyCard />  {/* maybe add the carousel in the daily card */}
      </div>
      <button className={`${style.handle} ${style.rightHandle}`}>
        <div className={style.text}>&#8250;</div>
      </button>
    </div>
  </div>
)
}