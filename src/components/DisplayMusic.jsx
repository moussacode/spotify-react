// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavBar } from './NavBar'
import { songsData } from '../assets/assets';
import { SongItem } from './SongItem';



export const DisplayMusic = () => {

    

  return (
    <>  
    <NavBar/>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today is biggest hits</h1>
        <div className='flex overflow-auto' >
            {songsData.map((item,index)=>(
       
       <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
       
       ))}
        </div>     
    </div>
   
    </>
  )
}
