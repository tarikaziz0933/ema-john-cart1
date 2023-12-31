import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRouter from './routes/PrivateRouter';
import Admin from './components/Admin/Admin';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          // loader: () => fetch('http://localhost:5000/products'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: () => productsAndCartLoader(),
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
        },
        {
          path: '/shipping',
          element: <PrivateRouter><Shipping></Shipping></PrivateRouter>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/admin',
          element: <PrivateRouter><Admin></Admin></PrivateRouter>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
