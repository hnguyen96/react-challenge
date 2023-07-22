import './App.css'
import Home from './pages/Home';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Pokemon from './pages/Pokemon';
import Header from './components/Header';
import Footer from './components/Footer';
import Auth from './pages/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pokemon",
        element: <Pokemon />,
      },
    ]
  },
  {
    path: "/auth",
    element: <Auth />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}
