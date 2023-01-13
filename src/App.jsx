import CurrentTimeCard from './components/CurrentTimeCard/CurrentTimeCard.jsx'
import Header from './components/Header/Header.jsx'
import DailyCard from './components/DailyCard/DailyCard.jsx'
import style from './App.module.css'
import { useState } from 'react'

import useFetch from './hooks/useFetch.js'
import HourlyComponent from './components/HourlyComponent/HourlyComponent.jsx'

function App() {
	const [city, setCity] = useState('Paris')
	const [weather, errorStatus] = useFetch(city, 'current')
	console.log(weather);
	console.log(errorStatus);
	
	let currentWeather = weather ? weather[0] : null
		//TODO add error handling for the fetch
	
	
	return (
		<div className={weather ? style.app : style.appBlur}>
			<Header setCity={setCity} city={city} />
			<CurrentTimeCard {...currentWeather} />
			<HourlyComponent/>
			<DailyCard />
		</div>
	)
}
// this is a comment
export default App
//TODO remove all console logs from the project !!!
//TODO remove all comments
