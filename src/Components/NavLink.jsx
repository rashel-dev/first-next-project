import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href }) => {
    const pathName = usePathname();
    console.log(pathName);
    const isActive = pathName === href || (pathName.startsWith(href) && href !== "/");
    return (
        <Link className={`${isActive && "bg-sky-500 px-2 py-1 text-white rounded-full"}`} href={href}>
            {children}
        </Link>
    );
};

export default NavLink;
