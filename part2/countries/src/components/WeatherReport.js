const WeatherReport = ({ weather }) => {
  if (weather.current) {
    return (
      <>
        <p><b>temperature:</b> {weather.current.temperature} Celcius</p>
        <img src={weather.current.weather_icons} alt={weather.current.weather_descriptions} />
        <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
      </>
    )
  } else {
    return <p><i>Loading...</i></p>
  }
}

export default WeatherReport
