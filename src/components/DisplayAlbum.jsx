// eslint-disable-next-line no-unused-vars
import React,{ useContext } from 'react'
import { NavBar } from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

export const DisplayAlbum = () => {

    const {playWithId} =useContext(PlayerContext)

    const{id}=useParams();
    const albumData = albumsData[id];


  return (
    <div>
        <NavBar/>  
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumData.image} alt="" />
            <div className='flex flex-col'>
                <p className=''>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1'>
                    <img src={assets.spotify_logo} className='inline-block w-5' alt="" />
                    <b> Spotify </b>
                     * 1,354,548 likes
                    <b> * 50 songs,</b>
                    about 2 hr 30 min

                </p>
            </div>
        </div>   
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]'>
            <p className='mr-4'><b>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />

        </div>
        <hr />
        {
            songsData.map((item,index)=>(
                <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 items-center p-2 text-[#a7a7a7] cursor-default hover:bg-[#ffffff2a]'>
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                        <img className='inline w-10 mr-5' src={item.image} alt="" />
                        {item.name}

                    </p>
                    <p className='text-[15px]'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))
        }
    </div>
  )
}
