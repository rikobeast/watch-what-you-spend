import React from 'react';
import { getToday } from '../../../utils/getToday';
import CalendarItem from '../CalendarItem/CalendarItem';

interface CaledarDaysProps {
  numberOfDays: number[];
}

const CalendarDays: React.FC<CaledarDaysProps> = ({ numberOfDays }) => {
  return (
    <div className="border-b grid grid-rows-5 grid-cols-7 grid-flow-row gap-4 p-1">
      {numberOfDays.map((dayOfMonth: any) => (
        <CalendarItem key={dayOfMonth} dayNumber={dayOfMonth} />
      ))}
    </div>
  );
};

export default CalendarDays;
