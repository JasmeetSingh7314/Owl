
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Card from './Card';
import { collectNFT,hex2buf } from '../utils/operation';

const fetchNFT = () => {
    const[Tokendata,setTokenData]=useState([]);
    
    useEffect(()=>{
        const fetchData = async () => {
          
          try {
            const response= await axios.get(
              `https://api.ghostnet.tzkt.io/v1/contracts/KT1RBiovwqPGYxWFz4kcsHCHc6MCvTYWHTG5/bigmaps/data/keys`
            );
            const response1  = await axios.get(
              `https://api.ghostnet.tzkt.io/v1/contracts/KT1J4ngXfTh5HgMeriBzFKacgSNgNdG4gspm/bigmaps/token_metadata/keys`
            );
            const d1 = response.data;
            const d2 = response1.data;
        
            let tokenData = [];
            for (let i = 0; i < d1.length; i++) {
              if((d2[i].value.token_info[""])!=''){
               
                const s = hex2buf(d2[i].value.token_info[""]).split("//").at(-1).replace('"}','');
                
                const res = await axios.get("https://ipfs.io/ipfs/" + s);
             
                 const l1 = d1[i].value;
             
                 const l2 = res.data;
                
                tokenData.push({
                ...l1,
                ...l2,
                 token_id: d2[i].value.token_id,
              });
              }   
            }
            // console.log(tokenData)
            // console.log(tokenData)
            setTokenData(tokenData)

            
            return tokenData;
              
          } catch (e) {
            console.log(e);
          }
        };
        fetchData();
      },[])
    
   console.log(Tokendata)
   const RenderCards=({data})=>{
  
    if(data?.length>0){
      return(
        data?.map((post,key)=>
          <Card 
          key={key}
          header={post.author}
          description={post.description}
          id={post.amount}
          rating={post.name}
          newimage={post.image}
          isDiff={false}
          
         />
        )
      )   
    } 
  }
  return (
    <div>
      <RenderCards data={Tokendata} />
    </div>
  )
}

export default fetchNFT
