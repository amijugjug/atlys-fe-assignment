import React from 'react';
import s from './Button.module.scss';

const Button = ({
  text,
  onClick,
  disabled = false,
  size = 'medium',
  align = 'center',
}: IButton) => {
  return (
    <button
      className={`${s.button} ${disabled ? s.buttonDisabled : ''} ${size === 'large' ? s.buttonLarge : ''}`}
      onClick={onClick}
      disabled={disabled}
      style={{ alignSelf: align }}
    >
      {text}
    </button>
  );
};

export default Button;
