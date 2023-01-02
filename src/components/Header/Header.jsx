import LightDarkSvg from './assets/LightDarkSvg'
import LocationSvg from './assets/LocationSvg'
import style from './Header.module.css'

let searchCity = 'Sydney'

export default function Header({ setCity }) {
	function inputHandler(e) {
		if (e.keyCode === 13) {
			let input = e.currentTarget.value
			setCity(input)
			e.currentTarget.value = ''
			e.currentTarget.blur()
			searchCity =
				input.slice(0, 1).toUpperCase() +
				input.slice(1).toLowerCase()
		}
	}

	return (
		<div className={style.headerContainer}>
			<div className="locationWrap">
				<p className="locationText">{searchCity}</p>
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
