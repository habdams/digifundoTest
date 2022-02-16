import { Stack, AddressBook, Wrench, UserCircle, CaretDown } from "phosphor-react";

export default function Sidebar() {
    return (
        <>
            <div className="basis-1/4  flex flex-col bg-slate-900  text-white">
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