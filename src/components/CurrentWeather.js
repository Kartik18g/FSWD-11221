import '../styles/Weather.css'

const CurrentWeather = ({weatherInfo,location}) => {
    return ( 
        <div className="Weather">
            <div className="Weather__info">
                <img
                    className="Weather__icon"
                    src={
                        "https://openweathermap.org/img/wn/" +
                        weatherInfo.current.weather[0].icon +
                        ".png"
                    }
                    alt={weatherInfo.current.weather[0].main}
                />
                <ul className="Weather__list">
                    <li className="list__temperature">
                        {Math.round(weatherInfo.current.temp)}
                        <sup className="list__temperature-symbol">°C</sup>
                    </li>
                    <li> Humidity: {weatherInfo.current.humidity}% </li>
                    <li>
                        {" "}
                        Wind: {Math.round(weatherInfo.current.wind_speed * 3.6)} km/h{" "}
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default CurrentWeather;