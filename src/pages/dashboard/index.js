import { ConfigProvider, theme } from "antd";
import YouTube from "widgets/youtube-player/YouTube";
import SideWidget from "widgets/sidewidget/SideWidget";
import React, { useState } from "react";
import "./style.css";

export default function Dashboard() {
  const [ytvisible, ytsetVisible] = useState(false);
  const handleyt = () => {
    ytsetVisible((prev) => !prev);
  };
  return (
    <>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <YouTube show={ytvisible} minimize={handleyt} />
        <SideWidget ytmin={handleyt} />
      </ConfigProvider>
    </>
  );
}
