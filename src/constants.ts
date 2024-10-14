import modification from "./components/func/modification";
import formatDate from "./components/func/formatDate";

export const LIMITS = [10, 15, 20];

export const COLUMNS = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: 'Марка и модель',
    dataIndex: 'mark',
    key: 'mark',
    render: (text, record) => `${record.mark} ${record.model ?? ""}`
  },
  {
    title: 'Модификация',
    dataIndex: 'modification',
    key: 'modification',
    render: (_, record) => modification(record)
  },
  {
    title: 'Комплектация',
    dataIndex: 'equipmentName',
    key: 'equipmentName',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    render: price => price ? `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽` : "-"
  },
  {
    title: 'Дата создания',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: date => formatDate(date)
  },
];