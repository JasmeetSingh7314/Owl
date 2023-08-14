import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import Trending from '../components/Trending'
import Form from '../components/Form'
import Token from '../components/TokenCard'
import collectNFT from '../utils/operations'
const Home = () => {
  // const RenderTabs=()=>{
  //   const NFTS=collectNFT()
    

  // }
  return (
    <div>
        <Header />
        <Banner />
        <Carousel />
        <Trending />
        <Form/>
      
		
      
    </div>
  )
}

export default Home
