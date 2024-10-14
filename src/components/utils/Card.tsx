import React from 'react';
import { Card as AntCard, Space, Row, Col } from 'antd';

interface CardProps {
  children: React.ReactNode;
  InnerPosition: "center" | "start";
  stepChildren?: React.ReactNode;
}

export default function Card({ children, stepChildren }: CardProps) {
  return (
    <Row justify="center" style={{ padding: 24 }}>
      <Col span={24}>
        <AntCard style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }} >
          {children}
          <Space style={{ display: 'flex', marginTop: '20px' }} >
            {stepChildren}
          </Space>
        </AntCard>
      </Col>
    </Row>
  );
}