'use client';
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
