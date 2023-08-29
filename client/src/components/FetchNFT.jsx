
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Card from './Card';
import { collectNFT,hex2buf } from '../utils/operation';

const FetchNFT = () => {
    const[Tokendata,setTokenData]=useState([]);
     
    const apiEndpoint = "https://api.ghostnet.tzkt.io/v1/tokens/balances"
    const tokenFetch=async ()=>{
      const res = await axios.get(apiEndpoint,
        {
            params: 
            // {
            //   account:'tz1eUd9joGEHLevziAZmPKB2upkjK1QJKbUg',
            //   "token.standard":"fa2",
            //   // ...options
            // }
            { 
                account: "tz1eUd9joGEHLevziAZmPKB2upkjK1QJKbUg", 
                "token.standard":"fa2",
                limit: 10,
                offset: 0,
                "token.contract": "",
            }
        })

        const result =  res.data;
        console.log(result)

        return result;

    }
      
    
    useEffect(()=>{
       
        const fetchData = async () => {
          
          try {
            const response= await axios.get(
              `https://api.ghostnet.tzkt.io/v1/contracts/KT1TUCpR9pMfavbd5MuGWLBinsC4mN3PdeAQ/bigmaps/data/keys`
            );
            const response1  = await axios.get(
              `https://api.ghostnet.tzkt.io/v1/contracts/KT1DHw4N92SZp5yFn9RKqmWLKkGy31JRvzKk/bigmaps/token_metadata/keys`
            );
            // const response2=await axios.get('https://api.tzkt.io/v1/tokens/balances?account=tz1eUd9joGEHLevziAZmPKB2upkjK1QJKbUg');
            const d1 = response.data;
            const d2 = response1.data;
            // const d3=response2.data;
            // console.log(d3)
            console.log(d1)
            console.log(d2)

        
            let tokenData = [];
            for (let i = 0; i < d1.length; i++) {
              
              if((d2[i].value.token_info)!='' || (d2[i].value.token_info)===undefined ){
                // console.log(d2[i].value.token_info[""])
                
               
                const s = hex2buf(d2[i].value.token_info[""]).split("//").at(-1).replace('"','');
                console.log(s)
                
                const res = await axios.get("https://ipfs.io/ipfs/" + s);
             
                 const l1 = d1[i].value;
             
                 const l2 = res.data;
                
                tokenData.push({
                ...l1,
                ...l2,
                 token_id: d2[i].value.token_id,
              });
              // console.log(tokenData)
              }   
            }
            // console.log(tokenData)
            console.log(tokenData)
            setTokenData(tokenData)

            
            return tokenData;
              
          } catch (e) {
            console.log(e);
          }
        };
        fetchData();
        console.log(tokenFetch())
      },[])
      
  const onNFT=()=>{
    console.log(Tokendata)
    collectNFT(Tokendata[0].amount,Tokendata[0].token_id)
    
  }
 
   console.log(Tokendata)
   
   const RenderCards=({data})=>{
  
    if(data?.length>0){
      return(
        data?.map((post,key)=>
          <Card 
          key={key}
          header={post.name}
          description={post.description}
          id={post.amount}
          rating={post.author}
          newimage={post.image}
          isDiff={false}
          
         />
        )
      )   
    } 
  }
  return (
    <div className='grid grid-cols-4 gap-5 width-[100vw] ml-5'>
      <button onClick={onNFT} className=' '>Collect NFt</button>
      <RenderCards data={Tokendata} />
    </div>
  )
}

export default FetchNFT
