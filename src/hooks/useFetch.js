import { useEffect, useState } from 'react'
import { currentWeatherCall } from '../../services/weatherService'

export default function useFetch(city, coord) {
	const [data, setData] = useState(null)
	const [errorStatus, setErrorStatus] = useState()
	useEffect(() => {
		if (!coord) {
			async function getWeather() {
				
            const [weatherData, errorData] =
            await currentWeatherCall(city).catch(e => [null, e])
			//TODO make sure to set the data and error status !!!
            setData(weatherData)
			setErrorStatus(errorData)
        
			}
			getWeather()
		} else {

        }

		return
	}, [city])


	return [data , errorStatus]
}
