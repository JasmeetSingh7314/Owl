import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Games from '../components/Games'
import Carousel from '../components/Carousel'
import FetchNFT from '../components/fetchNFT'

const Collection = () => {
  return (
    <div className='px-5 py-5 w-full ml-10'>
        <Header />
        <h1 className=' ml-20 text-6xl font-primary '>ACTION ADVENTURE RPG SHOOTING</h1>

        <Carousel />
        <Games />
        <FetchNFT />
        
      
    </div>
  )
}

export default Collection
