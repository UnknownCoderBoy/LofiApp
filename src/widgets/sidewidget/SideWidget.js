import { FloatButton } from "antd";
import {
  QuestionCircleOutlined,
  SyncOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function SideWidget(props) {
  return (
    <FloatButton.Group shape="square">
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton tooltip={<div>custom badge color</div>} />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton
        icon={<YoutubeOutlined />}
        tooltip={<div>Toggle Youtube Player</div>}
        onClick={props.ythandler}
      />
    </FloatButton.Group>
  );
}
