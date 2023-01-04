const API_KEY = import.meta.env.VITE_API_KEY

export const currentWeatherCall = async (city) => {
	let weatherData = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	).then((res) => res.json())
	console.log(weatherData)
	const {
		coord: { lon, lat },
		weather,
		main: { temp, feels_like, temp_min, temp_max },
		wind,
		dt,
		sys: { country },
		name,
	} = weatherData

	const weekdays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	let currentTime = new Date(dt * 1000)
	const time = {
		weekDay: weekdays[currentTime.getDay()],
		hoursMins: currentTime.toLocaleTimeString().slice(0, 5),
	}

	console.log(time.hoursMins)

	const { main: condition, icon } = weather[0]
	const { speed: windSpeed } = wind
	return {
		time,
		lon,
		lat,
		condition,
		icon,
		temp,
		feels_like,
		temp_min,
		temp_max,
		windSpeed,
		country,
		name,
	}
}
