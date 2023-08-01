import { styled } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  width: 196px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: ${props => props.background};
  color: #373737;
  border-radius: 10px;
  text-transform: uppercase;

  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
