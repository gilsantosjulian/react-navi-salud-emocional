import React from 'react';
import { mount, route, } from 'navi';
import Home from './home/Home';
import About from './About/About';
import Services from './Services/Services';
import Galery from './Galery/Galery';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import NotFound from './notFound/NotFound';

// Define your routes
const routes = mount({
  '/': route({
    title: 'Inicio',
    getData: () => {},
    view: <Home />,
  }),
  '/inicio': route({
    title: 'Inicio',
    getData: () => {},
    view: <Home />,
  }),
  '/sobre-nosotros': route({
    title: 'Sobre Nosotros',
    getData: () => {},
    view: <About />,
  }),
  '/servicios': route({
    title: 'Servicios',
    getData: () => {},
    view: <Services />,
  }),
  '/galeria': route({
    title: 'Galería',
    getData: () => {},
    view: <Galery />,
  }),
  '/blog': route({
    title: 'Blog',
    getData: () => {},
    view: <Blog />,
  }),
  '/contacto': route({
    title: 'Contáctanos',
    getData: () => {},
    view: <Contact />,
  }),
  // "/products": lazy(() => import("./productsRoutes"))
  '/notFound': route({
    title: 'NotFound',
    getData: () => {},
    view: <NotFound />,
  }),
});

export default routes;
