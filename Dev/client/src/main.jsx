import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Home from './components/Home';
// import Profile from './pages/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import SingleGame from './components/SingleGame';
// import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/single-game/:gameId',
        element: <SingleGame />
      },{
      
        path: '/profiles/:profileId',
        element: <Profile />
      },
      // {
      //   path: '/me',
      //   element: <Profile />
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)