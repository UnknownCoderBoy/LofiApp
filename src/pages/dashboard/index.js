import Draggable, { DraggableCore } from "react-draggable";
import { Card, Space, FloatButton } from "antd";
import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import React from "react";
import "./style.css";

export default function Dashboard() {
  return (
    <>
      <Draggable className="drag">
        <Space direction="vertical" size={16}>
          <Card size="small" title="Small size card" style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Space>
      </Draggable>

      <FloatButton.Group shape="square" style={{ bottom: "30%", right: 24 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton tooltip={<div>custom badge color</div>} />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton />
      </FloatButton.Group>
    </>
  );
}
