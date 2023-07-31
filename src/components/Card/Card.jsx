import Button from 'components/Button/Button';
import decor from '../../img/card_picture_1x.png';
import logo from '../../img/Logo.png';

import React, { useState, useEffect } from 'react';
import {
  Avatar,
  AvatarWrapper,
  CardText,
  Image,
  ImageWrapper,
  Line,
  Logo,
  StyledCard,
} from './Card.styled';
const Card = ({ user }) => {
  const [updatedUser, setUpdatedUser] = useState(
    JSON.parse(localStorage.getItem(String(user.id)))
  );
  const [isFollowing, setIsFollowing] = useState(false);
  const [userFollowers, setUserFollowers] = useState(user.followers);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(
        String(user.id),
        JSON.stringify({ ...user, followers: userFollowers, isFollowing })
      );
    }, 0);
  }, [user, userFollowers, isFollowing]);
  useEffect(() => {
    if (updatedUser) {
      setIsFollowing(updatedUser.isFollowing);
      setUserFollowers(updatedUser.followers);
    }
    setUpdatedUser(JSON.parse(localStorage.getItem(String(user.id))));
  }, [user.id]);

  const handleClick = () => {
    console.log(isFollowing);

    setIsFollowing(prev => !prev);
    console.log(isFollowing);

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
        <CardText>
          {user.tweets.toLocaleString()}
          tweets
        </CardText>
        <CardText>
          {userFollowers.toLocaleString()}
          followers
        </CardText>

        <Button
          func={handleClick}
          text={isFollowing ? 'following' : 'follow'}
          background={isFollowing ? '#5CD3A8' : '#EBD8FF'}
        />
      </div>
    </StyledCard>
  );
};

export default Card;
