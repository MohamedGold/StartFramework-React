import React from 'react';
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
function App() {
  let routes = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '', element: <Home /> },
        { path: '*', element: <Error /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
