import Draggable, { DraggableCore } from "react-draggable";
import { Card, Button, FloatButton, Input } from "antd";
import {
  QuestionCircleOutlined,
  SyncOutlined,
  MinusOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

import "./style.css";
const { Search } = Input;

export default function Dashboard() {
  const [url, setURL] = useState("");
  const [ytvisible, ytsetVisible] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const handleyt = () => {
    ytsetVisible((prev) => !prev);
  };

  return (
    <>
      {ytvisible && (
        <div>
          <Draggable bounds="html">
            <Card
              size="small"
              title="Youtube Player"
              extra={
                <Button
                  type="text"
                  icon={<MinusOutlined />}
                  onClick={handleyt}
                />
              }
              style={{ width: "50%" }}
            >
              <Search
                placeholder="input youtube link"
                onSearch={setURL}
                enterButton
              />
              {isDesktopOrLaptop && (
                <ReactPlayer
                  style={{
                    marginTop: "5%",
                    margin: "auto",
                  }}
                  url={url}
                  controls={true}
                  width={"100%"}
                />
              )}
              {isTabletOrMobile && (
                <ReactPlayer
                  style={{
                    marginTop: "5%",
                    margin: "auto",
                  }}
                  url={url}
                  controls={true}
                  width={"100%"}
                  height={"250px"}
                />
              )}
            </Card>
          </Draggable>
        </div>
      )}

      <FloatButton.Group shape="square">
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton tooltip={<div>custom badge color</div>} />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton
          icon={<YoutubeOutlined />}
          tooltip={<div>Toggle Youtube Player</div>}
          onClick={handleyt}
        />
      </FloatButton.Group>
    </>
  );
}
