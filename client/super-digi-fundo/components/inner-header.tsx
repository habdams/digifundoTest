import React from 'react';
import Image from 'next/image';
import searchIcon from "../utils/search-icon.svg";
import Link from 'next/link';
import { ArrowLeft, PhoneCall, Envelope } from "phosphor-react";
import { FolderUser, Files, Calculator, UserPlus, CalendarCheck } from "phosphor-react"


const tabs = [
    { name: "Antrag", href: "#", icon: FolderUser, current: true },
    { name: "Fachliche Dokumente", href: "#", icon: Files, current: false },
    { name: "Kalkulation", href: "#", icon: Calculator, current: false },
    { name: "Bescheide & Vermerke", href: "#", icon: UserPlus, current: false },
    { name: "Verwendungsnachweis", href: "#", icon: CalendarCheck, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


export default function InnerHeader() {

    return (
        <>
            <div className='flex  mt-9 shadow-xl px-2 pt-2'>
                <div className='flex w-4/5 flex-col'>
                    <div className='flex justify-between'>

                        <div className=''>
                            <Link href={'/forderungsantrage'} passHref>
                                <a href="" className='flex items-center gap-2 hover:text-gray-600'>
                                    <ArrowLeft />
                                    <h1>Hochstadt Renovierung</h1>
                                </a>
                            </Link>


                        </div>

                        <div className=" relative flex pb-2 h-14 justify-items-center items-center flex-row ">
                            <div className="bg-red-200 w-full h-10 m-4 content-center rounded-full">
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Suche nach Aktenzeichen, Gemeinde, ..."
                                    id="search"
                                    className="h-full shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full rounded-full pr-12 sm:text-sm border-gray-300"
                                />
                            </div>

                            <div className="absolute right-0 mr-3 flex flex-col justify-center items-center h-12 w-12 p-2">
                                <Image
                                    src={searchIcon}
                                    className="px-2 text-gray-800 text-sm items-center "
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="ml-4">
                            <div className="sm:hidden">
                                <label htmlFor="tabs" className="sr-only">
                                    Select a tab
                                </label>
                                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                <select
                                    id="tabs"
                                    name="tabs"
                                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                                    defaultValue={tabs.find((tab) => tab.current).name}
                                >
                                    {tabs.map((tab) => (
                                        <option key={tab.name}>{tab.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="hidden sm:block">
                                <div className="border-b border-gray-200">
                                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                        {tabs.map((tab) => (
                                            <a
                                                key={tab.name}
                                                href={tab.href}
                                                className={classNames(
                                                    tab.current
                                                        ? "border-pink-500 text-pink-600"
                                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                                                    "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                                                )}
                                                aria-current={tab.current ? "page" : undefined}
                                            >
                                                <tab.icon
                                                    className={classNames(
                                                        tab.current ? 'text-pink-600' : 'text-gray-400 group-hover:text-gray-500',
                                                        '-ml-0.5 mr-2 h-5 w-5'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {tab.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-1/5 flex-col justify-center ml-8'>
                    <h3 className='font-bold'>Gemeinde Kontakt</h3>
                    <span className='flex gap-2 items-center text-sm text-gray-600 my-2'>
                        <h3>+49 92 83134789</h3>
                        <PhoneCall />
                    </span>
                    <span className='flex gap-2 items-center text-sm text-gray-600'>
                        <h3>hans.hert@bayern.de</h3>
                        <Envelope />
                    </span>
                </div>
            </div>
        </>
    );
}