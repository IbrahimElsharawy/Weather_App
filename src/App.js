import React, { useState } from "react";
import sunset from "./assets/sunset.jpg";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7c5488d3cfcaa6999d848c4a21e0a8cd`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setLocation('');
        console.log(response.data);
      });
    }
  };

  const containerStyle = {
    backgroundImage: `url(${sunset})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixe",
  };
  return (
    <div className="w-full h-screen relative text-white overflow-hidden" style={containerStyle}>
      <div
        className="w-full h-full relative z-10"
        style={{ backgroundColor: "rgba(0,0,0,.4)" }}
      >
        <div className="text-center p-4">
          <input
          
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
        placeholder="Enter Location"
        className="px-10 py-3 border rounded-lg placeholder:text-white "
        style={{ backgroundColor: "rgba(225,225,255,.1)",
        borderColor:"rgba(225,225,255,.8)"
         }}
           type="text" />
        </div>
        <div className="flex justify-between	 flex-col relative top-[10%] m-w-[700px] h-[600px] m-auto px-4">
          <div className="w-full mx-auto my-4">
            <div className="">
              <p className="text-base	">{data.name}</p>
            </div>
            <div className="">
            {data.main ? <h1 className="text-4xl md:text-8xl">{data.main.temp.toFixed()} °F</h1> : null}
            </div>
            <div className="absolute right-8 transform origin-top-left  rotate-[270deg] capitalize text-xl">
              {data.weather ? <p>{data.weather[0].main}</p> :null}
            </div>
          </div>


          
         
          <div
            className="flex justify-evenly text-center  w-full md:w-[50%] p-4 my-4 mx-auto border rounded-lg font-bold text-sm md:text-xl"
            style={{ backgroundColor: "rgba(225,225,225,.2)" }}
          >
            <div className="">
            {data.main ? <p className="font-bold">{data.main.feels_like.toFixed()}</p> :null}
              <p className="capitalize ">feels like</p>
            </div>
            <div className="">
            {data.main ? <p className="font-bold">{data.main.humidity} %</p> :null}
              <p className="capitalize ">humidity</p>
            </div>
            <div className="">
            {data.wind ? <p className="font-bold">{data.wind.speed.toFixed()} MPH</p> : null}
              <p className="capitalize ">wind speed</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
