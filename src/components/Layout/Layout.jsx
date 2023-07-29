import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Suspense fallback={null}>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </header>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
