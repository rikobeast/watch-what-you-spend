import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { FormInfoType, FromInfoTypeTwo } from 'types/Form.types';
import Button from 'components/Button';
import Input from 'components/Input';

const initialFormState = {
  productPrice: {
    value: '0',
    inputName: 'Product Price',
  },
  productName: {
    value: '',
    inputName: 'Product Name',
  },
};

interface DayProps {
  number: number;
  name: string;
  expense?: number;
  onSubmit: (formInfo: FromInfoTypeTwo, dayIndex: number) => void;
}

const Day: React.FC<DayProps> = ({ number, name, expense, onSubmit }) => {
  const [formState, setFormState] = useState<FromInfoTypeTwo>(initialFormState);
  const { productName, productPrice } = formState;

  const handleSubmit = (event: { preventDefault(): void }) => {
    event.preventDefault();

    onSubmit(formState, number);
    setFormState(initialFormState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...(prevState[name as keyof typeof formState] as object),
        value: value,
      },
    }));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 p-4 w-[50%]">
          <div className="w-[50px] flex justify-center items-center text-xl font-bold pr-4 border-r border-black">
            {number}
          </div>
          <div className="text-lg">{name}</div>
        </div>
        <div className="w-[50%] p-5">
          <div className="text-right text-lg">{`${expense} $`}</div>
        </div>
      </div>
      <form className="max-w-full w-[100%] flex flex-col items-center justify-between sm:flex sm:items-center sm:justify-between">
        <div className="max-w-full w-full p-2">
          <Input
            className="max-w-full w-[100%] sm:w-[100%] p-2 border border-black rounded-lg bg-dark-secondary shadow-sm shadow-dark-secondary placeholder-dark-primary text-dark-primary"
            placeholder={productName.inputName}
            name="productName"
            type="text"
            onChange={handleChange}
            value={productName.value}
          />
          <Input
            className="max-w-full w-[100%] sm:w-[100%] p-2 my-1 border border-black rounded-lg bg-dark-secondary shadow-sm shadow-dark-secondary placeholder-dark-primary text-dark-primary"
            placeholder={productPrice.inputName}
            name="productPrice"
            type="number"
            minValue={0}
            onChange={handleChange}
            value={productPrice.value}
          />
        </div>
        <div className="max-w-full w-full p-2">
          <Button
            className="max-w-full w-[100%] sm:w-[100%] p-2 rounded-md shadow-md shadow-black  bg-dark-primary text-white font-bold sm:hover:bg-dark-primaryAccent  transition duration-300"
            type="submit"
            text="Submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default Day;
