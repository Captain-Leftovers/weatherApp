import { useEffect, useState } from "react"
import { getWeather } from "../../services/weatherService"


export default function useFetch (city){
    const [weatherData, setWeatherData] = useState(null)
    const [errorStatus, setErrorStatus] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            const [data, error] = await getWeather(city)
            setWeatherData(data)
            setErrorStatus(error)
        }
        fetchWeather()

        return 
    }, [city])
   
return [weatherData, errorStatus]
}