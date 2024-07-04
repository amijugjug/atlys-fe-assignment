import React from 'react';
import s from './PostCard.module.scss';
import UserInfoStrip from '../../molecules/UserInfoStrip';
import Image from 'next/image';
import Label from '../../atoms/Label';

import CommentIcon from '@/../public/static/Comment.svg';
import TextArea from '../../molecules/TextArea';
import { IPostCard } from './PostCard';

const PostCard = ({ onClick }: IPostCard) => {
  const content =
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.';
  const profileItems = {
    name: 'Prakhar Srivastava',
    createdAt: 1720067648495,
    isEdited: true,
    profileImageUrl:
      'https://images.firstpost.com/uploads/2024/01/Kareena.jpg?im=FitAndFill=(596,336)',
  };

  const onOptionButtonClick = () => {};
  return (
    <div className={s.cardContainer} onClick={onClick}>
      <UserInfoStrip
        profileDetails={profileItems}
        onOptionButtonClick={onOptionButtonClick}
      />
      <TextArea
        value={content}
        placeHolder="How are you feeling today?"
        disabled={true}
      />
      <div className={s.cardFooter}>
        <Image src={CommentIcon} alt="Comment" />
        <Label title="24 comments" size="14px" color="#7F8084" />
      </div>
    </div>
  );
};

export default PostCard;
