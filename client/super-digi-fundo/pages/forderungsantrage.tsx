import type { ReactElement } from "react";
import Layout from '../components/layout';
import { ClockIcon, HomeIcon, MenuAlt1Icon, ViewListIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon,ArrowCircleRightIcon } from '@heroicons/react/solid'


const projects = [
    {
        id: 1,
        Aktenzeichen: 'ID 674 947 659',
        Vorhaben: 'Neues Gebaude',
        Gemeinde: 'Neufahrn b. Freising',
        Eingangsdatum: 'March 17, 2020',
        //   members: [
        //     {
        //       name: 'Dries Vincent',
        //       handle: 'driesvincent',
        //       imageUrl:
        //         'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //     },
        //   ],
        status: 'Offen',


    },
    // More projects...
]


const Forderungsantrage = () => (
    <>
        <div className="pt-6 pb-2">
            <h1 className="px-6 text-xl">Forderungsantrage</h1>
        </div>

        <div className="mt-1 relative flex items-center px-6 pb-2">
            <input
                type="text"
                name="search"
                placeholder="Suche nach Aktenzeichen, Gemeinde, ..."
                id="search"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-4/5 pr-12 sm:text-sm border-gray-300 rounded-xl"
            />
            <div className="absolute w-1/5 inset-y-0 right-0 flex py-1.5 pr-0.5">
                <ArrowCircleRightIcon className="px-2 text-pink-400 text-sm" />
            </div>
        </div>

        {/* Projects list (only on smallest breakpoint) */}
        <div className="mt-10 sm:hidden">
            <div className="px-4 sm:px-6">
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Aktenzeichen</h2>
            </div>
            <ul role="list" className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                {projects.map((project) => (
                    <li key={project.id}>
                        <a href="#" className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
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
        <div className="hidden mt-8 sm:block">
            <div className="align-middle inline-block min-w-full border-b border-gray-200">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-t border-gray-200">
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Aktenzeichen
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Vorhaben
                            </th>
                            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Gemeinde
                            </th>
                            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Eingangsdatum
                            </th>
                            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                                    <div className="flex items-center space-x-3 lg:pl-2">
                                        <a href="#" className="truncate hover:text-gray-600">
                                            <span>
                                                {project.Aktenzeichen}
                                            </span>
                                        </a>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    {project.Vorhaben}
                                </td>
                                <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    {project.Gemeinde}
                                </td>
                                <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    {project.Eingangsdatum}
                                </td>
                                <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                                    {project.status}
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </>


);

Forderungsantrage.getLayout = function getLayout(forderungsantrage: ReactElement) {
    return (
        <Layout>
            {forderungsantrage}
        </Layout>
    )
}

export default Forderungsantrage;