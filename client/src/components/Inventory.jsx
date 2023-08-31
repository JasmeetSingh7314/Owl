import React,{useState,useEffect} from 'react'
import axios from 'axios'
import FetchNFT from './fetchNFT'
import Card from './Card/Card';
import { collectNFT,hex2buf, transferNFT } from '../utils/operation';
import { getAccount } from '../utils/wallet';

const Inventory = () => {
  const[Tokendata,setTokenData]=useState([]);
  useEffect(()=>{
       
    const fetchData = async () => {
      
      try {
        const response= await axios.get(
          `https://api.ghostnet.tzkt.io/v1/contracts/KT1Uc2Z5BEVa1AgfkKXNciGK21MpnZUmXLw2/bigmaps/data/keys`
        );
        const response1  = await axios.get(
          `https://api.ghostnet.tzkt.io/v1/contracts/KT1CJkLeHVq4N4wGiC7bs9KJeKN7zTqUNBp1/bigmaps/token_metadata/keys`
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
            let l1;
            const address=await getAccount();
             if(d1[i].value.holder==address || d1[i].value.author==address){
              l1= d1[i].value;

             }
             console.log(l1)
              
         
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
    // console.log(tokenFetch())
  },[])
  const RenderCards=({data})=>{
  
    if(data?.length>0){
      return(
        data?.map((post,key)=>
          <Card 
          key={key}
          header={post.name}
          description={post.description}
          id={post.amount}
          owner={post.holder}
          newimage={post.image}
          isDiff={false}
          tokenId={post.token_id}

          
         />
        )
      )   
    } 
  }
  return (
    <div>
    <h1 className='text-[#fff] text-[50px] font-montserrat'>Inventory</h1>
    <div className='grid grid-cols-4 gap-5 width-[100vw] ml-5'>
      
      <RenderCards data={Tokendata} />
    </div>
    </div>
  )
}

export default Inventory
