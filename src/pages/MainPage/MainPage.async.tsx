import { lazy } from 'react';
// const AboutPageAsync = React.lazy(() => import('./AboutPage'));
export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);
