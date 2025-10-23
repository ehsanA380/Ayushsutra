import React from 'react'
import logo from '../assets/logo-png.png'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    console.log(location.pathname); // This gives you the current path

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm px-10 z-10 bg-transparent text-white">
                <div className="flex-1  ">
                    <a  className="hover:text-warning hover:shadow-none hover:outline-transparent  bg-transparent outline-none btn btn-ghost text-xl">
                    <span className='mr-[-20px]'><img className='w-12 inline-block' src={logo} alt="logo" /></span>
                        AushSutra</a>
                </div>
                <div className='flex-2 justify-between space-x-4 '>
                    <Link to="/"className={`btn btn-ghost ${location.pathname === '/' ? 'bg-green-700' : ''}`}>Home</Link>
                    <Link className={`btn btn-ghost ${location.pathname === '/product' ? 'bg-green-700' : ''}`} to={'/product'} >Product</Link>
                    <Link className={`btn btn-ghost ${location.pathname === '/services' ? 'bg-green-700' : ''}`} to={'/services'}>Services</Link>
                    <Link className={`btn btn-ghost ${location.pathname === '/about' ? 'bg-green-700' : ''}`} to={'/about'}>About</Link>
                </div>
                <div className="flex-none text-black ">
                    <div className="dropdown dropdown-end  ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-5 ">
                            <div className="indicator text-white hover:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item bg-red-500">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
