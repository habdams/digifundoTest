import { UserCircle, CaretDown } from "phosphor-react";

export default function TopHeader(){
    return(
        <>
            <div className="flex flex-row justify-between bg-white py-4 px-2 shadow-md">
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