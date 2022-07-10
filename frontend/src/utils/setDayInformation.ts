import { CalendarDaysType } from 'types/Day.types';
import { ProductType } from 'types/Product.types';

export const setDayInformation = (daysInAMonth: number[]) => {
  let daysWithInfo: CalendarDaysType[] = [];
  let products: ProductType[] = [];
  let expense: number = 0;
  daysInAMonth.forEach((day) => {
    daysWithInfo.push({
      id: day,
      dayNumber: day,
      expense,
      products,
    });
  });
  return daysWithInfo;
};
