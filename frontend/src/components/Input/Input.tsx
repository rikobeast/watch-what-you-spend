import React from 'react';

interface InputProps {
  className: string;
  type: string;
  label: string;
  placeholder: string;
  name: string;
  value?: string | number;
  currency: string;
  minValue?: number;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Partial<InputProps>> = ({
  className,
  type,
  label,
  placeholder,
  name,
  value,
  minValue,
  errorMessage,
  onChange,
}) => {
  return (
    <>
      {label && <label className="m-2 font-bold">{label}</label>}
      <div className="relative">
        <input
          className={className}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          min={minValue}
          onChange={onChange}
          autoComplete="off"
        />
        {errorMessage && (
          <div className="absolute text-red text-md left-2 top-12 mt-1 ">
            {errorMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
