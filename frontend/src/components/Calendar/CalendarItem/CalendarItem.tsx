import React from 'react';

interface CalendarItemProps {
  dayNumber: number;
}

const CalendarItem: React.FC<CalendarItemProps> = ({ dayNumber }) => {
  return (
    <div className="border min-w-[60px] h-[60px] mt-2 mb-2 flex items-center justify-center rounded-md font-bold flex-col transition duration-150 hover:border-red hover:cursor-pointer hover:text-red hover:shadow-md shadow-secondary">
      <span className="mb-2">{dayNumber}</span>
      <span className="text-xs">0,00$</span>
    </div>
  );
};

export default CalendarItem;
