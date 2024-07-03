'use client';
import Portal from '@/components/Portal';
import LoginRegisterModal from '@/features/LoginRegisterModal';
import React, { useState } from 'react';

const Home = () => {
  const [modal, showModal] = useState(false);
  const toggleModal = () => showModal((prevState: boolean) => !prevState);
  return (
    <>
      <div>Home</div>
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
