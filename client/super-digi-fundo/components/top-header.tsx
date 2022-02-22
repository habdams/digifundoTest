import React, { useState } from 'react';
import Image from 'next/image';
import { UserCircle, CaretDown} from "phosphor-react";


export default function TopHeader() {

    return (
        <>
            <div className="flex flex-row justify-between w-full bg-white py-4 px-6 shadow-md">
                <a className="text-xl text-slate-700">
                    <Image src={'/logo.png'} height={58} width={236}/>
                </a>

                <div className="flex flex-row items-center">
                    <span className='mx-2'>
                       <Image src={'/avatar.svg'} width={48} height={48} />
                    </span>
                    <h3>Max Mustermann</h3>
                    <CaretDown />
                </div>
            </div>
        </>
    )
}