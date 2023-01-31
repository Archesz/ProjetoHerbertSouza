import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import ComingSoon from "./pages/ComingSoon";
import Projetos from "./pages/Projetos";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/global.scss'

/* Componentes gerais */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/historia",
    element: <About/>,
  },
  {
    path: "/projetos",
    element: <Projetos/>,
  },
  {
    path: "/contato",
    element: <Contact/>,
  },
  {
    path: "/embreve",
    element: <ComingSoon/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);