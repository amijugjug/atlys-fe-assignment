import React from 'react';
import s from './Button.module.scss';

const Button = ({ text, onClick, disabled = false }: IButton) => {
  return (
    <button
      className={`${s.button} ${disabled ? s.buttonDisabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
