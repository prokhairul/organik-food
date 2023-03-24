import React from 'react';
import offerbanner from '../../images/homepage/offerbanner.png';
import offerbanner2 from '../../images/homepage/offerbanner2.png'

const OfferBanner = () => {
    return (
        <>
            <div className='container mx-auto md:flex md:flex-row md:justify-between md:mt-40 mt-10 flex-col h-fit'>
                <div className='pr-3 pl-3'>
                    <div className='relative'>
                        <img src={offerbanner} alt="" />
                    </div>
                    <div className='relative md:top-[-250px] md:left-[50px] top-[-150px] left-[10px]'>
                        <h4 className='font-[Yellowtail] md:text-4xl text-3xl leading-[49px] font-normal text-white'>Natural!!</h4>
                        <h3 className='font-[roboto] md:text-[40px] text-2xl md:leading-[47px] font-extrabold text-white'>Get Garden</h3>
                        <h3 className='font-[roboto] md:text-[40px] text-2xl md:leading-[47px] font-extrabold text-white'>Fresh Fruits</h3>
                    </div>
                </div>

                <div className='pr-3 pl-3 mt-[-100px] md:mt-0'>
                    <div className='relative'>
                        <img src={offerbanner2} alt="" />
                    </div>
                    <div className='relative md:top-[-250px] md:left-[50px]  top-[-150px] left-[10px]'>
                        <h4 className='font-[Yellowtail] md:text-4xl text-3xl leading-[49px] font-normal text-[#7EB693]'>Offer!!</h4>
                        <h3 className='font-[roboto] md:text-[40px] text-2xl md:leading-[47px] font-extrabold text-black'>Get 10% off</h3>
                        <h3 className='font-[roboto] md:text-[40px] text-2xl md:leading-[47px] font-extrabold text-black'>on Vegetables</h3>
                    </div>
                </div>

            </div>
        </>
    );
};

export default OfferBanner;