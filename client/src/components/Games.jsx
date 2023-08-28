import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import { collectNFT,hex2buf } from '../utils/operation';
import {fetchData} from '../utils/fetchData.js'
import Carousel from './Carousel';


const Games = () => {
  const[gamedata,setgameData]=useState([]);
  const[data,setData]=useState();
  // const[toggle,setToggle]=useState(false)
  const[token,setToken]=useState('c59n15dhg7u7w2t5jurqcheb39n9xe');
  const stapleImage={ url: 'https://images5.alphacoders.com/109/1091255.png'}
  
  
  
  useEffect(()=>{
    // (async()=>{
    //   var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };
    //   await fetch(`http://localhost:8080/getGames?token=${token}`, requestOptions)
    //     .then(response => response.json())
    //     .then(result =>{
    //       setgameData(result)
    //       console.log(gamedata)
    //     }
    //        )
    //     .catch(error => console.log('error', error));
       

    // })()
    (async()=>{
      
      const gData=await fetchData();
      setgameData(gData)
     
    })()
    
    

  },[])

  


  const FindImage= (post)=>{
    
    if(post.cover){
      return post.cover;
    }else{
      return stapleImage
    }
  }
  
  const RenderCards=({data})=>{
  
    if(data?.length>0){
      return(
        data?.map((post,key)=>
          <Card 
          key={key}
          header={post.name}
          description={post.summary}
          id={post.id}
          rating={post.rating}
          image={FindImage(post)}
          isDiff={true}
          
         />
        )
      )   
    } 
  }
  return (
    <div className='ml-10'>
      {/* <button onClick={collectNFT} className='px-4 py-2 text-xs font-bold  text-white font-montserrat  transition-all duration-150 bg-red-700 rounded shadow outline-none active:bg-red-100 hover:shadow-md focus:outline-none ease'>Collect Nfts</button> */}
      {/* <Carousel array={gamedata} /> */}
      <div className='grid grid-cols-4 gap-5 width-[100vw]'>
      <RenderCards data={gamedata} />
      </div>
      
      
      
    </div>
  )
}

export default Games;
