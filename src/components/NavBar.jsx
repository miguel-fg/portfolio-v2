import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../images/m.svg";
import burger from "../images/burger.svg";
import close from "../images/close.svg";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <>
            <nav className="col-span-12 mt-1.5">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex flex-row justify-between w-full">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Page logo"
                                className="drop-shadow-md w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem]"
                            />
                        </Link>
                        <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
                            <img
                                src={ showMenu ? close : burger}
                                alt ="Menu button"
                                className="drop-shadow-md w-[4rem] h-[4rem]"
                            />
                        </button>
                    </div>
                <div className={`${showMenu ? "" : "hidden"} w-full lg:block lg:w-auto`}>
                    <ul className="block w-full lg:w-fit-content h-fit-content flex flex-col lg:flex-row lg:self-center lg:items-center">
                        <li className="flex py-6 lg:py-0 lg:self-center lg:mr-12 xl:mr-20 block border-b border-sea-green border-opacity-50 lg:border-b-0">
                            <Link
                                to="/"
                                className="text-h3 font-LS uppercase text-oxford-blue hover:underline hover:decoration-2 rounded-xl active:text-sea-green"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="flex py-6 lg:py-0 lg:self-center lg:mr-12 xl:mr-20 block border-b border-sea-green border-opacity-50 lg:border-b-0">
                            <Link
                                to="/about"
                                className="text-h3 font-LS uppercase text-oxford-blue hover:underline hover:decoration-2 rounded-xl active:text-sea-green"
                            >
                                About
                            </Link>
                        </li>
                        <li className="flex py-6 lg:py-0 lg:self-center lg:mr-12 xl:mr-20 block border-b border-sea-green border-opacity-50 lg:border-b-0">
                            <Link
                                to="/portfolio"
                                className="text-h3 text-nowrap font-LS uppercase text-oxford-blue hover:underline hover:decoration-2 rounded-xl active:text-sea-green"
                            >
                                My Work
                            </Link>
                        </li>
                        <li className="flex justify-center">
                            <Link
                                to="/contact"
                                className="text-h3 text-center mt-6 lg:mt-0 font-LS uppercase text-alabaster bg-sea-green inline-block w-11/12 lg:w-auto lg:px-10 py-2.5 rounded-xl drop-shadow-md active:bg-oxford-blue active:text-alabaster"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default NavBar;
