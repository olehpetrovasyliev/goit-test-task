import Card from 'components/Card/Card';
import React from 'react';
import PropTypes from 'prop-types';

import { StyledCardsList } from './CardList.styled';

const CardsList = ({ arr }) => {
  return (
    <StyledCardsList>
      {arr.map(el => (
        <Card user={el} key={el.id} />
      ))}
    </StyledCardsList>
  );
};

export default CardsList;

CardsList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ),
};
