import type { ReactElement } from "react";
import Layout from "../components/layout";
import searchIcon from "../utils/search-icon.svg";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import {
    BadgeCheckIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    CollectionIcon,
    SearchIcon,
    SortAscendingIcon,
    StarIcon,
} from "@heroicons/react/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const projects = [
    {
        id: 1,
        Aktenzeichen: "ID 674 947 659",
        Titel: "Neues Gebaude",
        Gemeinde: "Hochstadt",
        Landkreis: "Freising",
        Eingangsdatum: "21.02.2021",
        Sachbearbeiter: "Herr Hoffmann",

        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: "In Bearbeitung",
    },
   
    // More projects...
];

const Forderungsantrage = () => (
    <>

        <div className=" flex flex-col md:flex-row items-start justify-start mt-8">
            <div className="pb-2 w-2/5">
                <h1 className= "text-2xl ml-4 font-mono">
                    Förderungsanträge
                </h1>

                <div className="mt-1 relative flex pb-2 h-14 justify-items-center items-center flex-1 flex-row ">

                    <div className="bg-red-200 w-full h-10 m-4 content-center rounded-full">
                        <input
                            type="text"
                            name="search"
                            placeholder="Suche nach Aktenzeichen, Gemeinde, ..."
                            id="search"
                            className="h-full shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full rounded-full pr-12 sm:text-sm border-gray-300"
                        />
                    </div>

                    <div className="absolute right-0 mr-10 flex flex-col justify-center items-center h-12 w-12 p-2">
                        <Image
                            src={searchIcon}
                            className="px-2 text-pink-400 text-sm items-center "
                        />
                    </div>
                </div>
            </div>

            <div className="w-3/5 flex flex-col justify-end px-12 items-end">
                <div>
                    <h3 className="text-lg text-gray-800">Kindergarten Förderung</h3>
                    <p>Restbudget: <span className="font-bold">98 Mio €</span></p>
                </div>
                <div className="mt-4">
                    <ul className="flex flex-col md:flex-row text-sm">
                        <li className="mr-4 text-green-600">129 In Bearbeitung</li>
                        <li className="mr-4 text-pink-600">23 Abgelehnt</li>
                        <li className="mr-4 text-purple-600">92 Bescheid erstellt</li>
                        <li className="mr-4 text-gray-700">943 Vorgang zum Akt</li>
                    </ul>
                </div>

            </div>

        </div>
        <div className="bg-white lg:min-w-0 lg:flex-1">
            <div className="pl-4 pr-6 pt-4 pb-4   sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                <div className="flex items-center">
                    <h1 className="flex-1 text-lg font-medium"></h1>
                    <Menu as="div" className="relative">
                        {/* <Menu.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <SortAscendingIcon
                                className="mr-3 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            Sort
                            <ChevronDownIcon
                                className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Menu.Button> */}
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Name
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Date modified
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                            )}
                                        >
                                            Date created
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
        </div>
        {/* Projects list (only on smallest breakpoint) */}
        <div className="mt-10 sm:hidden">
            <div className="px-4 sm:px-6">
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                    Aktenzeichen
                </h2>
            </div>
            <ul
                role="list"
                className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
            >
                {projects.map((project) => (
                    <li key={project.id} className="">
                        <a
                            href="#"
                            className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                        >
                            <span className="flex items-center truncate space-x-3">
                                <span className="font-medium truncate text-sm leading-6">
                                    {project.Aktenzeichen}
                                </span>
                            </span>
                            <ChevronRightIcon
                                className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        {/* Projects table (small breakpoint and up) */}
        <div className="hidden mt-14 sm:block m-4">
            <div className="align-middle inline-block min-w-full border-b border-gray-200">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-t border-gray-200">
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Aktenzeichen
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Titel
                            </th>
                            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Gemeinde
                            </th>
                            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Lankreis
                            </th>

                            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Eingangsdatum
                            </th>

                            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sachbearbeiter
                            </th>
                            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {projects.map((project) => (
                            <tr key={project.id} className="h-20">
                                <td className="px-6 py-3 max-w-0 w-1/5 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                                    <div className="flex items-center space-x-3 lg:pl-2">
                                        <a
                                            href="#"
                                            className=" hover:text-gray-600"
                                        >
                                            <span>{project.Aktenzeichen}</span>
                                        </a>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    {project.Titel}
                                </td>
                                <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    {project.Gemeinde}
                                </td>
                                <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    {project.Landkreis}
                                </td>
                                <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    {project.Eingangsdatum}
                                </td>
                                <td className="hidden md:table-cell w-1/5 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    {project.Sachbearbeiter}
                                </td>
                                <td className="hidden md:table-cell w-1/12 px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    <span
                                        className={`bg-${project.status == "In Bearbeitung"
                                            ? "green-100"
                                            : "blue-200"
                                            } text-${project.status == "In Bearbeitung"
                                                ? "green-600"
                                                : "blue-500"
                                            } p-2 rounded-2xl px-4`}
                                    >
                                        {project.status}
                                    </span>
                                </td>
                                <td className=" px-10 py-6 w-1/2 whitespace-nowrap text-left text-sm font-medium">
                                    <Link href="/antragsliste">
                                        <Image
                                            src={"/edit-icon.svg"}
                                            height={20}
                                            width={20}
                                            color={"red"}
                                        />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
);

Forderungsantrage.getLayout = function getLayout(
    forderungsantrage: ReactElement
) {
    return <Layout>{forderungsantrage}</Layout>;
};

export default Forderungsantrage;
