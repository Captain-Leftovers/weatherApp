const API_KEY = import.meta.env.VITE_API_KEY

export const currentWeatherCall = async (city) => {
	let weatherData = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	).then((res) => res.json())
	console.log(weatherData);
	let {
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
	

	
	const { main: condition, icon } = weather[0]
	let { speed: windSpeed } = wind
	windSpeed = Math.round(windSpeed)
	temp = Math.round(temp)
	feels_like = Math.round(feels_like)
	temp_min = Math.round(temp_min)
	temp_max = Math.round(temp_max)

	console.log(temp)
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


//TODO remove all console logs from the project !!!