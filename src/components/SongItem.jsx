// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

// eslint-disable-next-line react/prop-types
export const SongItem = ({image,name,desc,id}) => {
const {playWithId} =useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        
        <p className='text-slate-200 text-sm'>{desc}</p>    
    </div>
  )
}