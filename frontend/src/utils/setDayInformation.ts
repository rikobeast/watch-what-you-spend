import { CalendarDaysType } from "types/Day.types";

export const setDayInformation = (daysInAMonth: number[]) => {
  let daysWithInfo: CalendarDaysType[] = [];
  let expense: number = 0;
  daysInAMonth.forEach((day) => {
    daysWithInfo.push({
      id: day,
      dayNumber: day,
      expense,
    });
  });
  return daysWithInfo;
};
