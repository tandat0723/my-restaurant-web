'use client'
import React from 'react';
import './Navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
    const location = usePathname();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="navbar navbar-expand-lg bg-black">
            <nav className='nav'>
                <Link href='/' className="navbar-brand">
                    <img src='/logo.png' alt="logo" height="30" />
                </Link>
                <div className="" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item text-white">
                            <Link
                                href='/'
                                className={`nav-link ${isActive('/') ? 'active' : 'inactive'}`}
                            >
                                Vấn Đáp 1
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href='/tips'
                                className={`nav-link ${isActive('/tips') ? 'active' : 'inactive'}`}
                            >
                                Tips
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/profile"
                                className={`nav-link ${isActive('/profile') ? 'active' : 'inactive'}`}
                            >
                                Về chúng tôi
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;