import LightDarkSvg from './assets/LightDarkSvg'
import LocationSvg from './assets/LocationSvg'
import style from './Header.module.css'


export default function Header({ setCity, city }) {

	function inputHandler(e) {
		if (e.keyCode === 13) {
			let input = (e.currentTarget.value)
			let capInput = input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase()
			setCity(capInput)
			e.currentTarget.value = ''
			e.currentTarget.blur()
		}
	}

	return (
		<div className={style.headerContainer}>
			<div className="locationWrap">
				<p className="locationText">{city}</p>
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
