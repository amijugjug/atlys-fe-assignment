import React from 'react';
import s from './PostCard.module.scss';
import UserInfoStrip from '../../molecules/UserInfoStrip';
import Image from 'next/image';
import Label from '../../atoms/Label';

import CommentIcon from '@/../public/static/Comment.svg';
import TextArea from '../../molecules/TextArea';
import { IPostCard } from './PostCard';

const PostCard = ({ onClick, post }: IPostCard) => {
  const onOptionButtonClick = () => {};
  return (
    <div className={s.cardContainer} onClick={onClick}>
      <UserInfoStrip
        profileDetails={post.profile}
        onOptionButtonClick={onOptionButtonClick}
      />
      <TextArea
        value={post.content}
        placeHolder="How are you feeling today?"
        disabled={true}
      />
      <div className={s.cardFooter}>
        <Image src={CommentIcon} alt="Comment" width={20} height={20} />
        <Label
          title={`${post.comments?.length} comments`}
          size="14px"
          color="#7F8084"
          alignSelf="center"
        />
      </div>
    </div>
  );
};

export default PostCard;
