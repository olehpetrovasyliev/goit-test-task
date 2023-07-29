import { nanoid } from '@reduxjs/toolkit';
import Button from 'components/Button/Button';
import React, { useState } from 'react';
import {
  Avatar,
  AvatarWrapper,
  CardText,
  CardWrapper,
  Line,
  StyledCard,
} from './Card.styled';
// import { StyledButton } from 'components/Button/Buttons.styled';

const Card = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleClick = () => {
    setIsFollowing(prev => !prev);
  };
  return (
    <StyledCard>
      {/* <div> */}
      <div>
        <img src="../../img/card_picture_1x.png" alt="decoration" />
      </div>
      <Line />
      <AvatarWrapper>
        <Avatar src={user.avatar} alt="avatar" />
      </AvatarWrapper>

      <div>
        <CardText>{user.tweets} tweets</CardText>
        <CardText>{user.followers} followers</CardText>

        <Button func={handleClick} text={isFollowing ? 'unfollow' : 'follow'} />
      </div>
      {/* </div> */}
    </StyledCard>
  );
};

export default Card;
