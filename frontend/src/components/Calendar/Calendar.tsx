import React, { useEffect, useMemo, useState } from 'react';
import { months } from '../../mock-data/monthsInAYear';
import { daysOfWeek } from '../../mock-data/days';
import { getDaysInCurrentMonth } from '../../utils/getDaysInCurrentMonth';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarDays from './CalendarDays/CalendarDays';
import Card from '../Card/Card';
import Day from './Day/Day';
import { getBlankDays } from '../../utils/getBlankDays';

interface CalendarProps {
  currentMonth: string;
}

const Calendar = () => {
  const date = new Date();
  const today = date.getDate();
  const monthIndex = date.getMonth();
  const currentFullYear = date.getFullYear();
  const [currentMonthIndex, setCurrentMonthIndex] =
    useState<number>(monthIndex);
  const [selectedDay, setSelectedDay] = useState<number>(today);
  const [expense, setExpense] = useState<number>(0);

  const nameOfSelectedDay = useMemo(
    () =>
      new Date(
        currentFullYear,
        currentMonthIndex,
        selectedDay
      ).toLocaleDateString('en-us', { weekday: 'long' }),
    [selectedDay]
  );
  const [selectedDayName, setSelectedDayName] =
    useState<string>(nameOfSelectedDay);

  const month = months[currentMonthIndex];

  const daysInAMonth = useMemo(
    () => getDaysInCurrentMonth(currentFullYear, currentMonthIndex),
    [currentMonthIndex]
  );

  const blankDays = useMemo(
    () => getBlankDays(daysOfWeek, currentFullYear, currentMonthIndex),
    [currentMonthIndex]
  );

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

  const handleSubmit = (value: number) => {
    setExpense(value);
  };

  useEffect(() => {
    setSelectedDayName(nameOfSelectedDay);
  }, [selectedDay]);

  return (
    <div className="h-screen">
      <div className="p-2">
        <Card>
          <CalendarHeader
            monthName={month.name}
            dayNames={daysOfWeek}
            fullYear={currentFullYear}
            onMonthChange={onMonthChange}
          />
          <CalendarDays
            blankDays={blankDays}
            numberOfDays={daysInAMonth}
            activeDayIndex={selectedDay}
            onClick={onDaySelect}
          />
        </Card>
      </div>
      <div className="p-2">
        <Card className="my-1">
          <Day
            number={selectedDay}
            name={selectedDayName!}
            expenses={expense}
            onSubmit={handleSubmit}
          />
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
