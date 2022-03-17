import React from 'react';
import Image from 'next/image';


export default function Footer() {

    return (
        <>
            <div className="flex bg-black text-gray-50 flex-col md:flex-row p-8 justify-between  items-center">
                <div className='md:w-2/5'>
                    <h3 className='mb-2 '>Geben Sie uns ein Feedback:</h3>
                    <textarea name="" id="" cols={30} rows={10} className="rounded-md bg-gray-100 text-black" placeholder='Was gefällt Ihnen oder gefällt Ihnen nicht an DigiFunDo?'></textarea>
                </div>
                <div></div>
                <div className='flex md:flex-col md:justify-center md:w-1/5 sm:mt-10 space-between'>
                    <span  className='my-8'><Image src={'/logo-dgsch.png'} width={200} height={65} /></span>
                    <span  className='my-8'><Image src={'/logo-dps.png'} width={200} height={65} /></span>
                </div>
            </div>
        </>
    )
}