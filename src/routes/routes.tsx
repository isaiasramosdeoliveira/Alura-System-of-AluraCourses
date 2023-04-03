import React from 'react'
import {createBrowserRouter} from 'react-router-dom' 
import App from '../App';
import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import Curse from '../components/Curse/Curse';
import NotFound from '../pages/NotFound/NotFound';
import Post from '../pages/Post/Post';
import Form from '../pages/Form/Form';
import Edit from '../pages/Edit/Edit';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/curses", element: <Services /> },
      { path: "/login", element: <Login /> },
      { path: "/form", element: <Form /> },
      { path: "/curses/:id", element: <Post /> },
      { path: "/curses/edit/:id", element: <Edit /> },
    ],
  },
]);

export default router;