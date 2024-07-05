'use client';
import CreateBox from '@/components/atomic/templates/CreateBox';
import PostCard from '@/components/atomic/templates/PostCard';
import React, { useEffect } from 'react';

import s from './Feed.module.scss';
import Label from '@/components/atomic/atoms/Label';
import { IFeed } from '../../features/FeedPage/Feed';
import { ModalProvider } from '@/contexts/Modal.context';

const FeedPage = ({ feedItems }: IFeed) => {
  useEffect(() => {
    if (!localStorage.getItem('DB')) {
      localStorage.setItem('DB', JSON.stringify({}));
    }
  }, []);
  return (
    <ModalProvider>
      <div className={s.page}>
        <div className={s.midContainer}>
          <div className={s.greetingContainer}>
            <Label
              title={'Hello Jane'}
              size={'28px'}
              lineHeight="33.89px"
              color="#C5C7CA"
            />
            <p className={s.greeting}>
              How are you doing today? Would you like to share something with
              the community 🤗
            </p>
          </div>
          <CreateBox />
          {feedItems?.map((feedItem: any) => {
            return <PostCard post={feedItem} />;
          })}
        </div>
      </div>
    </ModalProvider>
  );
};

export default FeedPage;
