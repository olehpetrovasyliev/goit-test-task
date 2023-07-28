import Card from 'components/Card/Card';
import React from 'react';

const CardsList = ({ arr }) => {
  console.log(arr);
  return (
    <ul>
      {arr.map(el => (
        <Card user={el} />
      ))}
    </ul>
  );
};

export default CardsList;
