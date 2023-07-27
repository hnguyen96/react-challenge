import './App.css'
import Home from './pages/Home';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Pokemon from './pages/Pokemon';
import Header from './components/Header';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import { useAppSelector } from './store/hooks'
import { Provider } from 'react-redux'
import store from './store/store.ts'

const AuthProviderLayout = () => (
  <Provider store={store}>
    <Outlet />
  </Provider>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthProviderLayout />}>
      <Route element={<Root />}>
        <Route path="/" element={<Home />}/>
        <Route path="/pokemon" element={<Pokemon />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  const storeName = useAppSelector(state => state.auth.name)
  
  if (storeName == "") {
    return <Navigate to="/auth" replace={true} />
  }

  return (
    <div className='flex flex-col justify-between h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
