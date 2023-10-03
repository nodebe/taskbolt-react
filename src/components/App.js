import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '../styles/App.css';

import Register from './auth/Register.auth.component';
import NotFound from './errors/NotFound.component.errors';
import Home from './Home.component';
import Login from './auth/Login.auth.component';
import ForgotPassword from './auth/ForgotPassword.auth.component';
import ResetPassword from './auth/ResetPassword.auth.component';
import EnterOtp from './auth/EnterOtp.auth.components';

function App() {
  const routes = createBrowserRouter([
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      },
      {
        path: '/reset-password',
        element: <ResetPassword />
      },
      {
        path: '/enter-otp',
        element: <EnterOtp />
      },
      {
        path: '*',
        element: <NotFound />
      }
  ])
  return (
    <RouterProvider router = { routes } />
  )
}

export default App;