import type { ReactElement } from "react";
import Link from "next/link";
import Layout from "../components/layout";
import InnerLayout from "../components/innerLayout";
import DocComp from "../components/docComp";
import { FolderUser } from "phosphor-react"

const tabs = [
    { name: "Allgemein", href: "#", current: false },
    { name: "Forderart", href: "#", current: true },
    { name: "Info Forderung", href: "#", current: false },
    { name: "Kosten", href: "#", current: false },
];

const infos = [
    {
        header: "Grund",
        detail: "Anbau an das alte Gebäude damit mehr Kinderplatz haben",
    },
    {
        header: "Zimmertypen",
        detail: "Gemeinschaftszimmer + Küche + Toilletten",
    },
    { header: "Landkreis", detail: "Musterlandkreis" },
    { header: "E-mail", detail: "muster@email.de" },
    { header: "ELSTER", detail: "ID0889039" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Antragsliste = () => (
    <>
        <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center py-6">
            <div className="px-6 flex items-center gap-2">
                <FolderUser size={32} />
                <h1 className="text-2xl mt-2 font-mono">Antrag</h1>
            </div>
        </div>
        <div className=" px-6">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="mb-4">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                        ? "bg-black text-white"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                                    "whitespace-nowrap px-3 py-2 font-medium text-sm rounded-xl flex items-center"
                                )}
                                aria-current={tab.current ? "page" : undefined}
                            >

                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
        <div className="mt-4  px-6">
            {infos.map((info, index) => (
                <div
                    key={info.header}
                    className={classNames(
                        index % 2 == 0
                            ? "flex flex-col lg:flex-row  md:items-center text-left bg-gray-200 p-2 mb-2 items-start text-gray-600"
                            : "flex flex-col lg:flex-row  md:items-center text-left bg-white p-2 mb-2 items-start text-gray-600"
                    )}
                >
                    <span className="w-3/12 text-sm md:text-base">
                        {info.header}
                    </span>

                    <span className="6/12 text-base md:text-sm">
                        {info.detail}
                    </span>
                </div>
            ))}
        </div>
        <div className="mt-20 px-6 ">
            <h3 className="text-lg font-mono font-bold">Förderbeschreibung</h3>
            <DocComp
                btnTitle="offnen"
                itemName="KinderHochstadt_zimmer"
                itemLocation="/pdfs/kindergarden.pdf"
            />

            <h3 className="text-lg font-mono font-bold">
                Zimmertypenauflistung
            </h3>
            <DocComp
                btnTitle="offnen"
                itemName="KinderHochstadt_zimmer"
                itemLocation="/pdfs/kindergarden.pdf"
            />
        </div>
        <div className="mt-10 h-12 flex justify-end mb-10">
            <Link href={"/notification"}>
                <button
                    type="button"
                    className="items-center w-40 text-center px-4 py-2 border mr-8 border-transparent font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Benachrichtigen
                </button>
            </Link>
        </div>
    </>
);

Antragsliste.getLayout = function getLayout(antragsliste: ReactElement) {
    return <Layout><InnerLayout>{antragsliste}</InnerLayout></Layout>;
};

export default Antragsliste;
