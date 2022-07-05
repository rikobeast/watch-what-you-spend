import React from 'react';
interface DayNames {
  name: string;
}

interface CalendarHeaderProps {
  monthName: string;
  dayNames: DayNames[];
  fullYear: number;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  monthName,
  dayNames,
  fullYear,
}) => {
  return (
    <>
      <div className="max-w-full w-full flex justify-between">
        <h1 className="text-h1 p-3">{monthName}</h1>
        <h1 className="text-h1 p-3">{fullYear}</h1>
      </div>
      <div className="max-w-full w-full border-t border-b h-[40px] grid grid-cols-7 grid-flow-row gap-4 p-1 items-center justify-items-center">
        {dayNames.map((day: any) => (
          <p>{day.name.slice(0, 3)}</p>
        ))}
      </div>
    </>
  );
};

export default CalendarHeader;
