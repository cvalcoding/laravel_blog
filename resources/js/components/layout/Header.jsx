import { NavLink } from "react-router";

function Header() {
    const token = localStorage.getItem("token");
    const links = [
        {
            id: 1,
            path: "/",
            title: "Home",
        },
        {
            id: 2,
            path: "/about",
            title: "About",
        },
    ];
    return (
        <>
            <header>
                <nav className="py-2 bg-primary border-bottom">
                    <div className="container d-flex flex-wrap">
                        <ul className="nav me-auto">
                            {links.map((link) => (
                                <li className="nav-item" key={link.id}>
                                    <NavLink
                                        className="nav-link link-body-emphasis px-2"
                                        to={link.path}
                                    >
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <ul className="nav">
                            {token ? <UserLoggedIn /> : <UserLoggedOut />}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

function UserLoggedOut() {
    return (
        <>
            <li className="nav-item">
                <NavLink
                    to="/user/signin"
                    className="nav-link link-body-emphasis px-2"
                >
                    Sign In
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="/user/signup"
                    className="nav-link link-body-emphasis px-2"
                >
                    Sign Up
                </NavLink>
            </li>
        </>
    );
}

function UserLoggedIn() {
    return (
        <>
            <li className="nav-item">
                <NavLink
                    to="/user"
                    className="nav-link link-body-emphasis px-2"
                >
                    Profile
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="#" className="nav-link link-body-emphasis px-2">
                    Log Out
                </NavLink>
            </li>
        </>
    );
}

export default Header;
