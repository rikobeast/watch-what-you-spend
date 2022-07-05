import React from 'react';

interface DayProps {
  number: number;
  name: string;
  expenses?: number;
}

const Day: React.FC<DayProps> = ({ number, name, expenses }) => {
  return (
    <div className=" flex border-b items-center justify-between">
      <div className="flex items-center gap-4 p-5 w-[50%]">
        <div className="text-xl font-bold pr-4 border-r">{number}</div>
        <div className="text-lg">{name}</div>
      </div>
      <div className="w-[50%] p-5">
        {expenses && <div className="text-right text-lg">{`${expenses}$`}</div>}
      </div>
    </div>
  );
};

export default Day;
