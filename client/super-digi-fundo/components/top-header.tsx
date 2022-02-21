import React, { useState } from 'react';
import { UserCircle, CaretDown} from "phosphor-react";


export default function TopHeader() {

    return (
        <>
            <div className="flex flex-row justify-between w-full bg-white py-4 px-6 shadow-md">
                <a className="text-xl text-slate-700">Logo</a>

                <div className="flex flex-row items-center">
                    <span>
                        <UserCircle size={32} />
                    </span>
                    <h3>Max Mustermann</h3>
                    <CaretDown />
                </div>
            </div>
        </>
    )
}