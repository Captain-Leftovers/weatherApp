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
				
				
				<div className={style.wrapper}>
				<p className={style.locationText}>{placeName || notFoundPlace}<span>{isError ? ` ${isError}`:''}</span></p>
					<input
						onKeyDown={inputHandler}
						type="text"
						placeholder="enter city name here"
						/>

						<div></div>
				</div>
			</div>
	
	)
}
//TODO make light dark theme or delete icon