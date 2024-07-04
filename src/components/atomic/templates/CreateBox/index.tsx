import React, { useState } from 'react';
import s from './CreateBox.module.scss';
import Image from 'next/image';
import Label from '../../atoms/Label';

import CommentIcon from '@/../public/static/Comment.svg';
import TextArea from '../../molecules/TextArea';
import Button from '../../atoms/Button';
import { ICreateBox } from './CreateBox';

const CreateBox = ({ onClick }: ICreateBox) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };
  const onPostClick = (e: any) => {};

  return (
    <div className={s.createContainer} onClick={onClick}>
      <Label
        title={'Create Post'}
        size={'18px'}
        lineHeight="21.78px"
        color="#C5C7CA"
      />
      <TextArea
        value={value}
        placeHolder="How are you feeling today?"
        handleInputChange={handleInputChange}
      />
      <Button text={'Post'} onClick={onPostClick} align="flex-end" />
    </div>
  );
};

export default CreateBox;
