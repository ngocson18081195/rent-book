import React from 'react';
const detailEbook = React.lazy(() => import('./Components/DetailBook/detailBook.js'));
const Testimonials = React.lazy(() => import('./Components/Products/Testimonials.js'));

const routes = [
  { path: '/products', exact: true, name: 'product', component:  Testimonials},
  { path: '/product/detail/', name: 'detailEbook', component:  detailEbook},
  // { path: '/home', exact: true,  name: 'home', component:  DefaultLayout},
  // { path: '/abcd', name: 'home', component:  Resume},

];

export default routes;
