import HourlyCard from './components/HourlyCard/HourlyCard.jsx'
import CurrentTimeCard from './components/CurrentTimeCard/CurrentTimeCard.jsx'
import Header from './components/Header/Header.jsx'
import DailyCard from './components/DailyCard/DailyCard.jsx'
import style from './App.module.css'
import { useState } from 'react'

function App() {
	const [city, setCity] = useState({
		name: 'Sydney',
		lat: -33.86785,
		lon: 151.2,
	})

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
