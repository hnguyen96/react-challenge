import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { updateName } from "../auth/authSlice";
import { languages } from "../lang";
import { useTranslation } from "react-i18next";

export default function Header() {
    const storeName = useAppSelector(state => state.auth.name)
    const dispatch = useAppDispatch()

    const { i18n } = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Welcome {storeName}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/pokemon">Pokemon</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <select className="select select-secondary max-w-xs" defaultValue={i18n.language} onChange={onChangeLang}>
                    {languages.map(({ code, label }) => (
                        <option key={code} value={code}>
                            {label}
                        </option>
                    ))}
                </select>
                <button className="btn" onClick={() => dispatch(updateName(""))}>Logout</button>
            </div>
        </div>
    );
}