import HourlyCard from './components/HourlyCard/HourlyCard.jsx'
import CurrentTimeCard from './components/CurrentTimeCard/CurrentTimeCard.jsx'
import Header from './components/Header/Header.jsx'
import DailyCard from './components/DailyCard/DailyCard.jsx'
import style from './App.module.css'
import { useEffect, useState } from 'react'

import { currentWeatherCall } from '../services/weatherService'

function App() {
	const [city, setCity] = useState('Sydney')
	const [currentWeather, setCurrentWeather] = useState(null)

	
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
		<div className={style.app}>
			<Header setCity={setCity} />
			<CurrentTimeCard />
			<HourlyCard />
			<DailyCard />
		</div>
	)
}

export default App
