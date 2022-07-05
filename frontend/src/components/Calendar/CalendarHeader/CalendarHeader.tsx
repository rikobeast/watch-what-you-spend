import React from 'react';
import Button from '../../Button/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CalendarHeaderProps {
  monthName: string;
  dayNames: string[];
  fullYear: number;
  onMonthChange: (direction: string) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  monthName,
  dayNames,
  fullYear,
  onMonthChange,
}) => {
  const changeMonth = (direction: string) => {
    onMonthChange(direction);
  };

  return (
    <>
      <div className="max-w-full w-full flex items-center justify-between">
        <h1 className="text-lg p-3 w-[25%] font-bold text-left">{monthName}</h1>
        <div className="max-w-full w-[50%] flex items-center justify-between">
          <Button
            className="font-extrabold p-4 rounded-full hover:bg-primary-30 transition duration-200"
            icon={<FaChevronLeft />}
            onClick={() => changeMonth('Previous')}
          />
          <Button
            className="font-extrabold p-4 rounded-full hover:bg-primary-30 transition duration-200"
            text="Today"
            onClick={() => changeMonth('Today')}
          />
          <Button
            className="font-extrabold p-4 rounded-full hover:bg-primary-30 transition duration-200"
            icon={<FaChevronRight />}
            onClick={() => changeMonth('Next')}
          />
        </div>
        <h1 className="text-h1 p-3 w-[25%] text-right">{fullYear}</h1>
      </div>
      <div className="max-w-full w-full border-t border-b h-[40px] grid grid-cols-7 grid-flow-row gap-4 pl-6 pr-6 items-center justify-items-center">
        {dayNames.map((day: string) => (
          <p key={day}>{day.slice(0, 3)}</p>
        ))}
      </div>
    </>
  );
};

export default CalendarHeader;
