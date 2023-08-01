import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: fixed;
  width: 100vw;
  top: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
`;
export const NavWrapper = styled.nav`
  display: flex;
  gap: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 4px 16px;
  border-radius: 6px;
  color: #000;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  text-decoration: none;
  box-shadow: 0 0 1px rgba(225, 225, 225, 0.5);

  &.active {
    color: #fff;
  }
`;
