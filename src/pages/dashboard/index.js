import { Space, Switch, ConfigProvider, theme } from "antd";
import YouTube from "widgets/youtube-player/YouTube";
import SideWidget from "widgets/sidewidget/SideWidget";
import Jokes from "widgets/jokes/Jokes";
import Spotify from "widgets/spotify/Spotify";
import Weather from "widgets/weather/Weather";
import Dictionary from "widgets/dictionary/Dictionary";
import React, { useState } from "react";
import "./style.css";

export default function Dashboard() {
  const [visibleyt, setvisibleyt] = useState(false);
  const [closeyt, setcloseyt] = useState(true);

  const [visiblesf, setvisiblesf] = useState(false);
  const [closesf, setclosesf] = useState(true);

  const [visibledict, setvisibledict] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const handlevisibleyt = () => {
    setvisibleyt((prev) => !prev);
  };
  const handlecloseyt = (data) => {
    setcloseyt(data);
  };

  const handlevisiblesf = () => {
    setvisiblesf((prev) => !prev);
  };
  const handleclosesf = (data) => {
    setclosesf(data);
  };

  const handlevisibledict = () => {
    setvisibledict((prev) => !prev);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <div className="theme-switcher">
          <Switch
            size="medium"
            checked={darkMode}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            onChange={() => {
              localStorage.setItem("darkMode", !darkMode);
              setDarkMode(!darkMode);
            }}
          />
        </div>
        <div className="weather">
          <Weather />
        </div>
        <div className="joke">
          <Jokes />
        </div>
        <Dictionary
          visibledict={visibledict}
          handlevisibledict={handlevisibledict}
        />
        <YouTube
          visibleyt={visibleyt}
          handlevisibleyt={handlevisibleyt}
          closeyt={closeyt}
          handlecloseyt={handlecloseyt}
        />
        <Spotify
          link="https://open.spotify.com/playlist/4dJSLiR8n2ZQUccpyXYKvE"
          visiblesf={visiblesf}
          handlevisiblesf={handlevisiblesf}
          closesf={closesf}
          handleclosesf={handleclosesf}
        />
        <SideWidget
          handlevisibleyt={handlevisibleyt}
          closeyt={closeyt}
          handlecloseyt={handlecloseyt}
          handlevisiblesf={handlevisiblesf}
          closesf={closesf}
          handleclosesf={handleclosesf}
          handlevisibledict={handlevisibledict}
        />
      </ConfigProvider>
    </>
  );
}
