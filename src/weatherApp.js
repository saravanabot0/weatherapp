import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

function WeatherApp() {

  const [apiData, setApiData] = useState(null);
  const [inputData, setInputData] = useState("Chennai");

  useEffect(()=>{
      var data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=416c3f13499bc9f54e29f8a85c214fd8`);
      var apiData = data.then((item)=>item.json());
      apiData.then((value)=> setApiData(value));
  },[inputData]);

  const submittingFrom = (event) => {
    console.dir(event.target[0].value);
    setInputData(event.target[0].value);
    event.preventDefault();
  }
  console.log(apiData, inputData);
  return (
    <>
      <div className="overall">
        <div className="card">
          <h1>Weather App</h1>
          <form className="wrap" onSubmit={(e)=>submittingFrom(e)}>
            <input type="text" placeholder="Enter your city name" />
            <button type="submit" className="icon">
              <FcSearch />
            </button>
          </form>

          <h1>{apiData?.name}</h1>
          <h1>
            <span>
              <FaCloudShowersHeavy />
            </span>{" "}
            {/* {console.log(apiData.length)} */}
            <span>{apiData?.weather[0].main}</span>
          </h1>
          <div className="box">
            <div className="sec1">
              <p>Humidity</p>
              <span>
                <WiHumidity />
              </span>
              <span>{apiData?.main.humidity}</span>
            </div>

            <div className="sec1">
              <p>Wind Speed</p>
              <span>
                <FaWind />
              </span>
              <span>{apiData?.wind.speed}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;