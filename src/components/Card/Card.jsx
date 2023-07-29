import { nanoid } from '@reduxjs/toolkit';
import Button from 'components/Button/Button';
import React, { useState } from 'react';
import {
  Avatar,
  AvatarWrapper,
  CardText,
  CardWrapper,
  Image,
  Line,
  StyledCard,
} from './Card.styled';
import { followUserThunk, unfollowUserThunk } from 'services/redux/operations';
import { useDispatch } from 'react-redux';
// import { StyledButton } from 'components/Button/Buttons.styled';

const Card = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsFollowing(prev => !prev);
    isFollowing
      ? dispatch(unfollowUserThunk(user))
      : dispatch(followUserThunk(user));
    console.log(user.followers);
  };
  return (
    <StyledCard>
      {/* <div> */}
      <div>
        <Image src="../../img/card_picture_1x.png" alt="decoration" />
      </div>
      <Line />
      <AvatarWrapper>
        <Avatar src={user.avatar} alt="avatar" />
      </AvatarWrapper>

      <div>
        <CardText>{user.tweets} tweets</CardText>
        <CardText>{user.followers} followers</CardText>

        <Button
          func={handleClick}
          text={isFollowing ? 'following' : 'follow'}
          background={!isFollowing ? '#EBD8FF' : '#5CD3A8'}
        />
      </div>
      {/* </div> */}
    </StyledCard>
  );
};

export default Card;
