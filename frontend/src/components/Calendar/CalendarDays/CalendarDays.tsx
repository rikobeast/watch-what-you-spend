import React, { useMemo } from 'react';
import BlankItem from '../CalendarItem/BlankItem';
import CalendarItem from '../CalendarItem/CalendarItem';

interface CaledarDaysProps {
  blankDays: number[];
  numberOfDays: number[];
  activeDayIndex: number;
  onClick: (dayNumber: number) => void;
}

const CalendarDays: React.FC<CaledarDaysProps> = ({
  blankDays,
  numberOfDays,
  activeDayIndex,
  onClick,
}) => {
  const handleOnDayClick = (dayNumber: number) => {
    onClick(dayNumber);
  };

  return (
    <div className="grid grid-rows-5 grid-cols-7 grid-flow-row gap-4 p-6">
      {blankDays.map((blank: any) => (
        <BlankItem />
      ))}
      {numberOfDays.map((dayOfMonth: any) => (
        <CalendarItem
          key={dayOfMonth}
          dayNumber={dayOfMonth}
          isActive={activeDayIndex === dayOfMonth}
          onClick={handleOnDayClick}
        />
      ))}
    </div>
  );
};

export default CalendarDays;
