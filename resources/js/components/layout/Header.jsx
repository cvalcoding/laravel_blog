import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { getProfileData } from "../../data/authData";

function Header() {
    const [auth, setAuth] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
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

    useEffect(() => {
        if (token) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);

    const handleLogout = () => {
        console.log("log out pour user");
        localStorage.removeItem("token");
        navigate("/");
    };

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
                            {auth ? (
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
                                        <button
                                            className="nav-link link-body-emphasis px-2"
                                            onClick={handleLogout}
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                </>
                            ) : (
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
                            )}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
