import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CaretDown, User, Bell } from "phosphor-react";


export default function TopHeader() {

    return (
        <>

            <div className='bg-black text-gray-50 md:flex p-4 items-center'>
                <div className='w-1/3'>
                    <Image src={'/logo-white.png'} width={148} height={40} className='mr-2' />
                </div>

                <div className='w-2/3 md:flex justify-between'>
                    <ul className='md:flex mx-2 gap-2'>
                        <Link href={'/forderungsantrage'}><a><li className='mx-2'>Forderungsantrage</li></a></Link>
                        <Link href={'/'}><a><li className='mx-2'>Budgetplannung</li></a></Link>
                        <Link href={'/'}><a><li className='mx-2'>Kontakte</li></a></Link>
                    </ul>

                    <Link href={'/'}><a className='mx-4'>Brauchen Sie Hilfe?</a></Link>

                    <span className='flex'>
                        <Link href={'/'}><Bell size={32} color="#ffffff" weight="fill" className='mx-3' /></Link>
                        <Link href={'/'}><User size={32} color="#ffffff" weight="fill" className='mx-3' /></Link>
                    </span>
                </div>
            </div >
        </>
    )
}