import React from 'react';
import { Space, Spin } from 'antd';

import Card from "./utils/Card";
import SelectMark from "./SelectMark";
import SelectModel from "./SelectModel";
import { useCarsTableContext } from "./context/useCarsTableContext";

export default function SettingsCard() {
  const { marksAndCount, models } = useCarsTableContext();
  
  return (
    <Card InnerPosition="center">
      <Space direction="vertical" size="middle">
        {marksAndCount ? (
          <SelectMark />
        ) : (
          <Space>
            Загрузка марок автомобилей...
            <Spin size="small" />
          </Space>
        )}
        
        {models ? (
          <SelectModel />
        ) : (
          <Space>
            Загрузка моделей...
            <Spin size="small" />
          </Space>
        )}
      </Space>
    </Card>
  );
}