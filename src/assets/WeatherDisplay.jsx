function WeatherDisplay({ weatherData, error, loading }) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!weatherData) return null;
  
    const { current, location } = weatherData;
  
    return (
      <div>
        <h2>
          {location.name}, {location.country}
        </h2>
        <p>
          <img
            src={current.condition.icon}
            alt={current.condition.text}
            style={{ verticalAlign: "middle" }}
          />
          {current.condition.text}
        </p>
        <p>Temperature: {current.temp_c}°C</p>
        <p>Humidity: {current.humidity}%</p>
        <p>Wind Speed: {current.wind_kph} km/h</p>
      </div>
    );
  }
  
  export default WeatherDisplay;
  