import { useEffect, useState } from "react";
import "./index.css";
import WeatherInput from "./assets/weatherInput";
import WeatherDisplay from "./assets/weatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(true); // Flag for location loading

  const fetchWeather = async (city) => {
    const API_key = "0bfae60efbb745a1b2730028242211";
    // const API_key = "81b71b2312ae2ab6375a672b36233a92";
    const API_url = `http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${city}`;
    // const API_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(API_url);
      if (!res.ok) {
        const errorMessage = `Error: ${res.status} - ${res.statusText}`;
        throw new Error(errorMessage);
      }
      const data = await res.json();
      setWeatherData(data);
      console.log(data);
      
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationQuery = `${latitude},${longitude}`;
          fetchWeather(locationQuery); // Fetch weather using coordinates
          setLocationLoading(false); // Location fetched successfully
        },
        (error) => {
          console.error("Error fetching location:", error);
          setError("Unable to fetch your location. Showing default city.");
          fetchWeather("New York"); // Fallback to default city
          setLocationLoading(false); // Location error
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLocationLoading(false); // Location not supported
      fetchWeather("New York"); // Fallback to default city
    }
  };

  useEffect(() => {
    fetchUserLocationWeather(); // Fetch weather for user location on load
  }, []);

  return (
    <div className="container max-w-[450px] mx-auto h-screen bg-gradient-to-b from-[#47BFDF] to-[#4A91FF] p-6 text-xs">

      {/* Show loading message for location */}
      {/* {locationLoading && <p>Fetching your location...</p>} */}

      {/* Error or Retry for location */}
      {error && !locationLoading && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={fetchUserLocationWeather}>Try Again</button>
        </div>
      )}
      
      <WeatherInput fetchWeather={fetchWeather} />
      <WeatherDisplay
        loading={loading}
        error={error}
        weatherData={weatherData}
      />
    </div>
  );
}

export default App;
