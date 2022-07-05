import React, { ReactNode } from 'react';

interface ButtonProps {
  className: string;
  type: 'submit' | 'button' | 'reset';
  text: string;
  icon: ReactNode;
  onClick: () => void;
}

const Button: React.FC<Partial<ButtonProps>> = ({
  className,
  type,
  text,
  icon,
  onClick,
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text ? text : icon}
    </button>
  );
};

export default Button;
