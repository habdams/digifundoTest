import React from 'react';
import { DotsSixVertical } from 'phosphor-react';

export default function Notes({note,id}){
    return(
        <>
        <div  className='flex gap-2 text-pink-600 items-start my-2'>
             <span><DotsSixVertical size={24} color="#212121"  weight='fill' /></span><p className='break-all'> {note}</p>
        </div>
        </>
    )
}

