import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { HeroDetails } from 'pages/HeroDetails/HeroDetails';

const Heroes = lazy(() =>
  import('pages/Heroes/Heroes').then(module => ({
    ...module,
    default: module.Heroes,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/heroes/:heroId" element={<HeroDetails />} />

        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
