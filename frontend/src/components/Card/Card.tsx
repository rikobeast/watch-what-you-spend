import React from 'react';

interface CardProps {
  className?: string;
  children: any;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`max-w-full w-[600px] bg-light-blue rounded-md shadow-md shadow-black-40 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
