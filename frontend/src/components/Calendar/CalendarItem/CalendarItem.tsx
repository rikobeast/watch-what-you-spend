import React from 'react';

interface CalendarItemProps {
  dayNumber: number;
  isActive: boolean;
  expense: number;
  onClick: (dayNumber: number) => void;
}

const CalendarItem: React.FC<CalendarItemProps> = ({
  dayNumber,
  isActive,
  expense,
  onClick,
}) => {
  return (
    <div
      className={`truncate border min-w-[45px] min-h-[35px] w-[45px] h-[55px] sm:min-w-[60px] sm:min-h-[60px] mt-2 mb-2 flex items-center justify-center rounded-md font-bold flex-col transition duration-150 hover:border-dark-accent hover:cursor-pointer hover:text-dark-accent hover:shadow-md shadow-dark-accent ${
        isActive ? 'border-dark-accent text-dark-accent' : 'border-black'
      }`}
      onClick={() => onClick(dayNumber)}
    >
      <span className="mb-2">{dayNumber}</span>
      <span className="text-xs">{`${expense} $`}</span>
    </div>
  );
};

export default CalendarItem;
