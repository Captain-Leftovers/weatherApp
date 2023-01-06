const API_KEY = import.meta.env.VITE_API_KEY

export const currentWeatherCall = async (city) => {
	let weatherData = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	).then((res) => {
		console.log(res.status);
		return res.json()})

	let {
		coord: { lon, lat },
		weather,
		main: { temp, feels_like, temp_min, temp_max },

		wind,
		dt,
		sys: { country },
		name,
		timezone,
	} = weatherData

	const weekdays = {
		Sun: 'Sunday',
		Mon: 'Monday',
		Tue: 'Tuesday',
		Wed: 'Wednesday',
		Thu: 'Thursday',
		Fri: 'Friday',
		Sat: 'Saturday',
	}

	let currentTime = new Date(dt * 1000 + timezone * 1000)
	let weekDay = weekdays[currentTime.toUTCString().slice(0, 3)]
	let hoursMins = currentTime.toUTCString().slice(17, 22)
	const time = {
		weekDay,
		hoursMins,
	}

	console.log(time)

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

export const oneCallFetch = async (coord) => {
	let oneCallData = await fetch(
		`https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}`
	)
	let res = await oneCallData.json()
	console.log(res)
}

export const getImageUrl = (imageCode, size = '2x') => {
	if (!imageCode) return
	let url = `http://openweathermap.org/img/wn/${imageCode}@${size}.png`
	return url
}
