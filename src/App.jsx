import HourlyCard from './components/HourlyCard/HourlyCard.jsx'
import CurrentTimeCard from './components/CurrentTimeCard/CurrentTimeCard.jsx'
import Header from './components/Header/Header.jsx'
import DailyCard from './components/DailyCard/DailyCard.jsx'
import style from './App.module.css'
import { useEffect, useState } from 'react'

import { currentWeatherCall } from '../services/weatherService'

function App() {
	const [city, setCity] = useState('Paris')
	const [currentWeather, setCurrentWeather] = useState(null)

	console.log(currentWeather)
	useEffect(() => {
		let isCalled = false
		async function getWeather() {
			const weatherData = await currentWeatherCall(city)
			if (!isCalled) setCurrentWeather(weatherData)
		}
		getWeather()
		return () => (isCalled = true)
	}, [city])

	return (
		<div className={currentWeather ? style.app : style.appBlur}>
			<Header setCity={setCity} city={city} />
			<CurrentTimeCard {...currentWeather} />
			<HourlyCard />
			<DailyCard />
		</div>
	)
}
// this is a comment
export default App
//TODO remove all console logs from the project !!!
