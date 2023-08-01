import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavWrapper, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <Suspense fallback={null}>
      <Header>
        <NavWrapper>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/tweets">Tweets</StyledNavLink>
        </NavWrapper>
      </Header>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
