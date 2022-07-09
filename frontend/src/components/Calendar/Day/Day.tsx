import React, { useState } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

interface DayProps {
  number: number;
  name: string;
  expenses?: number;
  onSubmit: (expense: number) => void;
}

const Day: React.FC<DayProps> = ({ number, name, expenses, onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = () => {
    onSubmit(Number(inputValue));
    setInputValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const fixedValue = value.replace(/\D/g, '');

    setInputValue(fixedValue);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 p-5 w-[50%]">
          <div className="w-[50px] flex justify-center items-center text-xl font-bold pr-4 border-r border-black-40">
            {number}
          </div>
          <div className="text-lg">{name}</div>
        </div>
        <div className="w-[50%] p-5">
          <div className="text-right text-lg">{`${expenses} $`}</div>
        </div>
      </div>
      <div className="max-w-full w-[100%] flex flex-col items-center justify-between sm:flex sm:items-center sm:justify-between sm:flex-row">
        <div className="max-w-full w-full p-2">
          <Input
            className="max-w-full w-[100%] sm:w-[100%] p-2 border border-black-40 rounded-lg bg-light-blue shadow-sm shadow-black-40"
            placeholder="Expense"
            name="expense"
            type="text"
            onChange={handleChange}
            value={inputValue}
          />
        </div>
        <div className="max-w-full w-full p-2">
          <Button
            className="max-w-full w-[100%] sm:w-[100%] p-2 bg-primary rounded-md shadow-md shadow-black-40 text-white hover:bg-secondary transition duration-300"
            type="button"
            text="Submit"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Day;
