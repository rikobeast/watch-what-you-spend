import React from 'react';

interface CardProps {
  className?: string;
  width?: string;
  children: any;
}

const Card: React.FC<CardProps> = ({ className, width, children }) => {
  return (
    <div
      className={`max-w-full w-[600px] bg-dark-secondary rounded-md shadow-md shadow-dark-primary ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
