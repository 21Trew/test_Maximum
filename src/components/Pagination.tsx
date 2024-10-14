import React from "react";
import { Pagination } from "antd";
import { useCarsTableContext } from "./context/useCarsTableContext";

export default function AntDPagination() {
  const { countCars, setOffset, limit } = useCarsTableContext();
  
  const handlePageChange = (page: number) => {
    const newOffset = (page - 1) * limit;
    setOffset(newOffset);
  };
  
  const locale = {
    jump_to: 'Перейти к',
    page: 'странице',
  };
  
  return (
    <>
      <Pagination
        total={countCars}
        pageSize={limit}
        onChange={handlePageChange}
        showSizeChanger={false}
        showQuickJumper
        locale={locale}
      />
    </>
  );
}