import React, { useState } from 'react';
import { IInputBox } from './InputBox';
import s from './InputBox.module.scss';
import { INPUT_TYPE } from '@/constants';
import Image from 'next/image';
import EyeImage from '@/../public/static/AtlysEye.svg';
import Label from '../Label';

const InputBox = ({
  title,
  placeHolder,
  type,
  showEyeIcon = false,
  value = '',
  handleInputChange = () => {},
}: IInputBox) => {
  const [typeState, setTypeState] = useState(type);
  const togglePasswordVisibility = () => {
    setTypeState(
      typeState === INPUT_TYPE.PASSWORD ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD
    );
  };
  return (
    <div className={s.inputBox}>
      <Label className={s.label} title={title} />
      <span className={s.inputWrapper}>
        <input
          type={typeState}
          placeholder={placeHolder}
          className={s.input}
          value={value}
          onChange={handleInputChange}
        />
        {showEyeIcon ? (
          <button onClick={togglePasswordVisibility} className={s.eyeIcon}>
            <Image src={EyeImage} alt="Show Password" className={s.icon} />
          </button>
        ) : null}
      </span>
    </div>
  );
};

export default InputBox;
