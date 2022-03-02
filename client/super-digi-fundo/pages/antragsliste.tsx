import type { ReactElement } from "react";
import Image from 'next/image';
import Link from "next/link";
import { CaretLeft } from "phosphor-react";
import searchIcon from "../utils/search-icon.svg";
import Layout from '../components/layout';
import PdfViewer from "../components/pdfViewer";

const tabs = [
    { name: 'Allgemein', href: '#', current: false },
    { name: 'Forderart', href: '#', current: true },
    { name: 'Info Forderung', href: '#', current: false },
    { name: 'Kosten', href: '#', current: false },
]

const infos = [
    { header: 'Grund', detail: 'Anbau an das alte Gebäude damit mehr Kinderplatz haben' },
    { header: 'Zimmertypen', detail: 'Gemeinschaftszimmer + Küche + Toilletten' },
    { header: 'Landkreis', detail: 'Musterlandkreis' },
    { header: 'E-mail', detail: 'muster@email.de' },
    { header: 'ELSTER', detail: 'ID0889039' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Antragsliste = () => (
    <>
        <div className="font-mono hover:text-pink-400 text-pink-600  mt-6 ml-4 px-6">
            <Link href={'/forderungsantrage'} >
                <a className="flex flex-row items-center">
                    <CaretLeft /> Go back
                </a>
            </Link>

        </div>
        <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center py-6">

            <div className="ml-4 px-6">
                <h1 className="text-2xl mt-2 font-mono">Antrag</h1>
            </div>

            <div className="mt-1 w-full lg:w-1/2 relative flex px-6 pb-2 h-14 justify-end items-center flex-1 flex-row">
                <div className="bg-red-200  w-full lg:w-1/2 h-10 m-4 content-center rounded-full">
                    <input
                        type="text"
                        name="search"
                        placeholder="Suche nach Aktenzeichen, Gemeinde, ..."
                        id="search"
                        className="h-full shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full rounded-full pr-12 sm:text-sm border-gray-300"
                    />
                </div>
                <div className="absolute right-0 mr-10 flex flex-col justify-center items-center h-12 w-12 p-2">
                    <Image src={searchIcon} className="px-2 text-pink-400 text-sm items-center " />
                </div>
            </div>
        </div>

        <div className="ml-4 px-6">
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
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>

        <div className="mt-4 ml-4 px-6">
            {infos.map((info, index) => (
                <div key={info.header} className={classNames(
                    index % 2 == 0
                        ? 'flex flex-col lg:flex-row  md:items-center text-left bg-gray-200 p-2 mb-2 items-start text-gray-600'
                        : 'flex flex-col lg:flex-row  md:items-center text-left bg-white p-2 mb-2 items-start text-gray-600'
                )}>
                    <span className="w-3/12 text-sm md:text-base">
                        {info.header}
                    </span>

                    <span className="6/12 text-base md:text-sm">
                        {info.detail}
                    </span>

                </div>
            ))}
        </div>

        <div className="mt-20 px-6 ml-4">
            <h3 className="text-lg font-mono font-bold">Förderbeschreibung</h3>
            <div className="bg-gray-200 flex items-center p-2 rounded justify-between mb-4">
                <div className="flex flex-row w-6/12 items-center gap-2">
                    <Image src={'/FileDoc.svg'} width={40} height={40} />
                    <p className="text-lg">Beschreibungsdok4.doc</p>
                </div>

                <div className="w-3/12 flex flex-row items-center gap-2">
                    <Image src={'/ellipse-pink.svg'} width={20} height={20} />
                    <p className="text-lg">geprüft</p>
                </div>

                <div className="w-3/12">
                    <a href="#" className="bg-black text-white px-4 py-2 rounded">
                        öffnen
                    </a>
                </div>

            </div>

            <h3 className="text-lg font-mono font-bold">Zimmertypenauflistung</h3>
            <div className="bg-gray-200 flex items-center p-2 rounded mb-10">
                <div className="flex flex-row w-6/12 items-center gap-2">
                    <Image src={'/FilePdf.svg'} width={40} height={40} />
                    <p className="text-lg">KinderHochstadt_zimmer.pdf</p>
                </div>

                <div className="w-3/12 flex flex-row items-center gap-2">
                    <Image src={'/ellipse-blue.svg'} width={20} height={20} />
                    <p className="text-lg">nicht geprüft</p>
                </div>

                <div className="w-3/12">
                    <a href="#" className="bg-black text-white px-4 py-2 rounded">
                        öffnen
                    </a>
                </div>

            </div>
                    <PdfViewer />
        </div>



    </>


);

Antragsliste.getLayout = function getLayout(antragsliste: ReactElement) {
    return (
        <Layout>
            {antragsliste}
        </Layout>
    )
}

export default Antragsliste;
