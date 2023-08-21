import React, { useEffect, useState } from 'react'
import Card from './Card';
const Games = () => {
  const[gamedata,setgameData]=useState([]);
  const[Cover,setCoverData]=useState([]);
  const[token,setToken]=useState('ynjyet4kzttwh5pp7s6g4j39ijfmgw');
  const stapleImage={ url: 'https://images5.alphacoders.com/109/1091255.png'}
  // const[show,setShow]=useState(false);
 

  // useEffect(()=>{
    
    // const url='https://api.igdb.com/v4/games/?fields=age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites';
 
    // const fetchData=async ()=>{
    //   console.log('Below URL')
    //   await fetch(url,{
    //       method:'POST',
    //       headers,

         
      
    //   }).then(response=>{
    //         console.log(response.json());
    //   }).catch(err=>console.log(err))

    // }
    // fetchData();
  //   (async()=>{
  //     var requestOptions = {
  //       method: 'GET',
  //       redirect: 'follow'
  //     };
  
  //     await fetch("http://localhost:8080/getToken", requestOptions)
  //      .then(response => response.json())
  //      .then(result => {
  //       console.log(result.access_token)
  //       setToken(result.access_token)
  //      })
  //      .catch(error => console.log('error', error));

  //   })()
  //   // var myHeaders = new Headers();
  //   // myHeaders.append("Cache-Control", "no-cache");

  // },[])
  useEffect(()=>{
    (async()=>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      await fetch(`http://localhost:8080/getGames?token=${token}`, requestOptions)
        .then(response => response.json())
        .then(result =>{
          setgameData(result)
          console.log(gamedata)
        }
           )
        .catch(error => console.log('error', error));
       

    })()
    

  },[token])


  const FindImage= (post)=>{
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // await fetch(`http://localhost:8080/getCover?token=${token}&id=${id}`, requestOptions)
    // .then(response => response.json())
    // .then(result =>{
    //   console.log(result)
    //   return result[0];
    // }
    //    )
    // .catch(error => console.log('error', error));
    // // if(Cover?.length>0){
    // //    Cover?.filter((post)=>{
    // //       if(post.id===id){
    // //         console.log(post)
    // //         return post.url;
    // //       }
    // //     }
    // //   )}
    if(post.cover){
      return post.cover;
    }else{
      return stapleImage
    }
  }
 
    

  const RenderCards=({data})=>{
  
    if(data?.length>0){
      return(
        data?.map((post)=>
          <Card 
          header={post.name}
          description={post.summary}
          id={post.id}
          rating={post.rating}
          image={FindImage(post)}
          
         />
        )
      )   
    } 
  }
  return (
    <div className='grid grid-cols-4 gap-5 width-[100vw]'>
      
      
      <RenderCards data={gamedata} />
    </div>
  )
}

export default Games;
