import React, { useState } from "react";
import { Button, Row, Col, Card, Statistic } from "antd";

export default function Weather() {
  const [weatherdata, fetchweather] = useState({});
  const fetchData = async () => {
    const API_KEY = "1b061b79c5539f8cafcbfdf517f257a2";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=18.85&lon=73.88&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const { name, main, weather } = data;
    const { temp, temp_min, temp_max } = main;
    const { icon, mains, description } = weather[0];
    fetchweather({
      ...weatherdata,
      name: name,
      temp: temp,
      min_temp: temp_min,
      max_temp: temp_max,
      icon: icon,
      main: mains,
      description: description,
    });
    console.log(weatherdata.temp);
  };
  return (
    <>
      <Button onClick={fetchData} shape="circle">
        W
      </Button>
      <div className="weather">
        <span>
          {weatherdata.temp} <span>&deg;</span> C
        </span>
        <img
          style={{
            width: "50px",
            height: "50px",
          }}
          // src={`http://openweathermap.org/img/w/10d.png`}
          src={`http://openweathermap.org/img/wn/${weatherdata.icon}@2x.png`}
          alt=""
        />
      </div>
    </>
  );
}
