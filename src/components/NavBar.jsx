import { Outlet, Link } from "react-router-dom";
import logo from "../images/m.svg";

const NavBar = () => {
    return (
        <>
            <nav className="col-span-12 mt-1.5">
                <ul className="list-none flex flex-row justify-between items-center">
                    <li>
                        <Link to="/">
                            <img
                                src={logo}
                                width="100"
                                height="100"
                                alt="Page logo"
                                className="drop-shadow-md"
                            />
                        </Link>
                    </li>
                    <li>
                        <ul className="w-fit-content h-fit-content flex self-center items-center">
                            <li className="flex self-center mr-24">
                                <Link
                                    to="/"
                                    className="text-h3 font-LS uppercase text-oxford-blue hover:underline hover:decoration-2 rounded-xl active:text-sea-green"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="flex self-center mr-24">
                                <Link
                                    to="/about"
                                    className="text-h3 font-LS uppercase text-oxford-blue hover:underline hover:decoration-2 rounded-xl active:text-sea-green"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="flex self-center mr-24">
                                <Link
                                    to="/portfolio"
                                    className="text-h3 font-LS uppercase text-oxford-blue hover:underline hover:decoration-2 rounded-xl active:text-sea-green"
                                >
                                    My Work
                                </Link>
                            </li>
                            <li className="flex self-center">
                                <Link
                                    to="/contact"
                                    className="text-h3 font-LS uppercase text-alabaster bg-sea-green w-48 inline-block px-10 py-2.5 rounded-xl drop-shadow-md active:bg-oxford-blue active:text-alabaster"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default NavBar;
