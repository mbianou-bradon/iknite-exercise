import React from 'react'
import tablet_guy from "/home/bradon/Desktop/iknite-exercise/ex6-bradmarketing-reactjs/src/assets/tablet_guy.png"
import line from "/home/bradon/Desktop/iknite-exercise/ex6-bradmarketing-reactjs/src/assets/line.png"


function Hero_sub() {
  return (
    <div>
        <div className='hero__orange_box bg-ORANGE w-[340.71px] h-[336.25px] relative shadow-bx'>
            <img src={tablet_guy} alt="" className='h-[90%] w-auto absolute bottom-0 left-14 z-20'/>
            <img src={line} alt="" className='absolute -bottom-14 -left-24 z-0 rotate-6'/>
        </div>
        
    </div>
  )
}

export default Hero_sub