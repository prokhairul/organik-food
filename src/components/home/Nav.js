/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { BiMenu, BiNews } from "react-icons/bi";
import { BiHomeHeart, BiBlanket, BiBookmarks, BiShoppingBag, BiUnite } from "react-icons/bi";
import logo from '../../images/homepage/logo.png'

const Nav = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const handleNavToggle = () => {
        setToggleNav(!toggleNav);
        console.log("Toggle Working", toggleNav)
    }

    return (
        <nav className='md:bg-white md:py-10  md:shadow-sm'>
            <div className='flex justify-between container mx-auto items-center'>
                <div className='flex items-center gap-32'>
                    <div className='md:ml-0 ml-2'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='items-center gap-8 font-[roboto] font-bold text-[#274C5B] text-lg hidden md:flex lg:flex'>
                        <a className='hover:text-[#68A47F] transition-shadow' href="#">Home</a>
                        <a className='hover:text-[#68A47F] transition-shadow' href="#">About</a>
                        <a className='hover:text-[#68A47F] transition-shadow' href="#">Pages</a>
                        <a className='hover:text-[#68A47F] transition-shadow' href="#">Shop</a>
                        <a className='hover:text-[#68A47F] transition-shadow' href="#">Projects</a>
                        <a className='hover:text-[#68A47F] transition-shadow' href="#">News</a>
                    </div>
                </div>
                <div className='items-center gap-4 hidden md:flex'>
                    <div className='flex items-center relative'>
                        <input className="placeholder:italic placeholder:text-slate-400 block bg-[#FAFAFA] w-full rounded-3xl py-3.5 pl-4 pr-20 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search Here..." type="text" name="search" />
                        <span className='absolute inset-y-0 right-0 flex items-center bg-[#7EB693] rounded-3xl p-3.5 m-1 text-white'><CiSearch /></span>
                    </div>
                    <div className='flex items-center border-[1px] border-slate-300 rounded-3xl'>
                        <span className='bg-[#274C5B] rounded-3xl p-3.5 text-white mr-2'><TiShoppingCart /></span>
                        <p className='pr-3'>Cart <span>(0)</span></p>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button onClick={handleNavToggle} className='p-5 text-3xl transition duration-1000'><BiMenu /></button>
                </div>
            </div>
            {
                toggleNav ? (
                    <div className='flex flex-col md:hidden px-10 py-6 items-center left-[2.5%] w-[95%] bg-[#7eb693] rounded-xl my-4 absolute z-[1]'>
                        <a className='flex items-center gap-2 py-1 text-white font-bold tracking-widest font-[roboto] text-lg active:border-2 px-12 rounded-md mb-3' href="#"><BiHomeHeart /> Home</a>
                        <a className='flex items-center gap-2 py-1 text-white font-bold tracking-widest font-[roboto] text-lg active:border-2 px-12 rounded-md mb-3' href="#"> <BiBlanket /> About</a>
                        <a className='flex items-center gap-2 py-1 text-white font-bold tracking-widest font-[roboto] text-lg active:border-2 px-12 rounded-md mb-3' href="#"> <BiBookmarks /> Pages</a>
                        <a className='flex items-center gap-2 py-1 text-white font-bold tracking-widest font-[roboto] text-lg active:border-2 px-12 rounded-md mb-3' href="#"> <BiShoppingBag /> Shop</a>
                        <a className='flex items-center gap-2 py-1 text-white font-bold tracking-widest font-[roboto] text-lg active:border-2 px-12 rounded-md mb-3' href="#"> <BiUnite /> Projects</a>
                        <a className='flex items-center gap-2 py-1 text-white font-bold tracking-widest font-[roboto] text-lg active:border-2 px-12 rounded-md' href="#"> <BiNews /> News</a>
                    </div>
                ) : null
            }
        </nav>
    );
};

export default Nav;