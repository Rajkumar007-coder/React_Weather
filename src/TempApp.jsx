import React, { useEffect, useState } from "react";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9e2676b128d4fbdb2b7e5a4a6de97998`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(response);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°C | Max : {city.temp_max}°C
              </h3>
            </div>

            <div className="wave_one"></div>
            <div className="wave_two"></div>
            <div className="wave_three"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default TempApp;
