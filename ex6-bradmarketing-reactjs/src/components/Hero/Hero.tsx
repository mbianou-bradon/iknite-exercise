import React from 'react'
import Hero_sub from './Hero_sub'
import white_guy from "/home/bradon/Desktop/iknite-exercise/ex6-bradmarketing-reactjs/src/assets/white_guy.png"


function Hero() {
  return (
    <header className='w-full h-[744px] flex items-center justify-between bg-GREEN-500 px-[68px] py-[56px]'>
        <div className="header__text text-white">
            <div className='w-[512px] h-[258px] mb-[103px]'>
                <h2 className="header__text__caption text-[124px] leading-[124px] font-extrabold">
                    Shopify Products
                </h2>
                <p className='text-[21px] opacity-75'>
                    More than 80,000+ companies trust our 
                    business
                </p>
            </div>

            <div className='bg-white flex items-center justify-center relative w-[390px] h-[125px]'>
                <div className="hero_img_white absolute -top-14 -left-[4.5rem]">
                    <img src={white_guy} alt="" />
                </div>

                <div className='text-center absolute top-8 right-16'>
                    <h2 className='text-black font-extrabold'>John Smith</h2>
                    <p className='text-slate-400'>Watch our intro video</p>
                </div>

                <div className='absolute -right-6'>
                    <div className='bg-ORANGE relative rounded-full w-[56.81px] h-[58.21px]'>
                        <svg className='absolute left-[1.4rem] top-[1rem]' width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.49707 18.3087V3.75671C1.12824 -1.41732 4.96785 -0.0160195 6.80876 1.33138L16.2763 7.79892C20.0633 10.3859 17.8542 13.1885 16.2763 14.2664L6.80876 20.734C2.39058 23.9677 0.760057 20.4645 0.49707 18.3087Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <Hero_sub/>
    </header>
  )
}

export default Hero