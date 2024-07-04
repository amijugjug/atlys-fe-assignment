import React from 'react';
import s from './Label.module.scss';
import { ILabel } from './Label';

const Label = ({
  title,
  onClick = () => {},
  size = '16px',
  weight = 500,
  color = '#FFFFFF',
  lineHeight = '16.94px',
  textAlign = 'left',
  cursor = 'default',
}: ILabel) => {
  const style = {
    textAlign: textAlign,
    fontSize: size,
    fontWeight: weight,
    color: color,
    lineHeight: lineHeight,
    cursor: cursor,
  };

  return (
    <label className={s.label} style={style} onClick={onClick}>
      {title}
    </label>
  );
};

export default Label;
