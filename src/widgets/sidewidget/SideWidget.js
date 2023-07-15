import { FloatButton } from "antd";
import {
  QuestionCircleOutlined,
  SyncOutlined,
  YoutubeOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

export default function SideWidget(props) {
  const handleyt = () => {
    if (!props.closeyt) {
      props.handlevisibleyt();
    }
    props.handlecloseyt(true);
    props.handlevisibleyt();
  };

  const handlesf = () => {
    if (!props.closesf) {
      props.handlevisiblesf();
    }
    props.handleclosesf(true);
    props.handlevisiblesf();
  };

  const handledict = () => {
    props.handlevisibledict();
  };

  return (
    <FloatButton.Group shape="square">
      <FloatButton
        className="glassmor"
        icon={<QuestionCircleOutlined />}
        tooltip={<div>Info</div>}
        onClick={props.showDrawer}
      />
      <FloatButton
        className="glassmor"
        tooltip={<div>Toggle Dictionary</div>}
        onClick={handledict}
      />
      {/* <FloatButton icon={<SyncOutlined />} /> */}
      <FloatButton
        className="glassmor"
        icon={<YoutubeOutlined />}
        tooltip={<div>Toggle Youtube Player</div>}
        onClick={handleyt}
      />
      <FloatButton
        className="glassmor"
        icon={<PlayCircleOutlined />}
        tooltip={<div>Toggle Spotify</div>}
        onClick={handlesf}
      />
    </FloatButton.Group>
  );
}
