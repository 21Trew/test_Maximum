import { Button, Space } from 'antd';
import React from 'react';

import { useCarsTableContext } from "./context/useCarsTableContext";

export default function SelectMark() {
  const { marksAndCount, currentMark, setCurrentMark } = useCarsTableContext();
  
  return (
    <Space wrap style={{ background: 'white', borderRadius: '6px', padding: '8px' }}>
      {marksAndCount?.map((val) => (
        <Button
          key={val._id}
          type={val._id === currentMark ? "primary" : "text"}
          onClick={() => setCurrentMark(val._id)}
        >
          {`${val._id}: ${val.count}`}
        </Button>
      ))}
    </Space>
  );
}