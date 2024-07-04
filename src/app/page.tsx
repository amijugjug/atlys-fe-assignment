'use client';
import Avatar from '@/components/atomic/atoms/Avatar';
import UserInfoStrip from '@/components/atomic/molecules/UserInfoStrip';
import Portal from '@/components/atomic/organisms/Portal';
import LoginRegisterModal from '@/components/atomic/templates/LoginRegisterModal';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [modal, showModal] = useState(false);
  const toggleModal = () => showModal((prevState: boolean) => !prevState);
  useEffect(() => {
    if (!localStorage.getItem('DB')) {
      localStorage.setItem('DB', JSON.stringify({}));
    }
  }, []);
  const profileItems = {
    name: 'Prakhar Srivastava',
    createdAt: 1720067648495,
    isEdited: true,
    profileImageUrl:
      'https://images.firstpost.com/uploads/2024/01/Kareena.jpg?im=FitAndFill=(596,336)',
  };
  return (
    <>
      <div>Home</div>
      <UserInfoStrip profileDetails={profileItems} />
      <button onClick={toggleModal}>Toggle Modal</button>
      {modal ? (
        <Portal toggleModal={toggleModal}>
          <LoginRegisterModal closeModal={toggleModal} />
        </Portal>
      ) : null}
    </>
  );
};

export default Home;
