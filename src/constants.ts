import modification from "./components/func/modification";
import formatDate from "./components/func/formatDate";
import { z } from "zod";
import { CarSchema } from './server/validator/schema/getCarsFromModelsAndMarks';

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
    render: (record: z.infer<typeof CarSchema>) => `${record.mark} ${record.model ?? ""}`
  },
  {
    title: 'Модификация',
    dataIndex: 'modification',
    key: 'modification',
    render: (_: void, record: z.infer<typeof CarSchema>) => modification(record)
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
    render: (price: number) => price ? `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽` : "-"
  },
  {
    title: 'Дата создания',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (date: Date) => formatDate(date)
  },
];