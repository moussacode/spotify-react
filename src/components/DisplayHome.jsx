// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavBar } from './NavBar'
import { albumsData } from '../assets/assets'
import { AlbumItem } from './AlbumItem'
import { ErrorBoundary } from "react-error-boundary";
import { songsData } from '../assets/assets';
import { SongItem } from './SongItem';


export const DisplayHome = () => {
  return (
    <>
    <NavBar/>

    <ErrorBoundary fallback={<div>Something went wrong</div>}>
  
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto' >

   {albumsData.map((item,index)=>(
       
       <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
       
       ))}
        </div>     
    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today is biggest hits</h1>
        <div className='flex overflow-auto' >
            {songsData.map((item,index)=>(
       
       <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
       
       ))}
        </div>     
    </div>
</ErrorBoundary>
    </>
  )
}
