"use client";

import style from "./navbar.module.css";
import Link from "next/link";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    return (
        <div className={style.container}>
            <Link className={style.logo} href="/">
                IQBAL
            </Link>
            <div className={style.links}>
                {links.map((link, i) => (
                    <Link className={style.link} key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
                <button
                    className={style.logout}
                    onClick={() => {
                        console.log("Logged Out");
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
