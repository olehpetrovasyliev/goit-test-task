import { nanoid } from '@reduxjs/toolkit';
import Button from 'components/Button/Button';
import React from 'react';

const Card = ({ user }) => {
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
        <Button />
      </div>
    </li>
  );
};

export default Card;
