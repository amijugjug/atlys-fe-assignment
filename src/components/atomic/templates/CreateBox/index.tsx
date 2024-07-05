import React, { useState } from 'react';
import s from './CreateBox.module.scss';
import Label from '../../atoms/Label';
import TextArea from '../../molecules/TextArea';
import Button from '../../atoms/Button';
import { useModal } from '@/contexts/Modal.context';

const CreateBox = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };
  const onPostClick = (e: any) => {};

  const { modal, toggleModal } = useModal();

  return (
    <>
      <div className={s.createContainer} onClick={toggleModal}>
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
    </>
  );
};

export default CreateBox;
