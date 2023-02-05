const API_KEY = import.meta.env.VITE_API_KEY
const weekdays = {
	Sun: 'Sunday',
	Mon: 'Monday',
	Tue: 'Tuesday',
	Wed: 'Wednesday',
	Thu: 'Thursday',
	Fri: 'Friday',
	Sat: 'Saturday',}

	
const getCurrentWeather = async (city) => {
	try {const currentWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
	 if(!currentWeatherData.ok){
		throw new Error('NOT FOUND')
	 }
	const currentWeather = await currentWeatherData.json()
	return [currentWeather, null]}
	catch (error) {
		return [null, error.message]}
}

const getOneCall = async (lat, lon) => {
	try {
		const oneCallData = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&appid=${API_KEY}&units=metric`)
	 	if(!oneCallData.ok){
		throw new Error(oneCallData.statusText)}

		const oneCall = await oneCallData.json()
	
	return [oneCall, null]
 	} catch (error) {
		return [null, error.message]
	}
}

const formattedTime = (dt, timezone) => {

	let currentTime = new Date(dt * 1000 + timezone * 1000)
	let dayMontYear = currentTime.toUTCString().slice(5,16)
	let weekDay = weekdays[currentTime.toUTCString().slice(0, 3)]
	let hoursMins = currentTime.toUTCString().slice(17, 22)
	const time = {
		weekDay,
		hoursMins,
		dayMontYear,
	}
	return time
}


 const getImageUrl = (imageCode, size = '2x') => {
	if (!imageCode){return}
	let url = `http://openweathermap.org/img/wn/${imageCode}@${size}.png`
	return url
 }


const weatherFormatter = (currentWeather, oneCall) => { 
	let time = formattedTime(currentWeather.dt, currentWeather.timezone)
	let imageCode = currentWeather.weather[0].icon
	let image = getImageUrl(imageCode)
	let rain = currentWeather.rain && currentWeather.rain['1h'] || 0



	oneCall.daily = oneCall.daily.map((day) => {
		let time = formattedTime(day.dt, currentWeather.timezone)
		let temp = Object.fromEntries(Object.entries(day.temp).map(([key, value]) => {
			return  [key, Math.round(value).toFixed()]
			}))
			let feelsLike = Object.fromEntries(Object.entries(day.feels_like).map(([key, value]) => {
			return  [key, Math.round(value).toFixed()]
			}))


		let humidity = Math.round(day.humidity).toFixed()
		let wind = day.wind_speed
		let description = day.weather[0].main
		let icon = getImageUrl(day.weather[0].icon)
		let pop = (day.pop * 100).toFixed()
		let rain = day.rain || 0
		return {time, temp, feelsLike, humidity, wind, description, icon, pop, rain}
	}).slice(1)
		
	oneCall.hourly = oneCall.hourly.map((hour) => {
		let time = formattedTime(hour.dt, currentWeather.timezone)
		let temp = Math.round(hour.temp).toFixed()
		let feelsLike = Math.round(hour.feels_like).toFixed()
		let humidity = Math.round(hour.humidity).toFixed()
		let wind = hour.wind_speed
		let description = hour.weather[0].main
		let icon = getImageUrl(hour.weather[0].icon)
		let pop = (hour.pop * 100).toFixed()
		let rain = hour.rain && hour.rain['1h'] || 0
		return {time, temp, feelsLike, humidity, wind, description, icon, pop, rain}

	}).slice(1)

	const weather = {
		time,
		city: currentWeather.name,
		country: currentWeather.sys.country,
		temperature: Math.round(currentWeather.main.temp).toFixed(),
		feelsLike: Math.round(currentWeather.main.feels_like).toFixed(),
		tempMin: Math.round(currentWeather.main.temp_min).toFixed(),
		tempMax: Math.round(currentWeather.main.temp_max).toFixed(),
		description: currentWeather.weather[0].main,
		image,
		rain,
		humidity: Math.round(currentWeather.main.humidity).toFixed(),
		wind: Math.round(currentWeather.wind.speed).toFixed(),
		pressure: currentWeather.main.pressure,
		daily: oneCall.daily,
		hourly: oneCall.hourly,
	}


	return weather

}

export const getWeather = async (city) => {
	const [currentWeather, currentError] = await getCurrentWeather(city)
	if(currentError){
		return [null, currentError]
	}
	const [oneCall, oneCallError] = await getOneCall(currentWeather.coord.lat, currentWeather.coord.lon)
	if(currentError || oneCallError){
		return [null,  'Internal error, please try again later']
	}
	const weather = weatherFormatter(currentWeather, oneCall)
	const error = currentError || oneCallError
	return [weather, error]

}





