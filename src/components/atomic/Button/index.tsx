import React from 'react';
import s from './Button.module.scss';

const Button = ({text}: IButton) => {
  return (
    <button className={s.button}>{text}</button>
  )
}

export default Button