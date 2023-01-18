import CurrentTimeCard from './components/CurrentTimeCard/CurrentTimeCard.jsx'
import Header from './components/Header/Header.jsx'
import DailyCard from './components/DailyCard/DailyCard.jsx'
import style from './App.module.css'
import { useState } from 'react'

import useFetch from './hooks/useFetch.js'
import HourlyCard from './components/HourlyCard/HourlyCard.jsx'

function App() {
	const [city, setCity] = useState('Sydney')
	const [weather, errorStatus] = useFetch(city, 'current')
		//TODO add error handling for the fetch

		console.log(weather);
	return (
		
		<div className={weather || errorStatus ? style.app : style.appBlur} >
			<Header isError={errorStatus} setCity={setCity} placeName={weather?.city} />
			<CurrentTimeCard {...weather} />
			<HourlyCard hourly={weather?.hourly}/>
			<DailyCard daily={weather?.daily} />
		</div>

	)
}

export default App
//TODO remove all console logs from the project !!!
//TODO remove all comments
