export default function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Welcome name</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home Page</a></li>
                    <li><a>Pokemon</a></li>
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
                <a className="btn">Logout</a>
            </div>
        </div>
    );
}