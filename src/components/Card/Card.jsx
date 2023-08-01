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
    localStorage.setItem(
      String(user.id),
      JSON.stringify({ ...user, followers: userFollowers, isFollowing })
    );
  }, [user, userFollowers, isFollowing]);

  useEffect(() => {
    if (updatedUser) {
      setIsFollowing(updatedUser.isFollowing);
      setUserFollowers(updatedUser.followers);
    }
  }, [updatedUser]);

  const handleClick = () => {
    setTimeout(() => {
      setIsFollowing(prev => !prev);
    }, 0);

    setTimeout(() => {
      setUserFollowers(prevFollowers =>
        isFollowing ? prevFollowers - 1 : prevFollowers + 1
      );
    }, 0);
    setUpdatedUser(JSON.parse(localStorage.getItem(String(user.id))));
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
