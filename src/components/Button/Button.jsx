import React from 'react';
import { StyledButton } from './Buttons.styled';

const Button = ({ func, text, background }) => {
  return (
    <StyledButton type="button" onClick={func} background={background}>
      {text}
    </StyledButton>
  );
};

export default Button;