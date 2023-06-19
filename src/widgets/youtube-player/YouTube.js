import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Card, Button, Input } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import Draggable from "react-draggable";
import { useMediaQuery } from "react-responsive";

const { Search } = Input;

export default function Youtube(props) {
  const [linkdata, setURL] = useState("");

  const updatelink = (url) => {
    setURL({
      ...linkdata,
      url: url,
      playable: ReactPlayer.canPlay(url),
    });
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <Draggable bounds="html">
      <Card
        size="small"
        title="Youtube Player"
        extra={
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={props.ythandler}
          />
        }
        style={{
          width: "50%",
          visibility: props.ytshow ? "visible" : "hidden",
          opacity: props.ytshow ? "1" : "0",
          transition: "all .2s",
        }}
      >
        <Search
          placeholder="input youtube link"
          onSearch={updatelink}
          enterButton
        />
        {isDesktopOrLaptop && linkdata.playable && (
          <ReactPlayer
            style={{
              marginTop: "5%",
              margin: "auto",
            }}
            url={linkdata.url}
            controls={true}
            width={"100%"}
          />
        )}
        {isTabletOrMobile && linkdata.playable && (
          <ReactPlayer
            style={{
              marginTop: "5%",
              margin: "auto",
            }}
            url={linkdata.url}
            controls={true}
            width={"100%"}
            height={"250px"}
          />
        )}
      </Card>
    </Draggable>
  );
}
