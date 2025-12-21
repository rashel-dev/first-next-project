import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='border-b p-4 flex items-center justify-between'>
            <h2>🐳 Dev-Story</h2>
            <nav className='flex items-center gap-2'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/stories'>Stories</Link>
                <Link href='/tutorials'>Tutorial</Link>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
            </nav>
            <h2></h2>
        </header>
    );
};

export default Header;