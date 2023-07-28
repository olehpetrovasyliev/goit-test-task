import { nanoid } from '@reduxjs/toolkit';
import Button from 'components/Button/Button';
import React, { useState } from 'react';

const Card = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleClick = () => {
    setIsFollowing(prev => !prev);
  };
  return (
    <li>
      <div>
        <img src="../../img/card_picture_1x.png" alt="decoration" />
      </div>
      <span>
        {' '}
        <img src={user.avatar} alt="avatar" />
      </span>
      <div>
        <ul>
          <li>{user.tweets} tweets</li>
          <li>{user.followers} followers</li>
        </ul>
        <Button func={handleClick} text={isFollowing ? 'unfollow' : 'follow'} />
      </div>
    </li>
  );
};

export default Card;
