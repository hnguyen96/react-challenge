import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { updateName } from "../auth/authSlice";

export default function Header() {
    const storeName = useAppSelector(state => state.auth.name)
    const dispatch = useAppDispatch()

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Welcome {storeName}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/pokemon">Pokemon</Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Language</summary>
                            <ul className="p-2">
                                <li><a>English</a></li>
                                <li><a>Vietnamese</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn" onClick={() => dispatch(updateName(""))}>Logout</button>
            </div>
        </div>
    );
}