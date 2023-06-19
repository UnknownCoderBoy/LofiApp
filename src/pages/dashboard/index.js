import { Space, Switch, ConfigProvider, theme } from "antd";
import YouTube from "widgets/youtube-player/YouTube";
import SideWidget from "widgets/sidewidget/SideWidget";
import Jokes from "widgets/jokes/Jokes";
import React, { useState } from "react";
import "./style.css";

export default function Dashboard() {
  const [visibleyt, setvisibleyt] = useState(false);
  const [closeyt, setcloseyt] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const handlevisibleyt = () => {
    setvisibleyt((prev) => !prev);
  };
  const handlecloseyt = (data) => {
    setcloseyt(data);
    console.log("close: " + data);
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
            size="small"
            checked={darkMode}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            onChange={() => {
              localStorage.setItem("darkMode", !darkMode);
              setDarkMode(!darkMode);
            }}
          />
        </div>
        <div className="joke">
          <Jokes />
        </div>

        <YouTube
          visibleyt={visibleyt}
          handlevisibleyt={handlevisibleyt}
          closeyt={closeyt}
          handlecloseyt={handlecloseyt}
        />
        <SideWidget
          handlevisibleyt={handlevisibleyt}
          closeyt={closeyt}
          handlecloseyt={handlecloseyt}
        />
      </ConfigProvider>
    </>
  );
}
