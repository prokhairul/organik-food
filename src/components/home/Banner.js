import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import banner from '../../images/homepage/bannerfood.png'

const Banner = () => {
    return (
        <>
            <div className='bg-[#E3F1E9] relative'>
                <div className='md:flex md:flex-row md:justify-between items-center flex flex-col-reverse container mx-auto'>
                    <div>
                        <h4 className='font-[Yellowtail] font-normal md:text-4xl text-3xl leading-10 text-center md:text-left text-[#68A47F]'>100% Natural Food</h4>
                        <h2 className='font-[roboto] font-extrabold	md:text-7xl text-4xl text-center md:text-left text-[#274C5B] md:leading-[82px] leading-[50px]'>Choose the best</h2>
                        <h2 className='font-[roboto] font-extrabold	md:text-7xl text-4xl text-center md:text-left text-[#274C5B] md:leading-[82px] leading-[50px]'>healthier way</h2>
                        <h2 className='font-[roboto] font-extrabold	md:text-7xl text-4xl text-center md:text-left text-[#274C5B] md:leading-[82px] leading-[50px]'>of life</h2>

                        <button className='flex items-center gap-3 btn-yellow mx-auto md:mx-0 mt-6 mb-10 md:mb-0'>Explore Now <BsFillArrowRightCircleFill /></button>
                    </div>

                    <div className='md:w-[none] w-[60%] mt-3 md:mt-0'>
                        <img src={banner} alt="Banner" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;