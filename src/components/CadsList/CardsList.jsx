import { nanoid } from '@reduxjs/toolkit';
import Card from 'components/Card/Card';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'services/redux/selectors';

const CardsList = ({ arr }) => {
  const dispatch = useDispatch();
  // const users = useSelector(selectUsers);

  return (
    <ul>
      {arr.map(el => (
        <Card user={el} key={nanoid()} />
      ))}
    </ul>
  );
};

export default CardsList;
