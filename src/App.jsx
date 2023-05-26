import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home';

const Heroes = lazy(() =>
  import('pages/Heroes').then(module => ({
    ...module,
    default: module.Heroes,
  }))
);

const HeroDetails = lazy(() =>
  import('pages/HeroDetails').then(module => ({
    ...module,
    default: module.HeroDetails,
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
