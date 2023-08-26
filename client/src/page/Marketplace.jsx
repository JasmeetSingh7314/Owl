import React from 'react';
import FetchNFT from '../components/FetchNFT'
import Header from '../components/Header'

const Marketplace = () => {
  return (
    <div>
    
      <Header />
      <h1 className='italic text-white text-[60px] font-primary my-5 ml-5'>EXPLORE WHAT OTHERS HAVE TO OFFER</h1>
      <FetchNFT />
    </div>
  )
}

export default Marketplace
