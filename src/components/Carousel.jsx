import React from 'react';
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';

import './Carousel.css';

const galleryimages=[
  {
    url: 'https://wallpaperaccess.com/full/1121398.jpg',
  },
  {
    url: 'https://cdn.discordapp.com/attachments/1053357407889268786/1089652018555146260/1082090.jpg',
  },
  {
    url: 'https://cdn.discordapp.com/attachments/1064938077912567978/1089908536735178793/horizon.jpg',
  },

  {
    url: 'https://images5.alphacoders.com/109/1091255.png',
  },
  {
    url: 'https://images2.alphacoders.com/949/949049.png',
  },
  {
    url:'https://images7.alphacoders.com/750/750703.jpg'
  },
  {
    url:'http://wallpaperset.com/w/full/a/7/8/169199.jpg'
  },
  {
    url:'https://wallpaperaccess.com/full/4015624.png'
  },
  {
    url:'https://wallpapercave.com/wp/wp11672147.jpg'
  }
];

const Carousel = () => {
  const scrollRef=React.useRef(null);

  const scroll=(direction)=>{
    const { current }=scrollRef;

    if (direction=='left'){
      current.scrollLeft-=500;

    }else{
      current.scrollLeft+=500;
    }
  }
  return (
    <div className='app__gallery flex__center w-full relative'>
  
    <div className='app__gallery-images w-full'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {galleryimages.map((image,index)=>(
          <div className='app__gallery-images_card flex__center ' key={`IMAGE_GALLERY_${index+1}`}>
            <img src={image.url} className='z-0 absolute' alt='alt' />
            <div className=' z-1 absolute align-bottom'>
            <p className='italic font-montserrat text-[20px] text-white'>Name{index+1}</p>
            </div>
          </div>

        ))}


      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')} />

      </div>

    </div>
    
  </div>
  )
}

export default Carousel
