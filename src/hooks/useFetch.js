import { useEffect, useState } from 'react'
import { currentWeatherCall } from '../../services/weatherService'

export default function useFetch(city, coord) {
	const [data, setData] = useState(null)
	const [errorStatus, setErrorStatus] = useState()
	try {useEffect(() => {
		if (!coord) {
			async function getWeather() {
				
            const weatherData =
            await currentWeatherCall(city)
            setData(weatherData)
        
			}
			getWeather()
		} else {

        }

		return
	}, [city])
} catch (e) {
    console.log(e.message);
}

	return [data , errorStatus]
}
