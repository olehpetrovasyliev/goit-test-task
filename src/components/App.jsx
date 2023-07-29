import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const TweetsPage = lazy(() => import('../pages/Tweets/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
