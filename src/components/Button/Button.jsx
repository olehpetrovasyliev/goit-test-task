import React from 'react';
import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ func, text, background }) => {
  return (
    <StyledButton type="button" onClick={func} background={background}>
      {text}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  func: PropTypes.func,
  text: PropTypes.string,
  background: PropTypes.string,
};
