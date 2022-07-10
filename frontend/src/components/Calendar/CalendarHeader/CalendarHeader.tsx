import React, { useMemo } from 'react';
import Button from 'components/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Direction } from 'types/Direction.types';

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

  const dayNamesShort = useMemo(
    () => dayNames.map((dayName: string) => dayName.slice(0, 3)),
    [dayNames]
  );

  return (
    <>
      <div className="max-w-full w-full flex items-center justify-between p-1">
        <h1 className="text-sm sm:text-lg p-3 w-[25%] font-bold text-left">
          {monthName}
        </h1>
        <div className="max-w-full w-[50%] flex items-center justify-between">
          <Button
            className="font-bold p-4 rounded-full sm:hover:bg-dark-primary sm:hover:text-white transition duration-200"
            icon={<FaChevronLeft />}
            onClick={() => changeMonth(Direction.PREVIOUS)}
          />
          <Button
            className="font-bold p-4 rounded-full sm:hover:bg-dark-primary sm:hover:text-white transition duration-200"
            text="Today"
            onClick={() => changeMonth(Direction.TODAY)}
          />
          <Button
            className="font-bold p-4 rounded-full sm:hover:bg-dark-primary sm:hover:text-white transition duration-200"
            icon={<FaChevronRight />}
            onClick={() => changeMonth(Direction.NEXT)}
          />
        </div>
        <h1 className="text-sm sm:text-lg font-bold p-3 w-[25%] text-right">
          {fullYear}
        </h1>
      </div>
      <div className="max-w-full w-full border-t border-b border-black h-[40px] grid grid-cols-7 grid-flow-row gap-7 pl-7 pr-7 items-center justify-items-center">
        {dayNamesShort.map((dayName: string, index) => (
          <p key={`${dayName} - ${index}`}>{dayName}</p>
        ))}
      </div>
    </>
  );
};

export default CalendarHeader;
