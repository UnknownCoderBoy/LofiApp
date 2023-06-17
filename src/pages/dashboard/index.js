import Draggable, { DraggableCore } from "react-draggable";
import { Card, Space, FloatButton } from "antd";
import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import React from "react";
import Breakpoint from "lib/breakpoint";

export default function Dashboard() {
  return (
    <>
      <Draggable>
        <Space direction="vertical" size={16}>
          <Card size="small" title="Small size card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Space>
      </Draggable>

      {/* <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group> */}

      <FloatButton.Group shape="square" style={{ bottom: 500, right: 24 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton tooltip={<div>custom badge color</div>} />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton />
      </FloatButton.Group>
    </>
  );
}
