import React, { useMemo, useState } from 'react';
import { months } from 'mock-data/monthsInAYear';
import { daysOfWeek } from 'mock-data/daysOfweek';
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

const Calendar: React.FC = (): JSX.Element => {
  const date = new Date();
  const today = date.getDate();
  const monthIndex = date.getMonth();
  const fullYear = date.getFullYear();
  const [currentMonthIndex, setCurrentMonthIndex] =
    useState<number>(monthIndex);
  const [currenFullYear, setCurrentFullYear] = useState<number>(fullYear);
  const [selectedDay, setSelectedDay] = useState<number>(today);
  const [expense, setExpense] = useState<number>(0);

  const nameOfSelectedDay = useMemo(
    () => getNameOfSelectedDay(fullYear, currentMonthIndex, selectedDay),
    [selectedDay]
  );

  const daysInAMonth = useMemo(
    () => getDaysInCurrentMonth(fullYear, currentMonthIndex),
    [currentMonthIndex]
  );

  const blankDays = useMemo(
    () => getBlankDays(daysOfWeek, fullYear, currentMonthIndex),
    [currentMonthIndex]
  );

  const daysWithInfo = useMemo(
    () => setDayInformation(daysInAMonth),
    [daysInAMonth]
  );

  const monthName = useMemo(
    () => months[currentMonthIndex].name,
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

  const handleSubmit = (formInfo: FormInfoType, dayIndex: number) => {
    const { productPrice, productName } = formInfo;

    const priceToNumber = +productPrice.value;

    setExpense(priceToNumber);
    daysWithInfo[dayIndex - 1].expense = priceToNumber;
  };

  useEffect(() => {
    setExpense(daysWithInfo[selectedDay - 1].expense);
  }, [selectedDay]);

  return (
    <div className="h-screen sm:p-2">
      <div className="p-2 sm:p-0">
        <Card>
          <CalendarHeader
            monthName={monthName}
            dayNames={daysOfWeek}
            fullYear={currenFullYear}
            onMonthChange={onMonthChange}
          />
          <CalendarDays
            blankDays={blankDays}
            numberOfDays={daysWithInfo}
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
  );
};

export default Calendar;
