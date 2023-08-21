import React from 'react'
import './card.css';
import './Carousel.css';

const Card = ({ header,description,id,rating,image}) => {
  let newUrl=''
  if(image.url){
    newUrl=image.url.replace(/thumb/g, "720p	")

  }
  
  return (
   
  
  //   <div className='app__gallery-images_card  flex__center ' >
  //   <img src={newUrl} className='z-0' alt='alt' />
    
  //   <div className=' '>
  //   <p className=' italic font-montserrat text-[20px] text-white'>{header}</p>
  //   <p className='Text italic font-montserrat text-[20px] text-white'>{description}</p>
  //   {/* <p className=' italic font-montserrat text-[20px] text-white'>{id}</p> */}
  //   </div>
  //   <div className='empty absolute bottom-0 w-80 ml-2 mb-2'></div>
  // </div>
  <div
  class="block max-w-[18rem] rounded-lg mb-10 bg-stone-900 backdrop-blur-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.8),0_10px_20px_-2px_rgba(0,0,0,0.04)] drop-shadow-2xl  dark:bg-black-900">
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      class="rounded-t-lg"
      src={newUrl}
      alt="" />
  </div>
  <div class="p-6">
    <h5
      class="mb-2 text-xl font-nunito font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {header}
    </h5>
    <p class=" Text font-montserrat  text-base text-neutral-600 dark:text-neutral-200">
       {description}
    </p>
  </div>
  <ul class="w-full">
    <li
      class="w-full font-montserrat border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
      Rating: {rating}
    </li>
    {/* <li
      class="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
      {rating}
    </li>
    <li
      class="w-full border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
      {rating}
    </li> */}
  </ul>
  <div class=" flex align-middle p-6">
    {/* <a
      type="button"
      href="#"
      class="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
      Card Link
    </a>
    <a
      type="button"
      href="#"
      class="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700">
      Another Link
    </a> */}
    <button className='px-4 py-2 w-full text-xs font-bold  text-white font-montserrat  transition-all duration-150 bg-red-700 rounded shadow outline-none active:bg-red-100 hover:shadow-md focus:outline-none ease' >Buy</button>
  </div>
</div>
  )
}

export default Card
