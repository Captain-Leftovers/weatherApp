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
		const oneCallData = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
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
	let weekDay = weekdays[currentTime.toUTCString().slice(0, 3)]
	let hoursMins = currentTime.toUTCString().slice(17, 22)
	const time = {
		weekDay,
		hoursMins,
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

	const weather = {
		time,
		city: currentWeather.name,
		temperature: currentWeather.main.temp,
		feelsLike: currentWeather.main.feels_like,
		tempMin: currentWeather.main.temp_min,
		tempMax: currentWeather.main.temp_max,
		description: currentWeather.weather[0].description,
		image,
		humidity: currentWeather.main.humidity,
		wind: currentWeather.wind.speed,
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





