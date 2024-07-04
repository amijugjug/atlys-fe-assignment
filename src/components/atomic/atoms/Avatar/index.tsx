import Image from 'next/image';
import React, { useState } from 'react';
import s from './Avatar.module.scss';
import ProfilePic from '@/../public/static/CloseButton.svg';
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
          onError={() => setImageError(true)} // Not directly supported in Next.js
          className={s.image}
        />
      )}
      {imageError && (
        <img src={ProfilePic} alt="ProfilePic" className={s.image} />
      )}
    </div>
  );
};

export default Avatar;
