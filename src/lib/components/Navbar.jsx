import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo-text.png";
import Button from "./Button";
import GetCart from "../helpers/getCart";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { data } = GetCart();

    const cartQuantity = data?.length

    const menus = [
        { name: "Home", link: "/home" },
        { name: "Our Menu", link: "/menu" },
        { name: "Our Shop", link: "/shop" },
        { name: "Contact Us", link: "/contact" },
    ];
    return (
        <div className="shadow-lg w-full fixed bg-black/40 top-0 z-10">
            <div className="flex items-center justify-between py-4 lg:px-14 px-7">
                <Link to={"/"}>
                    <img className="w-36 h-auto" src={logo} alt="" />
                </Link>
                <div className="flex items-center">
                    <Link
                        to={"/cart"}
                        className="relative mr-14 text-white lg:hidden"
                    >
                        <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                            {cartQuantity ?? 0}
                        </small>
                        <AiOutlineShoppingCart className="text-2xl font-medium" />
                    </Link>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-3xl absolute right-8 cursor-pointer lg:hidden"
                    >
                        {isOpen ? (
                            <CgClose className="text-primary" />
                        ) : (
                            <VscThreeBars className="text-primary" />
                        )}
                    </div>
                </div>

                <ul
                    className={`w-full text-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 lg:w-auto transition-all duration-500 ease-in ${
                        isOpen ? "top-20 " : "top-[-490px]"
                    } ${
                        isOpen &&
                        "h-screen flex bg-black/70 items-center justify-center mt-[-5rem]"
                    }`}
                >
                    <div className="lg:flex lg:items-center space-y-7 lg:space-y-0 lg:space-x-5">
                        {menus.map((menu, index) => (
                            <li key={index} className="text-xl lg:my-0 my-7">
                                <NavLink
                                    to={menu.link}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-primary uppercase font-bold"
                                            : "hover:text-primary uppercase text-white font-bold duration-500"
                                    }
                                >
                                    {menu.name}
                                </NavLink>
                            </li>
                        ))}
                        <Link to={"/cart"} className="relative hidden lg:block">
                            <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                                {cartQuantity ?? 0}
                            </small>
                            <AiOutlineShoppingCart className="text-2xl font-medium text-white" />
                        </Link>
                        <div>
                            <Link to={"/login"}>
                                <Button>Log In</Button>
                            </Link>
                            <Link to={"/email-verify"}>
                                <Button>Log In</Button>
                            </Link>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
