function WeatherDisplay({ weatherData, error, loading }) {
  if (loading) return <p>Loading...</p>;
  // if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!weatherData) return null;

  const { current, location } = weatherData;

  return (
    <div className="flex flex-col mt-2">
      <div className="my-4 p-2 text-center">
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className="w-4/6 mx-auto drop-shadow-lg"
        />
        <h2 className="text-2xl font-semibold drop-shadow-lg">
          {location.name}, {location.country}
        </h2>
      </div>

      <div>
        <div className="bg-white bg-opacity-30 rounded-xl p-3 border-2  border-t-[#fff3] border-r-[#fff3] border-b-[#0001] border-l-[#0001] text-center my-4">
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
    </div>
  );
}

export default WeatherDisplay;
