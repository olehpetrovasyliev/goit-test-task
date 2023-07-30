import { nanoid } from '@reduxjs/toolkit';
import Button from 'components/Button/Button';
import decor from '../../img/card_picture_1x.png';
import logo from '../../img/Logo.png';

import React, { useState, useEffect } from 'react';
import {
  Avatar,
  AvatarWrapper,
  CardText,
  CardWrapper,
  Image,
  ImageWrapper,
  Line,
  Logo,
  StyledCard,
} from './Card.styled';

import { useDispatch } from 'react-redux';
import { useRef } from 'react';

const Card = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [userFollowers, setUserFollowers] = useState(user.followers);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(
      String(user.id),
      JSON.stringify({ ...user, followers: userFollowers, isFollowing })
    );
  }, [isFollowing]);

  const updatedUser = JSON.parse(localStorage.getItem(String(user.id)));
  console.log(updatedUser);
  const handleClick = () => {
    setIsFollowing(prev => !prev);
    isFollowing
      ? setUserFollowers(prev => prev - 1)
      : setUserFollowers(prev => prev + 1);
  };
  return (
    <StyledCard>
      <ImageWrapper>
        <Image src={decor} alt="decoration" />
        <Logo src={logo} alt="GoIT logo" />
      </ImageWrapper>
      <Line />
      <AvatarWrapper>
        <Avatar src={user.avatar} alt="avatar" />
      </AvatarWrapper>

      <div>
        <CardText>{user.tweets.toLocaleString()} tweets</CardText>
        <CardText>{userFollowers.toLocaleString()} followers</CardText>

        <Button
          func={handleClick}
          text={isFollowing ? 'following' : 'follow'}
          background={!isFollowing ? '#EBD8FF' : '#5CD3A8'}
        />
      </div>
    </StyledCard>
  );
};

export default Card;
