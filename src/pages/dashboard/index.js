import { Space, Switch, ConfigProvider, theme } from "antd";
import YouTube from "widgets/youtube-player/YouTube";
import SideWidget from "widgets/sidewidget/SideWidget";
import React, { useState } from "react";
import "./style.css";

export default function Dashboard() {
  const [ytvisible, ytsetVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const handleyt = () => {
    ytsetVisible((prev) => !prev);
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

        <YouTube ytshow={ytvisible} ythandler={handleyt} />
        <SideWidget ytshow={ytvisible} ythandler={handleyt} themehandler />
      </ConfigProvider>
    </>
  );
}
