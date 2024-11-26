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
    <form onSubmit={handleSubmit} className="flex gap-2 text-sm outline-0">
      <input
        className="bg-[#FDFCFC] rounded-xl w-full p-1 px-3 text-[#838BAA] outline-0 puf-box-shadow"
        type="text"
        placeholder="Search city name..."
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-white px-4 py-1.5 rounded-xl puf-box-shadow text-[#444E72] font-semibold outline-0"
      >
        Search
      </button>
    </form>
  );
}

export default WeatherInput;
