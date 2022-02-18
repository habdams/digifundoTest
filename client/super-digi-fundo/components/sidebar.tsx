import { Stack, AddressBook, Wrench, UserCircle, CaretDown } from "phosphor-react";

export default function Sidebar() {
    return (
        <>
            <div className="w-1/5  flex flex-col bg-slate-900  text-white absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:-translate-x-0">
                <img src="#" alt="logo" />
                <ul className="my-4">
                    <li className=" flex flex-row items-center p-4 gap-x-2 hover:bg-white/5 my-2">
                        <Stack />
                        <a href="#">Förderungsanträge</a>
                    </li>

                    <li className="flex flex-row items-center p-4 gap-x-2 hover:bg-white/5 my-2">
                        <AddressBook />
                        <a href="#">Kontakte</a>
                    </li>

                    <li className="flex flex-row items-center p-4 gap-x-2 hover:bg-white/5 my-2">
                        <Wrench />
                        <a href="#">Einstellung</a>
                    </li>
                </ul>
            </div>
        </>
    )
}