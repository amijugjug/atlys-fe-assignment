import Image from 'next/image';
import React, { useState } from 'react';
import s from './Avatar.module.scss';
import ProfilePic from '@/../public/static/ProfilePic.svg';
import { IAvatar } from './Avatar';

const Avatar = ({ imageUrl = '', alt = '' }: IAvatar) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={s.imageContainer}>
      {!imageError && (
        <Image
          src={imageUrl}
          alt={alt}
          width={44}
          height={44}
          onError={() => setImageError(true)}
          className={s.image}
        />
      )}
      {imageError && (
        <Image
          src={ProfilePic}
          alt={alt}
          width={44}
          height={44}
          className={s.image}
        />
      )}
    </div>
  );
};

export default Avatar;
