import React from 'react';

interface CalendarItemProps {
  dayNumber: number;
  isActive: boolean;
  onClick: (dayNumber: number) => void;
}

const CalendarItem: React.FC<CalendarItemProps> = ({
  dayNumber,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`border min-w-[45px] min-h-[35px] w-[45px] h-[55px] sm:min-w-[60px] sm:min-h-[60px] mt-2 mb-2 flex items-center justify-center rounded-md font-bold flex-col transition duration-150 hover:border-red hover:cursor-pointer hover:text-red hover:shadow-md shadow-secondary ${
        isActive ? 'border-red text-red' : 'border-black-40'
      }`}
      onClick={() => onClick(dayNumber)}
    >
      <span className="mb-2">{dayNumber}</span>
      <span className="text-xs">0,00$</span>
    </div>
  );
};

export default CalendarItem;
