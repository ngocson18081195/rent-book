import React from 'react';
import Resume from './Components/Resume.js';
const detailEbook = React.lazy(() => import('./Components/DetailBook/detailBook.js'));
const DefaultLayout = React.lazy(() => import('./DefaultLayout.js'));

const routes = [
  { path: '/product/detail', name: 'detailEbook', component:  detailEbook},
  { path: '/', name: 'home', component:  DefaultLayout},
  { path: '/abcd', name: 'home', component:  Resume},
];

export default routes;
