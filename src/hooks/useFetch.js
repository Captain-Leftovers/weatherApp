import { useEffect, useState } from 'react'
import {
	currentWeatherCall,
	forecastWeatherCall,
} from '../../services/weatherService'

export default function useFetch(city) {
	const [data, setData] = useState(null)
	const [errorStatus, setErrorStatus] = useState(null)
	useEffect(() => {
		async function getWeather() {
			const [weatherData, errorData] =
				await currentWeatherCall(city).catch((e) => [
					null,
					e,
				])
			console.log(weatherData)

			const [forecastData, forecastErrorData] =
				await forecastWeatherCall(
					weatherData.coord
				).catch((e) => [null, e])
			console.log(forecastData)

			setData([weatherData, forecastData])
			setErrorStatus([errorData, forecastErrorData])
		}
		getWeather()
	}, [city])

	return [data, errorStatus]
}
//TODO see if you can get only the data from the onecall api call