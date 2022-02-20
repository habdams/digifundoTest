import React, { useState } from 'react';
import { UserCircle, CaretDown, List, XSquare } from "phosphor-react";


export default function TopHeader() {
    const [show, setShow] = useState(false);

    const toggleSidebar = () => {
        setShow(!show);
    }

    return (
        <>
            <div className=" flex justify-between bg-slate-900 text-white p-4 md:hidden">
                {/* logo */}
                <a className="block p-4"></a>

                {/* mobile menu button */}
                <button className="focus:outline-none focus:bg-slate-700" id="hamburgerMenu" onClick={toggleSidebar}>
                    {show ? <XSquare className='h-5 w-5' /> : <List className=" h-5 w-5" />}
                </button>

            </div>
            <div className="flex flex-row justify-between w-full bg-white py-4 px-2 shadow-md">
                <h1 className="text-xl text-slate-700">Förderungsanträge</h1>

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