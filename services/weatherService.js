const API_KEY = import.meta.env.VITE_API_KEY

export const currentWeatherCall = async (city) => {
	let weatherData = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	).then((res) => res.json())
	return weatherData
}
//TODO	 clean the data and return only what you will use