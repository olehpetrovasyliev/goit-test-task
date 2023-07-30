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

import { useRef } from 'react';

const Card = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [userFollowers, setUserFollowers] = useState(user.followers);

  const isFirstRender = useRef(true);

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    // setTimeout(() => {
    localStorage.setItem(
      String(user.id),
      JSON.stringify({ ...user, followers: userFollowers, isFollowing })
    );
    // }, 0);
  }, [user.id, userFollowers, isFollowing]);

  const updatedUser = JSON.parse(localStorage.getItem(String(user.id)));

  useEffect(() => {
    // Retrieve data from localStorage and update the state
    const updatedUser = JSON.parse(localStorage.getItem(String(user.id)));
    if (updatedUser) {
      setIsFollowing(updatedUser.isFollowing);
      setUserFollowers(updatedUser.followers);
    }
  }, [user.id]);

  const handleClick = () => {
    setIsFollowing(prev => !prev);
    isFollowing
      ? setUserFollowers(prev => prev - 1)
      : setUserFollowers(prev => prev + 1);
  };

  console.log(updatedUser);

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
        <CardText>
          {updatedUser
            ? updatedUser.tweets.toLocaleString()
            : user.tweets.toLocaleString()}
          tweets
        </CardText>
        <CardText>
          {updatedUser
            ? updatedUser.followers.toLocaleString()
            : userFollowers.toLocaleString()}
          followers
        </CardText>

        <Button
          func={handleClick}
          text={updatedUser?.isFollowing ? 'following' : 'follow'}
          background={updatedUser.isFollowing ? '#5CD3A8' : '#EBD8FF'}
        />
      </div>
    </StyledCard>
  );
};

export default Card;
