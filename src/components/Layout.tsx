import Header from "./Header";
import Footer from "./Footer";
import {
    Outlet
} from "react-router-dom";
import { useAppSelector } from '../store/hooks'

export function Layout() {
    const name = useAppSelector(state => state.auth.name)
    console.log(name);
    // if(name == ""){
    //   return <Navigate to="/auth" replace={true} />
    // }
    return (
        <div className='flex flex-col justify-between h-screen'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
