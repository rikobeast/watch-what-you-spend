import { ProductType } from './Product.types';

export type CalendarDaysType = {
  id: number;
  dayNumber: number;
  expense: number;
  products: ProductType[];
};
