import React from 'react';
import { Space, Spin, Table } from 'antd';

import Card from "./utils/Card";
import { COLUMNS } from "~/constants";
import Limit from "./Limit";
import Pagination from "./Pagination";
import { useCarsTableContext } from "./context/useCarsTableContext";

export default function TableCars() {
	const { cars } = useCarsTableContext();
	
	return (
		<Card InnerPosition="center">
			{cars ? (
				<Table
					dataSource={cars}
					columns={COLUMNS}
					rowKey={record => record._id}
					pagination={false}
					scroll={{ y: 500 }}
				/>
			) : (
				<Spin size="large" style={{ display: 'block', margin: '20px auto' }} />
			)}
			
			<Space style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: '20px' }}>
				<Pagination />
				<Limit />
			</Space>
		</Card>
	);
}