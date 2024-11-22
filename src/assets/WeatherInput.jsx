import { useState } from "react";

function WeatherInput({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city?.trim()) {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city name..."
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default WeatherInput;
