import HourlyCard from "./components/HourlyCard/HourlyCard"
import CurrentTimeCard from "./components/CurrentTimeCard/CurrentTimeCard.jsx"
import Header from "./components/Header/Header.jsx"
import DailyCard from "./components/DailyCard/DailyCard"

function App() {
	return <div>
		<Header/>
		<CurrentTimeCard/>
		<HourlyCard/>
		<DailyCard/>
	</div>
}

export default App
