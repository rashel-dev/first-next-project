"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    const pathName = usePathname();
    // console.log(pathName);

    if(pathName.startsWith('/dashboard')) return <></>;
    return (
        <header className='border-b p-4 flex items-center justify-between'>
            <h2>🐳 Dev-Story</h2>
            <nav className='flex items-center gap-2'>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/about'>About</NavLink>
                <NavLink href='/stories'>Stories</NavLink>
                <NavLink href='/tutorials'>Tutorial</NavLink>
                <NavLink href='/login'>Login</NavLink>
                <NavLink href='/register'>Register</NavLink>
            </nav>
            <h2></h2>
        </header>
    );
};

export default Header;