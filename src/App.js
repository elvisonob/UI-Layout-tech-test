import './index.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
