import LightDarkSvg from "./assets/LightDarkSvg"
import LocationSvg from "./assets/LocationSvg"


export default function Header (){
  
   
return (
 <div className="headerContainer">
    <div className="locationWrap">
        <p className="locationText">
            (Location Here)
        </p>
    </div>
    <div className="inputWrapper">
        <input type="text" />
    </div>
    <div className="locationSvgWrapper">
        <LocationSvg/>
        <LightDarkSvg/>
    </div>
 </div>
)
}