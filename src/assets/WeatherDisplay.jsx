function WeatherDisplay({ weatherData, error, loading }) {
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!weatherData) return null;

  const { current, location } = weatherData;

  return (
    <div className="flex flex-col mt-2">
      <img
        src={current.condition.icon}
        alt={current.condition.text}
        className="w-4/6 mx-auto drop-shadow-lg"
      />
      <div>
        <div className="bg-white bg-opacity-30 rounded-xl p-3 border-2  border-t-[#fff3] border-r-[#fff3] border-b-[#0001] border-l-[#0001] my-4 text-center">
          <h2 className="text-base drop-shadow-lg text-white">
            {location.name}, {location.country}
          </h2>
          <p className="text-7xl text-white font-semibold drop-shadow-lg py-2">
            {current.temp_c}°
          </p>
          <p className="text-white font-semibold text-base drop-shadow py-2">
            {current.condition.text}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white bg-opacity-30 rounded-xl p-3 border-2  border-t-[#fff3] border-r-[#fff3] border-b-[#0001] border-l-[#0001] text-center w-full">
            <p className="flex flex-col text-white gap-0.5 drop-shadow">
              <span className="font-semibold text-[13px]">Wind Speed</span>
              <span>{current.wind_kph} km/h</span>
            </p>
          </div>
          <div className="bg-white bg-opacity-30 rounded-xl p-3 border-2  border-t-[#fff3] border-r-[#fff3] border-b-[#0001] border-l-[#0001] text-center w-full">
            <p className="flex flex-col text-white gap-0.5 drop-shadow">
              <span className="font-semibold text-[13px]">Humidity</span>
              <span>{current.humidity}%</span>
            </p>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="flex gap-2 overflow-x-scroll mt-4 pb-2 pl-2 mr-2">
        {weatherData.forecast.forecastday.map((day) => (
          <div
            key={day.date}
            className="bg-white bg-opacity-30 rounded-xl p-3 text-center w-fit"
          >
            <p className="text-white text-sm">{new Date(day.date).toLocaleDateString()}</p>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.icon}
              className="mx-auto drop-shadow-lg"
            />
            <p className="text-xl text-white font-semibold">{day.day.avgtemp_c}°</p>
            <p className="text-white">{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
