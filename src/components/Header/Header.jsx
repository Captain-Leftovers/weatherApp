import LightDarkSvg from './assets/LightDarkSvg'
import LocationSvg from './assets/LocationSvg'
import style from './Header.module.css'


let notFoundPlace;
export default function Header({ isError, setCity, placeName }) {
	//TODO add advanced search by country parameter in the url
	function inputHandler(e) {
		if (e.keyCode === 13) {
			let input = (e.currentTarget.value).trim()
			notFoundPlace = input;
			setCity(input)
			e.currentTarget.value = ''
			e.currentTarget.blur()
		}
	}
	return (
		<div className={style.headerContainer}>
			<div className="locationWrap">
				<p className="locationText">{placeName || notFoundPlace}<span>{isError ? ` ${isError}`:''}</span></p>
			</div>
			<div className={style.inputWrapper}>
				<input
					onKeyDown={inputHandler}
					type="text"
					placeholder="enter city name here"
				/>
				<LocationSvg />
			</div>
			<LightDarkSvg />
		</div>
	)
}
