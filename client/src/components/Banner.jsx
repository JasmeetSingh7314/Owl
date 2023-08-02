import React,{useState,useRef} from 'react'
import video from '../assets/video/vid3.mp4'
import Blur from './Blur';

const Banner = () => {
  const videoRef=useRef();
  return (
    <div className= 'h-[100vh] '>
      <div className=' absolute z-20 justify-start w-1/3 mt-20 ml-20  '>
       <h1 className=' italic text-white text-[100px] font-primary'>Serve the Shadows</h1>
       <p className='italic text-white text-[20px] font-secondary'>Join the Legion<br/> Eternity is waiting</p>
       
      </div>
      <div className=' relative h-72 w-full ' >
       <video
        src={video}
        type='video/mp4'
        ref={videoRef}
        autoPlay={true}
        className=' h-50 w-full opacity-40 '
        loop
        muted
        controls={false}

        />
        

      </div>
      
    
    
        
      
    </div>
  )
}

export default Banner
