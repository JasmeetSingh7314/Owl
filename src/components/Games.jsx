import React, { useEffect, useState } from 'react'

const Games = () => {
  const[data,setData]=useState([]);
  const[show,setShow]=useState(false);
  const headers={
  
    'Accept':'application/json',
    'Client-ID':'c6jd48ju5s4c4u7xu1qgyafqfgaee8' , 
    'Authorization': 'Bearer dlx8kkxk8j9pvayvopgcu07v1ilhct',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
    
    
  }


  useEffect(()=>{
    console.log('Above URL')
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
    fetch(
      "https://api.igdb.com/v4/age_ratings",
      { method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Client-ID': '',
          'Authorization': 'Bearer access_token',
          'mode': "no-cors",
          'Access-Control-Allow-Origin':'http://localhost:3000',
        },
        body: "fields category,checksum,content_descriptions,rating,rating_cover_url,synopsis;"
    })
      .then(response => {
          console.log(response.json());
      })
      .catch(err => {
          console.error(err);
      });
    console.log('last URL')
    

  },[])
  return (
    <div>
      <h2>Games List</h2>
      <button onClick={()=>setShow(true)} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Show!</button>
      {console.log(show)}
    </div>
  )
}

export default Games
