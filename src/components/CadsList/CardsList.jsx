import { nanoid } from '@reduxjs/toolkit';
import Card from 'components/Card/Card';
import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledCardsList } from './CardList.styled';

const CardsList = ({ arr }) => {
  const dispatch = useDispatch();

  return (
    <StyledCardsList>
      {arr.map(el => (
        <Card user={el} key={el.id} />
      ))}
    </StyledCardsList>
  );
};

export default CardsList;
