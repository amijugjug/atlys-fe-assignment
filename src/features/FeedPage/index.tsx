'use client';
import Portal from '@/components/atomic/organisms/Portal';
import CreateBox from '@/components/atomic/templates/CreateBox';
import LoginRegisterModal from '@/components/atomic/templates/LoginRegisterModal';
import PostCard from '@/components/atomic/templates/PostCard';
import React, { useEffect, useState } from 'react';

import s from './Feed.module.scss';
import Label from '@/components/atomic/atoms/Label';
import { IFeed } from '../../features/FeedPage/Feed';

const FeedPage = ({ feedItems }: IFeed) => {
  const [modal, showModal] = useState(false);
  const toggleModal = () => showModal((prevState: boolean) => !prevState);
  useEffect(() => {
    if (!localStorage.getItem('DB')) {
      localStorage.setItem('DB', JSON.stringify({}));
    }
  }, []);
  console.log(feedItems);
  return (
    <div className={s.page}>
      <div />
      <div className={s.midContainer}>
        <div className={s.greetingContainer}>
          <Label
            title={'Hello Jane'}
            size={'28px'}
            lineHeight="33.89px"
            color="#C5C7CA"
          />
          <p className={s.greeting}>
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <CreateBox onClick={toggleModal} />
        {feedItems?.map((feedItem: any) => {
          return <PostCard onClick={toggleModal} post={feedItem} />;
        })}
      </div>
      <div />

      {modal ? (
        <Portal toggleModal={toggleModal}>
          <LoginRegisterModal closeModal={toggleModal} />
        </Portal>
      ) : null}
    </div>
  );
};

export default FeedPage;
