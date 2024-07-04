import React from 'react';
import Avatar from '../../atoms/Avatar';
import Label from '../../atoms/Label';
import Image from 'next/image';
import s from './UserInfoStrip.module.scss';

import More from '@/../public/static/More.svg';

const UserInfoStrip = ({
  profileDetails,
  onOptionButtonClick,
}: {
  profileDetails: any;
  onOptionButtonClick: () => void;
}) => {
  return (
    <div className={s.userInfoStrip}>
      <div className={s.userDetailsContainer}>
        <Avatar
          imageUrl={profileDetails?.profileImageUrl}
          alt="user-profile-image"
        />
        <div className={s.userInfoContainer}>
          <Label title={profileDetails.name} size="16px" color="#C5C7CA" />
          <span className={s.userMetaContainer}>
            <Label size="14px" title={'8 minutes ago'} color="#7F8084" />
            {profileDetails?.isEdited ? (
              <>
                <Label size="14px" title={' • '} color="#7F8084" />
                <Label size="14px" title={'Edited'} color="#7F8084" />{' '}
              </>
            ) : null}
          </span>
        </div>
      </div>
      <button className={s.moreContainer} onClick={onOptionButtonClick}>
        <Image src={More} alt="More" />
      </button>
    </div>
  );
};

export default UserInfoStrip;
