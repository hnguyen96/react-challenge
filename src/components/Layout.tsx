import Header from "./Header";
import Footer from "./Footer";
import {
    Outlet
  } from "react-router-dom";

export function Layout() {
    return(
        <div className='flex flex-col justify-between h-screen'>
            <Header />
            <main><Outlet/></main>
            <Footer />
        </div>
    );
}
