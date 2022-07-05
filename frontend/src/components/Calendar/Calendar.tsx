import React, { useMemo, useState } from 'react';
import { months } from '../../mock-data/monthsInAYear';
import { days } from '../../mock-data/days';
import { getDaysInCurrentMonth } from '../../utils/getDaysInCurrentMonth';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarDays from './CalendarDays/CalendarDays';
import Card from '../Card/Card';
import Day from './Day/Day';

interface CalendarProps {
  currentMonth: string;
}

const Calendar = () => {
  const date = new Date();
  const today = date.getDate();
  const monthIndex = date.getMonth();
  const [currentMonthIndex, setCurrentMonthIndex] =
    useState<number>(monthIndex);
  const [selectedDay, setSelectedDay] = useState<number>(today);

  const month = months[currentMonthIndex];
  const currentFullYear = date.getFullYear();
  const daysInAMonth = useMemo(() => {
    return getDaysInCurrentMonth(currentFullYear, currentMonthIndex);
  }, [currentMonthIndex]);

  const onMonthChange = (direction: string) => {
    if (direction === 'Previous') {
      setCurrentMonthIndex(currentMonthIndex - 1);
    } else if (direction === 'Next') {
      setCurrentMonthIndex(currentMonthIndex + 1);
    } else {
      setCurrentMonthIndex(monthIndex);
      setSelectedDay(today);
    }
  };

  const onDaySelect = (dayNumber: number) => {
    setSelectedDay(dayNumber);
  };

  return (
    <div className="max-w-full w-[600px] h-screen bg-secondary border p-2">
      <Card>
        <CalendarHeader
          monthName={month.name}
          dayNames={days}
          fullYear={currentFullYear}
          onMonthChange={onMonthChange}
        />
        <CalendarDays
          numberOfDays={daysInAMonth}
          activeDayIndex={selectedDay}
          onClick={onDaySelect}
        />
      </Card>
      <Card className="mt-3 h-[300px]">
        <Day number={selectedDay} name="Tuesday" expenses={1.23} />
      </Card>
    </div>
  );
};

export default Calendar;
