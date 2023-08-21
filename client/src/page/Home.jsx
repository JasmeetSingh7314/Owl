import React, { useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import Trending from '../components/Trending'
import Form from '../components/Form'
import { mintNFT } from '../utils/operations'

// import TestingWallet from '../components/TestingWallet'
const Home = () => {
  // const RenderTabs=()=>{
  //   const NFTS=collectNFT()
    

  // }
  // useEffect(()=>{
  //   const amount=2;
  //   const metadata={
  //     name: name,
  //     description: description,
  //     decimals: 0,
  //     // symbol: symbol,

  //   }
  //   mintNFT(amount,metadata)

  // },[])
  return (
    <div>
        <Header />
        <Banner />
        <Carousel />
        <Trending />
        <Form />
        
        
      
		
      
    </div>
  )
}

export default Home
