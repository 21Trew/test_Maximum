import React from "react";
import { Select, Space, Tag } from "antd";

import { useCarsTableContext } from "./context/useCarsTableContext";

const { Option } = Select;

export default function SelectModel() {
  const { models, selectedModels, setSelectedModels } = useCarsTableContext();
  
  const handleChange = (value) => {
    setSelectedModels(value);
  };
  
  const tagRender = (props) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        bordered={false}
        color="processing"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  };
  
  return (
    <Space direction="vertical">
      Модель:
      <Select
        mode="multiple"
        style={{ minWidth: '250px', maxWidth: '400px' }}
        value={selectedModels}
        onChange={handleChange}
        tagRender={tagRender}
        maxTagCount="responsive"
      >
        {models?.map((model, index) => (
          <Option key={index} value={model}>
            {model ?? "Не указана модель"}
          </Option>
        ))}
      </Select>
    </Space>
  );
}