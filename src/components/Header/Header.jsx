import LightDarkSvg from "./assets/LightDarkSvg"
import LocationSvg from "./assets/LocationSvg"
import style from "./Header.module.css"

export default function Header ({setCity}){
  let searchCity = 'Sydney';
  
  const handleOnChange = ()=>{
    
  }

return (
 <div className={style.headerContainer}>
    <div className="locationWrap">
        <p className="locationText">
            {searchCity}
        </p>
    </div>
    <div className={style.inputWrapper} >
        <input 
        type="text" 
        placeholder="enter city name here" 
        onChange={handleOnChange} 
        />
        <LocationSvg/>
    </div>
        <LightDarkSvg/>
 </div>
)
}