import { LIMITS } from "~/constants";
import React from "react";
import { useCarsTableContext } from "./context/useCarsTableContext";
import { Select, Space, Typography } from "antd";

export default function AntDLimit() {
  const { limit, setLimit } = useCarsTableContext();
  
  const handleDeleteFocus = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };
  
  const handleLimitChange = (value: number) => {
    setLimit(value);
    handleDeleteFocus();
  };
  
  const options = LIMITS.map((amount) => ({
    value: amount,
    label: amount,
  }));
  
  return (
    <Space>
      <Typography>Записей на странице: </Typography>
      
      <Select
        value={limit}
        onChange={handleLimitChange}
        options={options}
      />
    </Space>
  );
}