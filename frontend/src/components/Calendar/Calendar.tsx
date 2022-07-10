import React, { useMemo, useState } from 'react';
import { months } from 'data/monthsInAYear';
import { daysOfWeek } from 'data/daysOfweek';
import { getDaysInCurrentMonth } from 'utils/getDaysInCurrentMonth';
import CalendarHeader from 'components/Calendar/CalendarHeader';
import CalendarDays from 'components/Calendar/CalendarDays';
import Card from 'components/Card';
import Day from 'components/Calendar/Day';
import { getBlankDays } from 'utils/getBlankDays';
import { setDayInformation } from 'utils/setDayInformation';
import { getNameOfSelectedDay } from 'utils/getNameOfSelectedDay';
import { useEffect } from 'react';
import { FormInfoType } from 'types/Form.types';
import DetailedDayInformation from './Day/DetailedDayInformation';
import { Direction } from 'types/Direction.types';

const Calendar: React.FC = (): JSX.Element => {
  const date = new Date();
  const today = date.getDate();
  const monthIndex = date.getMonth();
  const fullYear = date.getFullYear();
  const [currentMonthIndex, setCurrentMonthIndex] =
    useState<number>(monthIndex);
  const [currentFullYear, setCurrentFullYear] = useState<number>(fullYear);
  const [selectedDay, setSelectedDay] = useState<number>(today);
  const [expense, setExpense] = useState<number>(0);

  const nameOfSelectedDay = useMemo(
    () => getNameOfSelectedDay(fullYear, currentMonthIndex, selectedDay),
    [selectedDay]
  );

  const daysInAMonth = useMemo(
    () => getDaysInCurrentMonth(currentFullYear, currentMonthIndex),
    [currentMonthIndex, currentFullYear]
  );

  const blankDays = useMemo(
    () => getBlankDays(daysOfWeek, currentFullYear, currentMonthIndex),
    [currentMonthIndex]
  );

  const calendarDays = useMemo(
    () => setDayInformation(daysInAMonth),
    [daysInAMonth]
  );

  const monthName = useMemo(
    () => months[currentMonthIndex].name,
    [currentMonthIndex]
  );

  const onMonthChange = (direction: string) => {
    if (direction === Direction.PREVIOUS) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    } else if (direction === Direction.NEXT) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    } else {
      setCurrentMonthIndex(monthIndex);
      setSelectedDay(today);
      setCurrentFullYear(fullYear);
    }
    checkIfLastOrFirstMonth(direction);
  };

  const checkIfLastOrFirstMonth = (direction: string) => {
    if (direction === Direction.NEXT && currentMonthIndex === 11) {
      setCurrentFullYear(currentFullYear + 1);
      setCurrentMonthIndex(0);
    } else if (direction === Direction.PREVIOUS && currentMonthIndex === 0) {
      setCurrentFullYear(currentFullYear - 1);
      setCurrentMonthIndex(11);
    }
  };

  const onDaySelect = (dayNumber: number) => {
    setSelectedDay(dayNumber);
  };

  const handleSubmit = (formInfo: FormInfoType, dayIndex: number) => {
    const { productPrice } = formInfo;

    const parsedValue = parseInt(productPrice.value);

    setExpense(parsedValue);
    calendarDays[dayIndex - 1].expense = parsedValue;
  };

  useEffect(() => {
    setExpense(calendarDays[selectedDay - 1].expense);
  }, [selectedDay]);

  return (
    <div className="h-screen sm:p-2 sm:flex sm:flex-row">
      <div className="wrapper">
        <div className="p-2 sm:p-0">
          <Card>
            <CalendarHeader
              monthName={monthName}
              dayNames={daysOfWeek}
              fullYear={currentFullYear}
              onMonthChange={onMonthChange}
            />
            <CalendarDays
              blankDays={blankDays}
              numberOfDays={calendarDays}
              activeDayIndex={selectedDay}
              onClick={onDaySelect}
            />
          </Card>
        </div>
        <div className="p-2 sm:p-0">
          <Card className="my-2">
            <Day
              number={selectedDay}
              name={nameOfSelectedDay}
              expense={expense}
              onSubmit={handleSubmit}
            />
          </Card>
        </div>
      </div>
      <div className="sm:max-w-full">
        <DetailedDayInformation />
      </div>
    </div>
  );
};

export default Calendar;
