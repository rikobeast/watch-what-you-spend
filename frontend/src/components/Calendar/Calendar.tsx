import React from 'react';
import { months } from '../../mock-data/monthsInAYear';
import { days } from '../../mock-data/days';
import { getDaysInCurrentMonth } from '../../utils/getDaysInCurrentMonth';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarDays from './CalendarDays/CalendarDays';

interface CalendarProps {
  currentMonth: string;
}

const Calendar = () => {
  const date = new Date();

  const currentMonthIndex = date.getMonth();
  const month = months[currentMonthIndex];
  const currentFullYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const daysInAMonth = getDaysInCurrentMonth(currentFullYear, currentMonth);

  return (
    <div className="max-w-full w-[75%] h-screen bg-secondary border p-2">
      <div className="max-w-full w-full bg-light-blue h-full rounded-md ">
        <CalendarHeader
          monthName={month.name}
          dayNames={days}
          fullYear={currentFullYear}
        />
        <CalendarDays numberOfDays={daysInAMonth} />
      </div>
    </div>
  );
};

export default Calendar;
