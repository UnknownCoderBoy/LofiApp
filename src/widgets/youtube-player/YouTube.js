import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Card, Button, Input} from "antd";
import { MinusOutlined } from "@ant-design/icons";
import Draggable from "react-draggable";
import{ useMediaQuery } from "react-responsive";

const { Search } = Input;
const eventHandler = (e, data) => {
  console.log("Event Type", e.type);
  console.log({ e, data });
};

export default function Youtube(props) {
const [url, setURL] = useState("");
const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  
  return (
          props.show &&
      <Draggable bounds="html" onStop={eventHandler}>
            <Card
              size="small"
              title="Youtube Player"
              extra={
                <Button
                  type="text"
                  icon={<MinusOutlined />}
                  onClick={props.minimize}
                />
              }
              style={{ width: "50%" }}
            >
              <Search
                placeholder="input youtube link"
                onSearch={setURL}
                enterButton
              />
              {isDesktopOrLaptop && ReactPlayer.canPlay({url}) && (
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
              {isTabletOrMobile && ReactPlayer.canPlay({url}) && (
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
      );
}